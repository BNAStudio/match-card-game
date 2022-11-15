// class items
/**
 * atributos:
 * elemento: etiqueta HTML
 * class: clases CSS
 * data-color: color asignado
 * position: ubicacion en la reticula
 */
/**
 * Metodos:
 * firstTarget: Seleccion primera carta
 * secondTarget: Seleccion segunda carta
 * 
 */
class Item {
    constructor() {
        this.elm = 'div';
        this._class = ['card', 'color-hidden'];
        this._color = ''
        this._position = ''
    }
    get class() {
        return this._class;
    }
    set class(newClass) {
        this._class.push(newClass)
    }

    get color() {
        return this._color;
    }
    set color(newColor) {
        this._color = newColor
    }

    get position() {
        return this._position;
    }
    set position(newPosition) {
        this._position = newPosition
    }
}
const newItem = new Item();


// class Matrix
/**
 * Atributos:
 * size: tamaño
 * mainClass: clase donde se insertara
 */
/**
 * Metodos: 
 * createArr: Crea un array con tamaño asignado (size)
 * getRandom: 
 * createBoard: crea tablero
 */
class Board {
    constructor(size) {
        this._mainClass = '.board'
        this._size = size;
        this.randomArr = []
    }

    // Crea un arr del tamaño size
    createNumbersArr(size) {
        let arr = []
        for (let i = 1; i <= size; i++) {
            arr.push(i)
        }
        return arr
    }

    // Genera orden aleatorio en el array
    getRandom(size) {
        const arr = this.createNumbersArr(size);
        console.log(arr)
        let newSize = size;

        let result = new Array(newSize);
        let len = arr.length;
        let taken = new Array(len);

        if (newSize > len)
            throw new RangeError("getRandom: asignacion de elementos fuera del rango");

        while (newSize--) {
            let x = Math.floor(Math.random() * len);
            result[newSize] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    // Crea el tablero (matriz)
    createBoard() {
        console.log(this.getRandom(this._size))
        // const size = this._size
        /**
         * Funcion para creacion de instancias de ITEM
         */

        // DOM traversing
        const mainContainer = document.querySelector(this._mainClass);
        const board = document.createElement('div');
        board.classList.add('boardContainer');
        mainContainer.appendChild(board);

        // Crea las filas
        for (let i = 1; i <= this._size; i++) {
            const row = document.createElement('div');
            row.classList.add(`row-${i}`);
            board.appendChild(row);
            // console.log(row);

            // Rellena las filas con los ITEMS
            for (let j = 1; j <= this._size; j++) {
                const item = document.createElement(newItem.elm);
                item.classList.add(`item-${i}.${j}`);
                row.appendChild(item);
                // console.log(item);
            }
        }
        // console.log(board);
    }
}
const board = new Board(12);
board.createBoard()


// console.log(board.createArr())
// console.log(board.getRandom())

const arrClass = ['clase-1', 'clase-2', 'clase-3'];
const colors = [
    'MediumSeaGreen',
    'Teal',
    'MidnightBlue',
    'Indigo',
    'Magenta',
    'Gold',
    'RoyalBlue'
];

function createInstanceItems(size) {
    const itemIntances = [];
    for (let i = 0; i < size.length; i++) {
        itemIntances.push(new Item())
    }
    return itemIntances
}
const newObjInstance = createInstanceItems(arrClass)
// console.log(newObjInstance);

function assignProps(arrClass, newObjInstance, colors) {
    for (let i = 0; i < newObjInstance.length; i++) {
        const item = document.createElement(newObjInstance[i].elm);
        item.classList.add(`item-${i}`);
        item.dataset.color = colors[i];

        newObjInstance[i].color = arrClass[i]
        // console.log(newObjInstance[i].class);
    }
    // console.log(newObjInstance);
}
assignProps(arrClass, newObjInstance, colors)