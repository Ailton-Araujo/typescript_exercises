import { AppErrors } from "../protocols/protocol";

export function conflictError(message: string): AppErrors {
  return {
    name: "conflict",
    message,
  };
}
