import "./styles.css";
import { Ship } from "./modules/ship-logic.js"
import { shipTypes } from "./modules/ship-types.js";
import { Gameboard } from "./modules/gameboard-logic.js"
import { Player } from "./modules/player-logic.js"

const newPlayer = new Player("human");

console.log(newPlayer.getPlayerGameboard());
