import { Gameboard } from "../modules/gameboard-logic.js"
import { shipTypes } from "../modules/ship-types.js";

describe("create gameboardArray reference for all test cases", () => {
    let gameboard = new Gameboard;
    let gameboardArray = gameboard.getGameboard();   
    
    beforeAll (() => {
        gameboard.placeShip(0, 0, shipTypes.patrol);
    });

    test("check that placeShip(0, 0, shipTypes.patrol) is able to place a Patrol ship from shipTypes object at index [0][0] of the gameBoard array", () => {
        expect(gameboardArray[0][0].shipName).toBe("Patrol");
        expect(gameboardArray[0][1].shipName).toBe("Patrol");
    });

    test("check that placeShip rejects placement of ships that will overflow the gameboard", () => {
        const thisSouldReturnFalse = gameboard.placeShip(0, 10, shipTypes.cruiser);
        const thisShouldAlsoReturnFalse = gameboard.placeShip(7, 0, shipTypes.carrier);

        expect(thisSouldReturnFalse).toBeFalsy();
        expect(thisShouldAlsoReturnFalse).toBeFalsy();
    })

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



