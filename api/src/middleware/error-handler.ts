import { AppError } from "@src/libs/classes/app-error.class";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: Error | AppError | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.setHeader("Content-Type", "application/json");

  if (err instanceof ZodError) {
    res.status(400).json({
      status: "error",
      message: "Validation error",
      errors: err.format(),
    });
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: "error",
      message: err.message || "Something went wrong",
    });
    return;
  }

  res.status(500).json({
    status: "error",
    message: `Internal server error, ${err}`,
  });
};
