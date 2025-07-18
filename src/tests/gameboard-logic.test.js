import { Gameboard } from "../modules/gameboard-logic.js"

describe("tests on class Gameboard", () => {
    let gameboard = new Gameboard;
    
    test("check that .createBoard generates 10 x 10 2-dimensional array", () => {
        expect(gameboard.getGameboard).toBeDefined();
    });
    
    let gameboardArray = gameboard.getGameboard();
    
    test("check that .getGameboard returns a 2 dimensional array which is 10 x 10", () => {
        expect(gameboardArray.length).toBe(10);

        expect(gameboardArray[9].length).toBe(10);
    });

    test("check that placeShip(0, 0, 1) is able to place a length 1 Ship at index [0][0] of the gameBoard array", () => {
        gameboard.placeShip(0, 0, 1);
        console.log(gameboardArray[0][0]);

        expect(gameboardArray[0][0]).not.toBeNull();
    })

    test("check that placeShip(0, 0, 2) is able to place a length 2 Ship at index [0][0] of the gameBoard array", () => {
        gameboard.placeShip(0, 0, 2);
        console.log(gameboardArray[0][0]);

        expect(gameboardArray[0][0] && gameboardArray[0][1]).not.toBeNull();
        console.log(gameboardArray[0]);
    })

    test("check that placeShip(0, 0, 2) is able to place a length 2 Ship at index [1][0] of the gameBoard array", () => {
        gameboard.switchShipRotation();
        gameboard.placeShip(0, 0, 2);

        console.log(gameboardArray[0][0]);

        expect(gameboardArray[0][0] && gameboardArray[1][0]).not.toBeNull();
        console.log(gameboardArray[0], gameboard[1]);
    })
});