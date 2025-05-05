import { RegisterInput } from "@src/schemas/auth.schema";
import { Prisma, PrismaClient } from "../../generated/prisma/client";
import argon2 from "argon2";
import { AppError } from "@src/libs/classes/app-error.class";

const prisma = new PrismaClient();

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AppError("User not found", 404);
  return user;
};

export const getUserById = async (id: string, select?: Prisma.UserSelect) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select,
  });
  if (!user) throw new AppError("User not found", 404);
  return user;
};

export const createUser = async (data: RegisterInput) => {
  const { username, email, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError("User with this email already exists", 400);
  }

  const passwordHash = await argon2.hash(password);

  const newUser = await prisma.user.create({
    data: { username, email, passwordHash },
  });

  return newUser;
};
