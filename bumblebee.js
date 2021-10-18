export default class Bumblebee {
  constructor(name, color, gender, stinger, nectarcount) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.stinger = stinger;
    this.nectarcount = nectarcount;
  }
  eat(food) {
    console.log(`buzz buzz we eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}