import { Gameboard } from "../modules/gameboard-logic.js"

describe("create gameboardArray reference for all test cases", () => {
    let gameboard = new Gameboard;
    let gameboardArray = gameboard.getGameboard();

    describe("test .plaecShip() functionality", () => {   
        
        test("check that .getGameboard returns a 2 dimensional array which is 10 x 10", () => {
            expect(gameboardArray.length).toBe(10);
            expect(gameboardArray[9].length).toBe(10);
        });

        test("check that placeShip(0, 0, 1) is able to place a length 1 Ship at index [0][0] of the gameBoard array", () => {
            gameboard.placeShip(0, 0, 1);
            expect(gameboardArray[0][0]).not.toBeNull();
        })

        test("check that placeShip(0, 0, 2) is able to place a length 2 Ship at index [0][0] of the gameBoard array", () => {
            gameboard.placeShip(0, 0, 2);
            expect(gameboardArray[0][0] && gameboardArray[0][1]).not.toBeNull();
        })

        test("check that placeShip(0, 0, 2) is able to place a length 2 Ship at index [1][0] of the gameBoard array", () => {
            gameboard.switchShipRotation();
            gameboard.placeShip(0, 0, 2);
            expect(gameboardArray[0][0] && gameboardArray[1][0]).toBe("test");
        })
    })

    describe("test .receiveAttack functionality", () => {

        test("receiveAttack(0, 0) returns 'test'", () => {
            gameboard.placeShip(0, 0, 1)
            expect(gameboard.receiveAttack(0, 0)).toBe('test');
        })
        test("recieveAttack(0, 0) returns null", () => {
            expect(gameboard.receiveAttack(0, 0)).toBeNull;
        })
    })
});