export default class Snake {
  constructor(name, color, gender, length, fangLength, venomous) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.length = length;
    this.fangLength = fangLength;
    this.venomous = venomous;
  }
  eat(food) {
    console.log(`ssssssssssss I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}