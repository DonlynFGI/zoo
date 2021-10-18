export default class Narwhal {
  constructor(name, color, gender, hornLength) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.hornLength = hornLength;
  }
  eat(food) {
    console.log(`Narwhals narwhals swimming in the ocean ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}