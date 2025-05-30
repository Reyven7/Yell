import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@src/libs/classes/app-error.class";
import jwt from "jsonwebtoken";
import { getUserById } from "@src/services/user.service";
import { userPublicSelect } from "@src/models/user.selects";
import { findScenarios } from "@src/services/scenario.service";

export const authMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token || token === null)
      throw new AppError("There is no token in header", 401);

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string;
      };

      if (!payload) throw new AppError("Invalid token", 401);

      const user = await getUserById(payload.id, userPublicSelect);

      req.user = user;
      next();
    } catch (error) {
      console.error("AuthMiddleware Error:", error);
      throw new AppError("Authentication error. Please try again later.", 401);
    }
  }
);

export const refreshMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token || token === null) {
      throw new AppError("There is no token in header", 401);
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as {
        id: string;
      };

      if (!payload) throw new AppError("Invalid token", 401);

      const user = await getUserById(payload.id, userPublicSelect);

      req.user = user;

      next();
    } catch (error) {
      console.error("RefreshMiddleware Error:", error);
      throw new AppError("Authentication error. Please try again later.", 401);
    }
  }
);

export const ownerMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scenarios = await findScenarios(req.params.id, { userId: true });

      if (!scenarios) {
        throw new AppError("Scenario not found!", 404);
      }

      if (scenarios.userId !== req.user.id) {
        throw new AppError("You are not the owner of this scenario.", 403);
      }

      next();
    } catch (error) {
      console.error("OwnerMiddleware Error:", error);
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError("You are not the owner. Please try again later.", 403);
    }
  }
);
