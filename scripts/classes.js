import { colors } from '../constrains/colors.js'

export class Player {
    constructor() {
        this.id = Date.now();
        this._name = '';
        this._score = 0;
    }

    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName;
    }

    get score() {
        return this._score
    }
    set score(newScore) {
        this._score = newScore;
    }

    printName() {
        console.log(this.name);
    }
    printScore() {
        console.log(this.score);
    }
}

export class Item {
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

export class Board {
    constructor(size) {
        this._mainClass = '.main'
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
    // Crea tablero con instancias de class Item
    createBoard() {
        // Validacion tamaño tablero
        if (this._size % 2 !== 0) return console.log('Ingrese un numero par');
        if (!(this._size >= 2 && this._size <= 6)) return console.log('Ingrese un numero par entre 2 y 6');

        const size = this._size
        const squareSize = size * size;
        let finishItems;
        let count;

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

        // Asigna propiedades de color
        function assignItemsColorProps(items, itemsColors) {
            let propsItems = [...items];
            for (let i = 0; i < squareSize; i++) {
                propsItems[i].color = itemsColors[i];
                propsItems[i].class = itemsColors[i];
                propsItems[i].id = `item-${i + 1}`;
            }
            return propsItems
        }
        const colorItems = assignItemsColorProps(items, itemsColors)

        // Funcion para asignar posiciones
        function assignPosition(colorItems) {

            // Funcion incrementa +1
            function increment(size) {
                const indexSize = size - 1
                // debugger
                count >= 0 & count < indexSize
                    ? count += 1
                    : count = 0;
                return count
            }

            // Funcion asigna posiciones
            function counter(size, items, callback) {
                let counter
                for (let i = 0; i < items.length; i++) {
                    counter = callback(size)
                    items[i].position = counter
                }
                // console.table(items);
                return items
            }
            return counter(size, colorItems, increment)
        }
        finishItems = assignPosition(colorItems)

        return finishItems
    }
    // Renderiza elementos en el DOM
    renderingBoard() {
        const items = this.createBoard();
        const size = this._size;
        console.log('size:', size);
        const mainContainer = document.querySelector('.main');

        // DOM Scripting contenedor del tablero
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('boardContainer')
        mainContainer.appendChild(boardContainer);

        // crea filas de acuerdo al tamaño
        function createRows(size) {
            // debugger
            let row;
            let column;
            // Crea filas
            for (let i = 0; i < size; i++) {
                // debugger
                row = document.createElement(items[i].elm);
                row.classList.add(`row-${i}`);
                row.dataset.id = `row-${i}`;
                boardContainer.appendChild(row);
                // }
                // for (let i = 0; i < size; i++) {
                // Seleccion de cada fila
                // let provRow = document.querySelector(`div[data-id = row-${i}]`);
                // console.log(provRow);

                for (let j = 0; j < size; j++) {
                    // DOM Scripting items
                    column = document.createElement(items[i].elm);
                    column.style.width = '100px';
                    column.style.height = '100px';
                    column.classList.add(`col-${i}`);
                    column.dataset.id = `col-${i}`;

                    // items[j].class.forEach(e => {
                    //     // debugger
                    //     column.classList.add(e)
                    //     column.dataset.color = items[j].color
                    // });
                    // items[i].color.forEach( color => {
                    //     column.classList.add(color)
                    // });

                    row.appendChild(column)
                    // console.log(items[j].color);

                }


                // }

                // for (let i = 0; i < size; i++) {
                // let provCol = document.querySelector(`div[data-id = col-${i}]`);
                // let provCol = document.querySelector(`.col-${i}`);
                // console.log(provCol);
            }

        }
        createRows(size)
        // console.log(items);

    }
}