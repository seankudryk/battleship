export class Ship {
    constructor(shipLength) {
        this.shipLength = shipLength;
        this.shipName = "test";
        this.hitCount = 0;
        this.isSunk = false;
    }

    hit = () => {
        if (!this.isSunk) {
            this.hitCount++;
            if (this.hitCount === this.shipLength) {
                this.sinkShip();
            }
        } else {
            return;
        }
    }

    sinkShip = () => {
        this.isSunk = true;
    }

    //For: some sort of PlayerShips object to be declared later re; Battleship rules
        //name:  "Patrol"
        //length: 2
        //
        //name: "Cruiser"
        //length: 3
        //
        //name: "Destroyer"
        //length: 3
        //
        //name: "Battleship"
        //length: 4
        //
        //name: "Battleship"
        //length: 5
};