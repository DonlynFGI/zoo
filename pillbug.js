export default class Pillbug {
  constructor(name, color, gender, woodEaten) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.woodEaten = woodEaten;
  }
  eat(food) {
    console.log(`gnaw I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}