//Tworzymy klasę Wallet, która będzie przechowywała ukrytą zmienną money i metody

class Wallet {
  constructor(money) {
    let _money = money;
    //metody muszą być w konsrtuktorze ze wględu na scope
    this.getWalletValue = () => _money; //pobieranie aktualnej zawartości portfela
    //Sprawdzanie czy użytkownik ma odpowiednią ilość środków
    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
      return false;
    };
    this.changeWallet = (value, type = "+") => {
      //metoda zmieniająca wartość porfela
      if (typeof value === "number" && !isNaN(value)) {
        //tutaj mamy negację żeby był zawsze number
        if (type === "+") {
          return _money += value;
        } else if (type === "-") {
          return _money -= value;
        } else {
          throw new Error("nieprawidłowy typ działania");
        }

      } else {
        console.log(typeof value);
        throw new Error("nieprawidłowa liczba");
      }
    }
  }
}

const wallet = new Wallet(150);
