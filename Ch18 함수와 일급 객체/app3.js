/* arguments 객체 */
// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용
// 매개변수의 개수보다 적게 전달받게 되는 경우 -> 전달받지 않은 파라미터는 undefined로 초기화됨
// 매개변수의 개수보다 초과되게 받을 경우 -> 초과된 파라미터들은 무시됨
//   -> 아예 무시는 아니고, arguments 객체에 저장은 됨

function sum() {
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    // arguments 객체의 length 프로퍼티는 인자의 개수를 가리킴
    res += arguments[i];
  }
  return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

/* length 프로퍼티 */
// 선언된 매개변수의 개수를 반환
console.log(sum.length);

/* name 프로퍼티 */
// 함수 객체를 가리키는 식별자를 값으로 가짐
const namedFunc = function foo() {};
console.log(namedFunc.name);
