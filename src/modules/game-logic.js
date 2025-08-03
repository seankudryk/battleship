import { Ship } from "./modules/ship-logic.js";
import { shipTypes } from "./modules/ship-types.js";
import { Gameboard } from "./modules/gameboard-logic.js";
import { Player } from "./modules/player-logic.js";
import { startNewGame, createPlayers } from "./modules/game-logic.js";

let playerData = []

export const startNewGame = () => {
    playerData = createPlayers("cpu");
    return;
}

export const createPlayers = (opponentType) => {
    const playerOne = new Player("human");
    const playerTwo = new Player(opponentType);
    console.log(playerOne, playerTwo)

    return [playerOne, playerTwo];
}