import { Player } from "./player-logic"

let playerData = []

export const startNewGame = () => {
    playerData = createPlayers("cpu");
    return;
}

export const createPlayers = (opponentType) => {
    const playerOne = new Player("human");
    const playerTwo = new Player(opponentType);

    return [playerOne, playerTwo];
}