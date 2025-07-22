import { Player } from "../modules/player-logic"
import { Gameboard } from "../modules/gameboard-logic"

describe("create new Player class object to test", () => {
    let humanPlayer;
    let computerPlayer;

    test("expect newPlayer to have a .playerType of 'human', and computerPlayer to have a .playerType of 'computer'", () => {
        humanPlayer = new Player("human");
        computerPlayer = new Player("computer");
        console.log(humanPlayer.getPlayerGameboard());
        expect(humanPlayer.playerType).toBe("human");
        expect(computerPlayer.playerType).toBe("computer");
    });
})