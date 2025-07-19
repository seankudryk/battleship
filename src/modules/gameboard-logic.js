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

    placeShip = (row, column, shipType) => {
        if (shipType)

        for (let i = 0; i < shipLength; i++) {
            //will eventually have to change what this does, for the sake of test development, I am simply assinging the cell value here to !null
            this.board[row][column] = newShip.shipName;
            if (this.shipHorizontal) {
                column++;
            } else {
                row++;
            }
        }
    };
    
    receiveAttack = (x, y) => {
        let currentGameboardState = this.board;
        return currentGameboardState[y][x];
    };
};
