import { Ship } from "../modules/ship-logic"
import { shipTypes } from "../modules/ship-types";

describe("testing for calling Patrol object", () => {
    const patrolBoat = new Ship(shipTypes.patrol);

    test("check that calls to external shipType object properly assign values to created ship", () => {
        expect(patrolBoat.shipName).toBe("Patrol");
        expect(patrolBoat.shipLength).toBe(2);
    })
    
    test("test instanceof", () => {
        expect(patrolBoat instanceof Ship).toBeTruthy();
    });
})
