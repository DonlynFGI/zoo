export default class Hippo {
  constructor(name, color, gender, weight, teethSize) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.teethSize = teethSize;
  }
  eat(food) {
    console.log(`Chomp chomp I eat ${food}`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}