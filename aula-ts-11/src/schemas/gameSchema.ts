import Joi from "joi";
import { CreateGame } from "../protocols/protocol";

const gameSchema = Joi.object<CreateGame>({
  title: Joi.string().required(),
  platform: Joi.string().required(),
});

export { gameSchema };
