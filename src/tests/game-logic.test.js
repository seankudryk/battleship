import { Ship } from "../modules/game-logic"

test("check that ship length initializes properly on new Ship call", () => {
    let shipLength4 = new Ship(4);
    let shipLength3 = new Ship(3);

    expect(shipLength4.shipLength).toBe(4);
    expect(shipLength3.shipLength).toBe(3);
});
