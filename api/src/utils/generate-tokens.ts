import jwt, { SignOptions } from "jsonwebtoken";
import { PrismaClient, User } from "../../generated/prisma";
import argon2 from "argon2";

const prisma = new PrismaClient();

export const generateToken = async (user: User) => {
  const payload = { id: user.id, role: user.role };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_SECRET_EXPIRES,
  } as SignOptions);

  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES,
  } as SignOptions);

  const hashedRefreshToken = await argon2.hash(refreshToken);

  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken: hashedRefreshToken },
  });

  return Promise.resolve({ accessToken, refreshToken });
};

export const dropRefreshToken = async (id: string) => {
  await prisma.user.update({
    where: { id },
    data: { refreshToken: null },
  });
};
