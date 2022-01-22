//klasa draw jest po to, by tworzyć obiekt po wciśnięciu zakręć
//ta klasa ma tworzyć wynik losowania czyli przyporządkować wynik losowania

class Draw{
    constructor(){
        this.options = ['red', 'green', 'blue'];//właściwość przechowuje nazwy kolorów
        let _result = this.drawResult(); //obiekt ukryty, przechowuje wynik
        this.getDrawResult = () => _result; //pobieramy wynik _result
    }
    drawResult(){
        let colors = [];
        //uzupełnianie poprzez losowania
        for (let i =0; i< this.options.length; i++){
            const index = Math.floor(Math.random() * this.options.length); //random żeby od 0 do 1 losować
            const color = this.options[index];
            colors.push(color)
        }
        return colors
    }
}

const draw = new Draw() 