import { Gameboard } from "../modules/gameboard-logic.js"

test("check that .createBoard generates 10 x 10 2-dimensional array", () => {
    const gameboard = new Gameboard();
    expect(gameboard).toBeDefined();
    console.log(gameboard.getGameboard());
})