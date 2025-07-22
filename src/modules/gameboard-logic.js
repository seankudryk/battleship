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
        let newShip = new Ship(shipType);

        for (let i = 0; i < newShip.shipLength; i++) {
            //will eventually have to change what this does, for the sake of test development, I am simply assinging the cell value here to !null
            this.board[row][column] = newShip;
            if (this.shipHorizontal) {
                column++;
            } else {
                row++;
            }
        }
    }

    receiveAttack = (row, column) => {
        if (this.board[row][column] instanceof Ship) {
            this.board[row][column].hit();
        } else {
            this.board[row][column] = "miss";
        }

        // console.log(this.getGameboard());
    }
};
