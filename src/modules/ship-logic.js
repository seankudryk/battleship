export class Ship {
    constructor(shipType) {
        this.shipName = shipType.name;
        this.shipLength = shipType.length;
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
};