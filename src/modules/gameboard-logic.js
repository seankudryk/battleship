import { Ship } from "./ship-logic.js"

export class Gameboard {
    constructor() {
        this.createBoard = () => {
            const createRow = new Array(10).fill(null);

            let board = [];

            for (let i = 0; i < 10; i++) {
                board.push(createRow);
            };
            return board;
        }
        
        this.board = this.createBoard();
    };

    shipHorizontal = true;

    getGameboard = () => {
        return this.board;
    };


    switchShipRotation = () => {
        return this.shipHorizontal = !this.shipHorizontal;
    }

    placeShip = (row, column, shipLength) => {
        let newShip = new Ship(shipLength);

        for (let i = 0; i < shipLength; i++) {
            this.board[row][column] = new Ship(shipLength);

            if (this.shipHorizontal) {
                column++;
            } else {
                row++;
            }
        }
    };
    
    receiveAttack = (x, y) => {
        return;
    };
};
