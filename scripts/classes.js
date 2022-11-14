export class Player {
    constructor(){
        this.id = Date.now();
        this._name = '';
        this._score = 0;
    }

    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName;
    }
    
    get score(){
        return this._score
    }
    set score(newScore){
        this._score = newScore;
    }

    printName(){
        console.log(this.name);
    }
    printScore(){
        console.log(this.score);
    }
}