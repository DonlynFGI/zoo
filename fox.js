export default class Fox {
  constructor(name, color, gender, tailLengthInch) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.tailLengthInch = tailLengthInch;
  }
  eat(food) {
    console.log(`wpowpowpowpowpowpowpow I eat ${food}`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}