import { Gameboard } from "../modules/gameboard-logic.js"

describe("tests on class Gameboard", () => {
    let gameboard = new Gameboard;

    test("check that .createBoard generates 10 x 10 2-dimensional array", () => {
        expect(gameboard.getGameboard).toBeDefined();
    });

    test("check that .getGameboard returns a 2 dimensional array which is 10 x 10", () => {
        let gameboardArray = gameboard.getGameboard();
        let isCorrectColLength = true;

        expect(gameboardArray.length).toBe(10);


        expect(gameboardArray[9].length).toBe(10);
    });
});