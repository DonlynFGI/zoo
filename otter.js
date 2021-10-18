export default class Otter {
  constructor(name, color, gender, swimming) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.swimming = swimming;
  }
  eat(food) {
    console.log(`chkcchk I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}