import { Request, Response } from "express";
import httpStatus from "http-status";
import { Game } from "../protocols/protocol";
import gamesService from "../service/games-service";

async function create(req: Request, res: Response) {
  const { title, platform } = req.body as Game;
  await gamesService.createGame({ title, platform });
  return res.status(httpStatus.CREATED).send("Created");
}

async function read(req: Request, res: Response) {
  const games = await gamesService.getGames();
  return res.status(httpStatus.OK).send(games);
}

const gameController = { create, read };

export default gameController;
