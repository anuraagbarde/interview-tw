import { Game } from '../models/Game.js';
import { PartialBy } from '../utils/type.js';
import { randomUUID } from 'crypto';

const GAME_TABLE = new Map<string, Game>();

export const save = (game: Game) => {
  if (!game.id) {
    game.id = randomUUID();
  }
  GAME_TABLE.set(game.id, game);
};
