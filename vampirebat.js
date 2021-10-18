export default class Vampire_Bat {
  constructor(name, color, gender, visibility, thirst) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.visibility = visibility;
    this.thirst = thirst;
  }
  eat(food) {
    console.log(`bite I drink ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}