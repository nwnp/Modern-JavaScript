/* Object 생성자 함수 */
// new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성한다
const person = new Object();

person.name = 'jin';
person.age = 28;
person.location = 'incheon';

console.log(person);

person.sayHello = function () {
  console.log(`Hi my name is ${person.name}`);
};

person.sayHello();

const strObj = new String('jin');
console.log(typeof strObj);
console.log(strObj);
