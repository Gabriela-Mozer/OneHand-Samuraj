// link do gry: https://websamuraj.pl/examples/js/gra/
class Game {
  //elementy strony z html-a
  constructor(start) {
    // start - odpowiada kwocie, która ma być przekazana
    this.stats = new Statistics();
    this.wallet = new Wallet(start); // właściwość wallet - ile środków ma mieć na początku user
    document.getElementById("start").addEventListener("click", this.startGame.bind(this)); // na razie nie wiadomo, czym jest do this
    this.spanWallet = document.querySelector(".panel span.wallet");
    this.boards = [...document.querySelectorAll("div.color")];
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score span.result");
    this.spanGames = document.querySelector(".score span.number");
    this.spanWins = document.querySelector(".score span.win");
    this.spanLosses = document.querySelector(".score span.loss");
    this.render();
  }
  render(colors = ['gray','gray','gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid= 0  , wonMoney) {
    // informacje o grze
    this.boards.forEach((board,i) =>{
        board.style.backgroundColor = colors[i]; 
    });
    this.spanWallet.textContent = money; /// do wyświetlenia środków w grze
   // this.spanResult.textContent = result; 
    if(result){
        result = `You win ${wonMoney}`

    }else if(!result && result !==""){
        result = `You lose ${bid}`
    }
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[0];
    this.spanLosses.textContent = stats[0];
  }
  startGame() {
    //sprawdzenie czy wartość podana do inputa jest >1
     if(this.inputBid.value < 1) return alert('kwota, którą chcesz grać jest za mała!')
     const bid = Math.floor(this.inputBid.value); //zaokrąglamy i jednocześnie powodujemy, że nie da się wpisać innej wartości niż number
      /// sprawdzamy czy użytkownik może grać dzięki metodzie znajdującej się w klasie Wallet
      if(!this.wallet.checkCanPlay(bid)){  
        return alert('masz za mało środków lub podana została błędna wartość')
      }
      // zabranie piniędzy z portfela dzięki metodzie changeWallet
      this.wallet.changeWallet(bid, "-"); // czyli od bazowej wartości, która posiadamy odejmowana jest ta wart, którą podamy
      //tworzymy instancję obiektu draw (za każdym razem gdy zagramy)
      this.draw = new Draw(); 
      const colors = this.draw.getDrawResult();
      //sprawdzenie czy wygrano czy nie, dzięki metodzie checkWinner
      const win = Result.checkWinner(colors);
      console.log(win); //informacje od wygranych/przegranych
      // sprawdzamy jakie środki wygrał (bo stawkę mnożymy *3)
      const wonMoney = Result.MoneyWinInGame(win, bid);
      console.log(wonMoney) // żeby zobaczyć czy i ile się wygrało
      this.wallet.changeWallet(wonMoney); // będzie dodawała środki do portfela

      //statystyki 
      this.stats.addGameToStatistics(win, bid);
      //renderowanie wszystkich elementów 
      this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)
    }
}

//zmienna game , która to wywołuje jest w main.js

//this.wallet.getWalletValue() - domyślna wartość gry, której na początku nie będziemy mieli
//stats - to wartości domyślne dotyczące ilości gier
//result - domyślnie pusty string gdyby np result = 1 byłby You win
//this.inputBid.value  - this nie jest tutaj obiektem game ponieważ this działa w momencie
//jego wywołania jest button-em - tracimy wiązanie, dlatego stosujemy bind()
//odwołujemy się do game.draw.getDrawResult() , żeby uzyskać wynik losowania
//getDrawResult - zwraca _result, który przechowuje to co jest w metodzie drawResult
//Result.checkWinner() - odwołujemy się do klasy ponieważ jest to metoda statyczna