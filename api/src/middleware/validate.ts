import { NextFunction, Request, RequestHandler, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

type ValidationSchema = {
  body?: AnyZodObject;
  query?: AnyZodObject;
  params?: AnyZodObject;
};

export const validate = (schema: ValidationSchema): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schema.body) {
        const result = await schema.body.parseAsync(req.body);
        req.body = result;
      }
      if (schema.query) {
        const result = await schema.query.parseAsync(req.query);
        req.query = result;
      }
      if (schema.params) {
        const result = await schema.params.parseAsync(req.params);
        req.params = result;
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json(error.format());
      }
      next(error);
    }
  };
};
