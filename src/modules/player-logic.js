import { Gameboard } from "./gameboard-logic"
import { shipTypes } from "./ship-types"

export class Player {
    constructor(playerType) {
        this.playerType = playerType;
        this.activeShips = [shipTypes.patrol, shipTypes.destroyer, shipTypes.cruiser, shipTypes.battleship, shipTypes.carrier];
        this.activeShipCount = 5;
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