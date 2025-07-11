import { Ship } from "./game-logic.js"

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
    
    
    getGameboard = () => {
        return this.board;
    };
};
