import gamesRepository from "../repository/games-repository";
import { Game, CreateGame } from "../protocols/protocol";
import { conflictError } from "../errors/conflict";

async function getGames(): Promise<Game[]> {
  return await gamesRepository.getGames();
}

async function createGame(game: CreateGame): Promise<void> {
  if (await gameAlreadyExists(game)) {
    throw conflictError("Game already exists");
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(
    game.title,
    game.platform
  );
  return result.length > 0;
}

const gamesService = {
  getGames,
  createGame,
};

export default gamesService;
