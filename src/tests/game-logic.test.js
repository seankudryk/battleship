import { Ship } from "../modules/game-logic"

test("check that ship length initializes properly on new Ship call", () => {
    let shipLength4 = new Ship(4);
    let shipLength3 = new Ship(3);

    expect(shipLength4.shipLength).toBe(4);
    expect(shipLength3.shipLength).toBe(3);
});

test("check that hitCount iterates when a call to Ship.hit() is made", () => {
    let newShip = new Ship(4);
    newShip.hit();
    newShip.hit();

    expect(newShip.hitCount).toBe(2);
});

test("check that isSunk() bool changes from false to true once hitCounty === length", () => {
    let newShip = new Ship(1);

    newShip.hit();

    expect(newShip.isSunk).toBe(true);
});
