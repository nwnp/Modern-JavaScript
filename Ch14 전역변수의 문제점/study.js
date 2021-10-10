/**
 *  지역 변수의 생명주기는 함수의 생명주기와 일치한다
 *
 *  */

var x = 'global';

function foo() {
  console.log(x);
  var x = 'local'; // 지역변수는 함수 전체에서 유효
}

foo();
console.log(x);

var MYAPP = {};

MYAPP.name = 'jin';
MYAPP.age = 28;
MYAPP.etc = [1, 2, 3];
console.log(MYAPP);

/* 모듈 패턴 */
// 모듈 패턴은 클로저를 기반으로 동작하며,
// 전역변수의 억제 + 캡슐화를 할 수 있다
// 자바스크립트에서는 접근제한자(public, protected, private)를 제공하지 않는다
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환
  // 즉, 외부에 공개를 하려면 메서드를 생성해서 프로퍼티를 추가를 해야함
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.num);

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.decrease());
