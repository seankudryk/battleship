export class Ship {
    constructor(shipLength) {
        this.shipLength = shipLength;
        this.hitCount = 0;
        this.isSunk = false;
    }

    hit = () => {
        this.hitCount++;
        this.sinkShip();
    }

    sinkShip = () => {
        if (this.hitCount === this.shipLength) {
            this.isSunk = true;
        }
    }
};