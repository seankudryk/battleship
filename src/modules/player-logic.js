import { Gameboard } from "./gameboard-logic"

export class Player {
    constructor(playerType) {
        this.playerType = playerType;
        this.activeShips = 5;
        this.playerGameboard = new Gameboard();
        this.isActivePlayer;
    }

    setActivePlayer = () => {
        this.activePlayer = true;
    }

    changePlayer = () => {
        this.activePlayer = !this.activePlayer;
    }

    getPlayerGameboard = () => {
        return this.playerGameboard;
    }
}