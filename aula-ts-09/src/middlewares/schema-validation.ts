import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { Music } from "../protocols";

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

function validate(schema: ObjectSchema, type: "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (error) {
      let errorMessage = "";
      error.details.forEach(
        (e, index) =>
          (errorMessage += (index > 0 ? "and " : "") + e.message + " ")
      );
      return res.status(422).send(errorMessage);
    }
    next();
  };
}

export default function validateSchema<Music>(
  schema: ObjectSchema<Music>
): ValidationMiddleware {
  return validate(schema, "body");
}
