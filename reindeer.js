export default class Reindeer {
  constructor(name, color, gender, hasFlight) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.hasFlight = hasFlight;
  }
  eat(food) {
    console.log(`neight I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}