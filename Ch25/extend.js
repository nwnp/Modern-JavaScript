class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return 'eat';
  }

  move() {
    return 'move';
  }
}

// extends
class Bird extends Animal {
  fly() {
    return 'fly';
  }
}

class Lion extends Animal {
  attack() {
    return 'attack';
  }
}

const bird = new Bird(1, 5);

console.log(bird);
console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
