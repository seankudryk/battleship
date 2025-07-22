import { Player } from "../modules/player-logic"
import { Gameboard } from "../modules/gameboard-logic"
import { Ship } from "../modules/ship-logic"
import { shipTypes } from "../modules/ship-types";

describe("create new Player class object to test", () => {
    let humanPlayer;
    let computerPlayer;

    beforeAll(() => {
        humanPlayer = new Player("human");
        computerPlayer = new Player("computer");
        humanPlayerGameboard = humanPlayer.getPlayerGameboard();
        computerPlayerGameboard = computerPlayer.getPlayerGameboard();
    })

    test("expect newPlayer to have a .playerType of 'human', and computerPlayer to have a .playerType of 'computer'", () => {
        expect(humanPlayer.playerType).toBe("human");
        expect(computerPlayer.playerType).toBe("computer");
    });

    test("place shipType Battleship starting at row 4, column 0 on humanPlayer gameboard, and shipType Cruiser starting at row 0, column 0 on humanPlayer gameboard", () => {
        humanPlayerGameboard.placeShip(4, 0, shipTypes.battleship);
        computerPlayerGameboard.placeShip(0, 0, shipTypes.cruiser);
        console.log(humanPlayerGameboard);
        console.log(computerPlayerGameboard);
        expect(humanPlayerGameboard.board[4][0].shipName).toBe("Battleship");
        expect(computerPlayerGameboard.board[0][0].shipName).toBe("Cruiser");
    })
})