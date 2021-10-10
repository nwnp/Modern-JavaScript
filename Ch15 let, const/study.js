/**
 * let과 const
 *    - let
 *        - 변수 중복 선언 금지 -> SyntaxError
 *        - 지역 스코프로 인정하는 블록 레벨 스코프를 따른다
 *        - let으로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작
 *        - 재할당 가능
 *    - const
 *        - 상수를 선언하기 위해 사용
 *        - 반드시 선언과 동시에 초기화해야 한다
 *        - let과 동일하게 블록 레벨 스코프를 따르며, 변수 호이스팅이 발생하지 않는 것처럼 동작
 *        - 재할당 불가능(immutable value)
 *
 */

var foo = 123;
let bar = 123;
var foo = 456;
// let bar = 456; // SyntaxError: Identifier 'bar' has already been declared

console.log(foo, bar);

let foobar = 1;
{
  let foobar = 2;
  console.log(foobar);
}
foobar = 4;
console.log(foobar);

let preTaxPrice = 100;
const TAX_RATE = 0.1;
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;
console.log(afterTaxPrice);

const person = {
  name: 'jin',
};

person.age = 28;
person.name = 'jin jeongwoo'; // 객체 내에 값(프로퍼티)은 변경가능한 값(mutable value)
console.log(person);
