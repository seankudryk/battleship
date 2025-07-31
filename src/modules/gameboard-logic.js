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

    gameboardLength = 10;

    shipHorizontal = true;

    getGameboard = () => {
        return this.board;
    }

    switchShipRotation = () => {
        return this.shipHorizontal = !this.shipHorizontal;
    }

    placeShip = (row, column, shipType) => {
        let newShip = new Ship(shipType);

        for (let i = 0; i < newShip.shipLength; i++) {
            const rowValue = this.shipHorizontal ? row : row + i;
            const columnValue = this.shipHorizontal ? column + i : column;

            if (rowValue >= this.gameboardLength || columnValue >= this.gameboardLength) {
                console.log(`Invalid ship placement: ship exceeds board length`);
                return false;
            }

            if (this.board[rowValue][columnValue] != null) {
                console.log(`This space is already occupied by ${this.board[rowValue][columnValue]}`)
                return false;
            }

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
