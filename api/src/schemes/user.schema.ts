import { z as zod } from "zod";

export const createUserSchema = zod.object({
  body: zod.object({
    username: zod.string().min(1),
    email: zod.string().email(),
  }),
});

