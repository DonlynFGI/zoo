export default class Earwig {
  constructor(name, color, gender, rearReceptorLength, pincherSize) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.rearReceptorLength = rearReceptorLength;
    this.pincherSize = pincherSize;
  }
  eat(food) {
    console.log(`nibble we eat ${food}`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}