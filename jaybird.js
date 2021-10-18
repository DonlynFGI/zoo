export default class Jaybird {
  constructor(name, color, gender, wingSpan) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.wingSpan = wingSpan;
  }
  eat(food) {
    console.log(`peck I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}