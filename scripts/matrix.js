const arrClass = ['clase-1', 'clase-2', 'clase-3'];
const colors = ['mediumSeaGreen', 'teal', 'midnightBlue', 'indigo', 'magenta', 'gold', 'royalBlue', 'purple', 'white', 'green', 'red', 'yellow', 'redLight', 'blueLight', 'indianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'Crimson', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed', 'OrangeRed', 'Orange', 'Gold', 'Khaki', 'Lavender', 'Violet', 'Magenta', 'MediumPurple', 'Purple', 'MediumSlateBlue', 'GreenYellow', 'LightGreen', 'MediumAquamarine', 'DarkCyan'];


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
 */
class Item {
    constructor() {
        this._id = null;
        this.elm = 'div';
        this._class = ['card', 'color-hidden'];
        this._color = ''
        this._position = null
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

    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId
    }
}
const newItem = new Item();


// class Board
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

    // Genera orden aleatorio en el array
    getRandom(arr, size) {
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
        // Validacion tamaño tablero
        if (this._size % 2 !== 0) return console.log('Ingrese un numero par');
        if (!(this._size >= 2 && this._size <= 6)) return console.log('Ingrese un numero par entre 2 y 6');

        const size = this._size
        const squareSize = size * size
        let finishItems;

        // Crea array con colores ordenados de manera aleatoria y los duplica
        function createColorArr(size, callback) {
            const colorArrLenght = (size * size) / 2;
            let mainColorArr = callback(colors, colorArrLenght);
            const duplicateColorArr = callback(mainColorArr, mainColorArr.length);
            mainColorArr = mainColorArr.concat(duplicateColorArr)
            return mainColorArr
        }
        const itemsColors = createColorArr(size, this.getRandom);

        // Funcion para creacion de instancias de ITEM
        function createInstanceItems() {
            const itemIntances = [];
            for (let i = 0; i < squareSize; i++) {
                itemIntances.push(new Item())
            }
            return itemIntances
        }
        const items = createInstanceItems();

        // DOM traversing
        const mainContainer = document.querySelector(this._mainClass);
        const board = document.createElement('div');
        board.classList.add('boardContainer');
        mainContainer.appendChild(board);

        // Asigna propiedades de color
        for (let i = 0; i < squareSize; i++) {
            function assignItemsColorProps(items, itemsColors) {
                const propsItems = [...items]
                propsItems[i].color = itemsColors[i];
                propsItems[i].class = itemsColors[i];
                propsItems[i].id = `item-${i + 1}`;
                return propsItems
            }
            finishItems = assignItemsColorProps(items, itemsColors)
        }

        // Asigna posiciones
        function createPositions(finishItems) {
        }
        createPositions(finishItems)
        // const itemsPosition = createPositions(finishItems)
    }
}
const board = new Board(2);
board.createBoard()
