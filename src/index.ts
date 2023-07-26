import * as readline from 'node:readline/promises'; // This uses the promise-based APIs
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

import GameService from './services/gameService.js';

async function main(): Promise<void> {
  const answer = await rl.question('Please Enter your name: ');

  let game = GameService.get(answer);

  console.log(game);
}
await main();
rl.close();
