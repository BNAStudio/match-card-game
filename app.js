import { Player, Item, Board } from "./scripts/classes.js";
import { colors } from './constrains/colors.js'

// Instancia clase Player
const newPlayer = new Player();
// Extrae valor de sessionStorage 
const playerName = sessionStorage.getItem('newPlayer');

// Asigna nuevo nombre a instancia
newPlayer.name = playerName;
// newPlayer.printName();

const board = new Board(4);
board.createBoard();
board.renderingBoard();