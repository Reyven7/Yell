import { z as zod } from "zod";

export const loginSchema = {
  body: zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  }),
};

export const refreshSchema = {
  body: zod.object({
    refreshToken: zod.string(),
  }),
};

export const registerSchema = {
  body: zod.object({
    username: zod.string().min(1),
    email: zod.string().email(),
    password: zod
      .string()
      .min(8)
      .regex(/[A-Z]/, "Must contain at least one capital letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one digit"),
  }),
};

export type RegisterInput = zod.infer<typeof registerSchema.body>;
export type LoginInput = zod.infer<typeof loginSchema.body>;
