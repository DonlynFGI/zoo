export default class Cat {
  constructor(name, color, gender, weight, tailLengthInch, clawSize) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.clawSize = clawSize;
  }
  eat(food) {
    console.log(`Meow, feed me ${food}`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}