export default class Zebra {
  constructor(name, gender, weight, tailLengthInch, stripeCount) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.stripeCount = stripeCount;
  }
  eat(food) {
    console.log(`hyonk I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}