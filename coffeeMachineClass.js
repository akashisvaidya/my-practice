//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class MakeEspressoMachine {
  constructor(espressoSugar, espressoMilk, espressoCream, espressoIce) {
    this.sugar = espressoSugar;
    this.milk = espressoMilk;
    this.cream = espressoCream;
    this.ice = espressoIce;
  }
  make() {
    alert("coffee making in the process");
  }
  pour() {
    alert("pouring the coffee");
  }
  clean() {
    alert("cleaning the machine");
  }
}

let newEpresso = new MakeEspressoMachine(1, "skimMilk", "no-cream", "Yes");

// console.log(newEpresso.clean());

class EspressoMachine {
  constructor(color, model, make, price) {
    this.color = color;
    this.model = model;
    this.make = make;
    this.price = price;
  }

  turnOn() {
    console.log("G'day, I am on now");
  }
  steam() {
    console.log("Its summer sale");
  }
  brew() {
    console.log("Good Stuff coming your way");
  }
}

let newMachine = new EspressoMachine("Black", "n2", "nescafe", 2000);

console.log(newMachine.color);
