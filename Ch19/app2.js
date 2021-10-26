/* 오버라이딩과 프로퍼티 섀도잉 */
const Person = function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`My name is ${this.name}`);
  };

  return Person;
};

const me = new Person('jin');

me.sayHello = function () {
  console.log(`My name is ${this.name}`);
};

me.sayHello();
