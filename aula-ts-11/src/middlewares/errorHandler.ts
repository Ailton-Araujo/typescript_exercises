import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";
import { AppErrors } from "../protocols/protocol";

export default function errorHandler(
  err: AppErrors | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);
  switch (err.name) {
    case "conflict":
      return res.status(httpStatus.CONFLICT).send(err.message);
    case "unprocessable":
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);
    default:
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("try again later");
  }
}
