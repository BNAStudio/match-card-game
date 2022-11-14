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
        this._class = [];
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
    createArr() {
        for (let i = 1; i <= this._size; i++) {
            this.randomArr.push(i)
        }
        return this.randomArr
    }   

    // Genera orden aleatorio en el array
    getRandom() {
        let newSize = this._size;
        let result = new Array(newSize);
        let len = this.randomArr.length;
        let taken = new Array(len);

        if (newSize > len)
            throw new RangeError("getRandom: more elements taken than available");

        while (newSize--) {
            let x = Math.floor(Math.random() * len);
            result[newSize] = this.randomArr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    // Crea el tablero (matriz)
    createBoard(){
        const mainContainer = document.querySelector(this._mainClass);
        const board = document.createElement('div');
        board.classList.add('boardContainer');
        mainContainer.appendChild(board);
        
        for(let i = 1; i <= this._size; i++){
            const row = document.createElement('div');
            row.classList.add(`row-${i}`);
            board.appendChild(row);
            // console.log(row);

            for(let j = 1; j <= this._size; j++){
                const item = document.createElement(newItem.elm);
                item.classList.add(`item-${i}.${j}`);
                row.appendChild(item);
                // console.log(item);
            }
        }
        // console.log(board);
    }
}   
const board = new Board(7);



// Crea obj y lo llena con instancias de ITEM
function createInstanceItem(size){
    // nuevo arr
    const instanceNameArr = new Array()
    // llenar arr con nombres
    for(let i = 1; i <= size; i++){
        instanceNameArr.push(`item${i}`)
    }
    // crear obj con instancias
    const createInstances = instanceNameArr => {
        // nuevo obj
        const instanceItemsObj = {}
        // crear instancias y asignar nombre dinamicamente
        instanceNameArr.map( e => instanceItemsObj[e] = new Item() )
        return instanceItemsObj
    }

    return createInstances(instanceNameArr)
}

const newObjInstance = createInstanceItem(5);

for(const prop in newObjInstance){
    console.log(prop);
}
console.log(newObjInstance)


console.log(Object.values(newObjInstance)[0].elm = 'section')
console.log(Object.values(newObjInstance))