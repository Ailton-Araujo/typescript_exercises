import { AppErrors } from "../protocols/protocol";

export function unprocessableError(message: string): AppErrors {
  return {
    name: "unprocessable",
    message,
  };
}
