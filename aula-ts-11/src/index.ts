import express, { json } from "express";
import "express-async-errors";
import gameController from "./controllers/game.controller";
import { validateBody } from "./middlewares/schema-validation";
import { gameSchema } from "./schemas/gameSchema";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(json());

app.post("/games", validateBody(gameSchema), gameController.create);
app.get("/games", gameController.read);

app.use(errorHandler);

app.listen(5000, () => console.log(`Server is up and running or port 5000`));
