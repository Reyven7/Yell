import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createUser,
  getUserByEmail,
  getUserById,
} from "@src/services/user.service";
import argon2 from "argon2";
import { AppError } from "@src/libs/classes/app-error.class";
import {
  dropRefreshToken,
  generateToken as generateToken,
} from "@src/utils/generate-tokens";

export const register = asyncHandler(async (req: Request, res: Response) => {
  await createUser(req.body);
  res.status(201).json({ message: "User created successfully" });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isValid = await argon2.verify(user.passwordHash, password);

  if (!isValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const { refreshToken, accessToken } = await generateToken(user);

  res.json({ accessToken, refreshToken });
});

export const refreshToken = asyncHandler(
  async (req: Request, res: Response) => {
    const refreshToken = req.headers.authorization?.replace("Bearer ", "");

    if (!refreshToken) throw new AppError("Invalid token", 401);

    const user = await getUserById(req.user.id, {
      id: true,
      role: true,
      refreshToken: true,
    });

    if (!user) throw new AppError("User not found", 404);

    const verifyToken = await argon2.verify(user.refreshToken!, refreshToken);

    if (!verifyToken) throw new AppError("Wrong refresh token", 403);

    const tokens = await generateToken(user);

    res.json(tokens);
  }
);

export const getMe = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user === null)
    throw new AppError("Invalid token. Please log in again.", 401);

  res.json(req.user);
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  await dropRefreshToken(req.user.id);
  res.json("Logout successfully");
});
