import { Player } from "./scripts/classes.js";

// Instancia clase Player
const newPlayer = new Player();
// Extrae valor de sessionStorage 
const playerName = sessionStorage.getItem('newPlayer');

// Asigna nuevo nombre a instancia
newPlayer.name = playerName;
newPlayer.printName();