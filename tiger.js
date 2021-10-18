export default class Tiger {
  constructor(name, color, gender, clawSize, hunger) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.clawSize = clawSize;
    this.hunger = hunger;
  }
  eat(food) {
    console.log(`Grrrrowl I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}