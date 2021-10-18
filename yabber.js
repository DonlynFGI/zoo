export default class Yabber {
  constructor(name, color, weight, mouthSize, volume) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.mouthSize = mouthSize;
    this.volume = volume;
  }
  eat(food) {
    console.log(`nnyek I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}