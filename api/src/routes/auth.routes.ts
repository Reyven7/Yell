import {
  getMe,
  login,
  logout,
  refreshToken,
  register,
} from "@src/controllers/auth.controller";
import {
  authMiddleware,
  refreshMiddleware,
} from "@src/middleware/auth-middleware";
import { validate } from "@src/middleware/validate";
import { loginSchema, registerSchema } from "@src/schemas/auth.schema";
import { Router } from "express";

export const authRoutes = () => {
  const router = Router();

  router.post("/register", validate(registerSchema), register);
  router.post("/login", validate(loginSchema), login);
  router.get("/refresh", refreshMiddleware, refreshToken);
  router.get("/me", authMiddleware, getMe);
  router.get("/logout", authMiddleware, logout);

  return router;
};
