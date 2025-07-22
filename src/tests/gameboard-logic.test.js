import { Gameboard } from "../modules/gameboard-logic.js"
import { shipTypes } from "../modules/ship-types.js";

describe("create gameboardArray reference for all test cases", () => {
    let gameboard = new Gameboard;
    let gameboardArray = gameboard.getGameboard();   
    
    beforeAll (() => {
        gameboard.placeShip(0, 0, shipTypes.patrol);
    });

    test("check that placeShip(0, 0, shipTypes.patrol) is able to place a Patrol ship from shipTypes object at index [0][0] of the gameBoard array", () => {
        expect(gameboardArray[0][0].shipName && gameboardArray[0][1].shipName).toBe("Patrol");
    });

    describe("test .receiveAttack functionality", () => {
        test("receiveAttack(0, 0) returns 'Patrol'", () => {
            gameboard.receiveAttack(0, 0);
            expect(gameboardArray[0][0].hitCount).toBe(1);
        });

        test("receiveAttack(3, 0) returns miss", () => {
            gameboard.receiveAttack(3, 0); 
            expect(gameboardArray[3][0]).toBe("miss");
        });
    });
});



