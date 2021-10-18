export default class Unicorn {
  constructor(name, color, gender, hornLength) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.hornLength = hornLength;
  }
  eat(food) {
    console.log(`neighhh I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}