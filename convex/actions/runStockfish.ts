import { action } from "../_generated/server";

// @ts-ignore
var INIT_ENGINE = require("stockfish");

export default action(async ({ mutation, query }): Promise<void> => {
  console.log("computing computer move");
  const Stockfish = INIT_ENGINE();
  const myEngine = Stockfish();
  console.log(Object.keys(myEngine));
});
