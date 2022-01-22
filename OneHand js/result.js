// klasa bez instacji - jej celem będzie przechowanie innych metod w klasie game :
//zwracającej wynik i co wygrał użytkownik
// bez konstruktora

class Result {
  static MoneyWinInGame(result,bid){ //prefix static - służy do tworzenia metod statycznych
   if(result) return 3 * bid;
   else return 0; 
  }
  static checkWinner(draw){   //tablica draw-zawierająca kolory
 if(draw[0] ===draw[1] && draw[1] ===draw[2] 
    || draw[0] !== draw[1] && draw[1] !==draw[2] &&
    draw[0] !==draw[2]) //warunek, w którym piszemy że wygrana jest wtedy kiedy albo ideksy wszystkich kolorów są sobie równe albo różne
 return true; 
 else return false
 
}
}

Result.MoneyWinInGame(true, 10)


///MoneyWinInGame() - metoda, która ma zwracać ile hajsu wygraliśmy w grze
 //checkWinner()  - metoda, sprawdzająca czy coś przegrał czy wygrał
 //Result.checkWinner([1,2,3]) //true
 //Result.checkWinner([1,2,2]) //undefined 
 //Result.checkWinner(['red','red','red']) //true