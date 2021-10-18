export default class Krill {
  constructor(name, color, gender, finSize) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.finSize = finSize;
  }
  eat(food) {
    console.log(`woosh I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}