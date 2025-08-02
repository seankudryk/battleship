import { startNewGame } from "../modules/game-logic"

describe("placeholder", () => {
    beforeEach(() => {
        const playerData = [];
    });

    test("test that startNewGame creates a human player and a cpu player", () => {
        const newGame = createPlayers("cpu");
        const playerTypes = [newGame[0].playerType, newGame[1].playerType];

        expect(playerTypes[0]).toBe("human");
        expect(playerTypes[1]).toBe("cpu");
    });
})