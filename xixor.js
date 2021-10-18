export default class Xixor {
  constructor(name, gender, radiationGenerated, splineCount) {
    this.name = name;
    this.gender = gender;
    this.radiationGenerated = radiationGenerated;
    this.splineCount = splineCount;
  }
  eat(food) {
    console.log(`xzzzxzzzzzzz I subsist on ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}