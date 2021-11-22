class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const me = new Person('jin', 'jeongwoo'); // 생성자가 호출이 됨
console.log(me.fullName); // getter 함수 호출

me.fullName = 'jin'; // setter 함수 호출
console.log(me.fullName);
