export default class Muskrat {
  constructor(name, color, gender,) {
    this.name = name;
    this.color = color;
    this.gender = gender;
  }
  eat(food) {
    console.log(`mweef I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}