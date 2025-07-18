export class Ship {
    constructor(shipLength) {
        this.shipLength = shipLength;
        this.hitCount = 0;
        this.isSunk = false;
    }

    hit = () => {
        if (!this.isSunk) {
            this.hitCount++;

            if (this.hitCount === this.shipLength) {
                this.isSunk = true;

                this.sinkShip();
            }
        } else {
            return;
        }
    }

    sinkShip = () => {
        this.isSunk = false;
    }
};