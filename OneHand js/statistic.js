//Klasa przechowywująca informacje na temat liczby gier, wygranych i przegranych

class Statistics {
  constructor() {
    this.gameResults = [
      // { win: true, bid: 2 },
      // { win: false, bid: -10 },
    ]; //bid to zakład, te obiekty w tablicy są dla przykładu
  }
  addGameToStatistics(win, bid) {
    let gameResult = {
      win, // można też po prostu napisać win i bid
      bid
    
    };
   // console.log(gameResult)
    this.gameResults.push(gameResult); //dodajemy wynik gry
  }
    showGameStatistics(){
        let games = this.gameResults.length; //liczba gier
        let wins = this.gameResults.filter(result=>result.win).length;// filter do sprawdzenia, które elementy mają true, wywala 1 bo długość tej tablicy taka jest
        let losses =this.gameResults.filter(result => !result.win).length;
        //console.log(wins, losses)
        return[games, wins, losses];
    }
}

const stats = new Statistics();
