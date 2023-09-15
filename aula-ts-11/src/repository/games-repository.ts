import { Game, CreateGame } from "../protocols/protocol";
import { connection } from "../config/database";

async function getGames() {
  const result = await connection.query<Game>(`SELECT * FROM games`);
  return result.rows;
}

function createGame(game: CreateGame) {
  return connection.query<Game>(
    `INSERT INTO games (title, platform) VALUES ($1,$2);`,
    [game.title, game.platform]
  );
}

async function getGameByTitleAndPlatform(
  title: string,
  platform: string
): Promise<Game[]> {
  const result = await connection.query(
    `SELECT * FROM games WHERE title=$1 AND platform=$2;`,
    [title, platform]
  );
  return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
