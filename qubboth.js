export default class Qubboth {
  constructor(name, color, gender, tentacleCount, eldritchRiftHoles) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.tentacleCount = tentacleCount;
    this.eldritchRiftHoles = eldritchRiftHoles;
  }
  eat(food) {
    console.log(`kbotthdkrlllll we assimilate ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}