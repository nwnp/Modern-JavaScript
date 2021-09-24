/**  숫자 타입 */
var integer = 34;
var double = 3.4;
var negative = -20;

// 2진수, 8진수, 16진수
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(integer);
console.log(double);
console.log(negative);
console.log(binary);
console.log(octal);
console.log(hex);

// 숫자 타입은 모두 실수로 처리됨
console.log(1 === 1.0); // true
console.log(4 / 2);
console.log(3 / 2);

// 숫자 타입의 세 가지 특별한 값
// Infinity: 양의 무한대
// -Infinity: 음의 무한대
// NaN: 산술 연산 불가(not-a-number)
console.log(10 / 0); // Infinity
console.log(10 / -1); // -Infinity
console.log(1 * 'String'); // NaN

/** 문자열 타입 */
// C는 문자열 타입을 제공하지 않고 문자의 배열로 문자열을 표현하고,
// 자바는 문자열을 객체로 표현한다
// js의 문자열은 원시 타입이며, 변경 불가능한 값(immutable value)이다
var string;
string = '문자열';

/* 템플릿 리터럴 */
// 템플릿 리터럴(백틱 사용)은 이스케이프 문자를 사용하지 않고도 줄바꿈이 허용된다
var template = `template literal`;
console.log(template);

var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

var temple = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;
console.log(template);

/* 표현식 삽입 */
var first = 'jeongwoo';
var last = 'jin';
console.log(`My name is ${first} ${last}`);

/* 불리언 타입 */
var foo = true;
console.log(foo);

/* undefined 타입 */
var unDefined;
console.log(unDefined);
// 변수를 참조했을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는 변수로 판단
// 즉, 초기화되지 않은 변수

/* null 타입 */
// null은 변수에 값이 없다는 것을 의도적으로 명시(의도적 부재- intentional absence)할 때 사용
foo = null;
console.log(foo);

/* 심벌 타입 */
// 심벌 값은 다른 값과 중복되지 않는 유일무이한 값
// 따라서 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용됨

// 심벌 타입은 33장에서 자세히 배움

// 심벌 값 생성
var key = Symbol('key');
console.log(key);
console.log(typeof key);

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용됨
obj[key] = 'value';
console.log(obj[key]);

/* 동적 타이핑 */
// 동적 타입 언어: 값을 할당하는 시점에 변수의 타입이 동적으로 결정되고 변수의 타입을 언제든지 자유롭게 변경 가능
// 단점: 복잡한 프로그램에서는 변화하는 변수 값을 추적하기 어렵
// 단점: 동적으로 값의 변경에 의해 타입도 언제든지 변경 --> 오류의 원인이 될 수 있음
// 유연성(flexibility)은 높지만 신뢰성(reliability)은 떨어진다
var foo = 1234;
console.log(typeof foo);

var foo = '1234';
console.log(typeof foo);

var foo = [];
console.log(typeof foo);

var foo = {};
console.log(typeof foo);

foo = function () {};
console.log(typeof foo);
