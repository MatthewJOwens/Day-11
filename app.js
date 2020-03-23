class Alligator {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    enclosure = 'pen',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.enclosure = enclosure;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }

} class Beaver {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    enclosure = 'pen',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.enclosure = enclosure;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

class Crocodile {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    enclosure = 'pen',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.enclosure = enclosure;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

class Dolphin {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    enclosure = 'pond',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.enclosure = enclosure;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

let arr = []
let gringo = new Alligator("Gringo", "green", "male", 250, 48, "2 inches", "pen")
arr.push(gringo)
let karen = new Crocodile("Karen", "green", "female", 203, 18, "1.5 inches", "pen")
arr.push(karen)
let phil = new Beaver("Phil", "brown", "male")
arr.push(phil)
let jester = new Dolphin("Jester", "gray")
arr.push(jester)
let dan = new Beaver("Dan")
arr.push(dan)
let flipper = new Dolphin("Flipper")
arr.push(flipper)

console.log(arr);
let newArr = arr.filter(x => x.enclosure == "pen")
console.log(newArr);
