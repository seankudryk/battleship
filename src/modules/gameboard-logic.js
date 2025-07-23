import { Ship } from "./ship-logic.js"

export class Gameboard {
    constructor() {
        this.createBoard = () => {
            let board = [];

            for (let i = 0; i < 10; i++) {
                board.push(new Array(10).fill(null));
            };
            return board;
        }
        
        this.board = this.createBoard();
    }

    shipHorizontal = true;

    getGameboard = () => {
        return this.board;
    }

    switchShipRotation = () => {
        return this.shipHorizontal = !this.shipHorizontal;
    }

    placeShip = (row, column, shipType) => {
        let newShip = new Ship(shipType)

        //refactor to ensure that placed ships don't overflow board, and return from the placeShip call if the ship can't be placed
        //same as above, but ensure that spaces aren't occupied

        for (let i = 0; i < newShip.shipLength; i++) {
            const rowValue = this.shipHorizontal ? row : row + i;
            const columnValue = this.shipHorizontal ? column + i : column;
            this.board[rowValue][columnValue] = newShip;
        }
    }

    receiveAttack = (row, column) => {
        if (this.board[row][column] instanceof Ship) {
            this.board[row][column].hit();
        } else {
            this.board[row][column] = "miss";
        }
    }
};
