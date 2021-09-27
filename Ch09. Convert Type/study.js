var x = 10

var convertIntToString = x.toString() // 비파괴적 처리 함수
console.log(typeof convertIntToString, convertIntToString)

// 암묵적 타입 변환 = 타입 강제 변환
var x = 10;
var str = x + '';
console.log(typeof str)

var test1 = '10' + 10
console.log(typeof test1)

var test2 = 10 * '19'
var test3 = 10 + '19'
console.log(typeof test2, typeof test3)

console.log('1' > 0) // 비교 연산자는 숫자만을 평가하기 때문에 숫자가 아닌 타입을 숫자로 암묵적으로 변환한다

if (!false) console.log(false)
if (!undefined) console.log(undefined)
if (!null) console.log(null)

// 문자열 타입으로 변환
/* 
1. String()
2. toString() 
*/
console.log(typeof String(x))
console.log(typeof x.toString())

// 숫자 타입으로 변환
/* 
1. Number()
2. parseInt()
 */
console.log(typeof Number("34"))
console.log(typeof parseInt(x))

// 불리언 타입으로 변환
/* 
1. Boolean()
2. 부정 논리 연산자를 두 번 사용
 */
console.log(typeof Boolean('x'))
console.log(typeof !!'x')

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
/* 
  객체는 키와 값으로 구성되니 프로퍼티의 집합이다
  객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined인 경우
    -> 객체의 프로퍼티를 참조하면 타입에러가 발생한다
*/

var elem = null;
var value = elem && elem.value;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다
console.log(value)


// 함수 매개변수에 기본값을 설정할 때
/* 
  함수를 호출할 때 매개변수를 전달하지 않으면 undefined가 할당된다
  단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다
*/
function getStringLength(str) {
  str = str || ''; // 단축평가
  return str
}

console.log(getStringLength()) // 단축평가를 하지 않으면 undefined가 반환됨
console.log(getStringLength('hi'))

// 옵셔널 체이닝 연산자
/* 
  좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다
*/
var elem = null
var value = elem?.value;
console.log(value) // undefined
// 옵셔널 연산자는 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고
// 프로퍼티 참조할 때 유용하다.

var str = '';
var length = str?.length;
console.log(length)
// 좌항 피연산자가 false로 평가받는 Falsy값(false, undefined, null, 0, -0, NaN, '')이라도 
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다

// null 병합 연산자(??)
/* 
  좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다
*/
var foo = undefined ?? 'default string';
console.log(foo)
var foo = 0 ?? 'default string';
console.log(foo)
// 변수에 기본값을 설정할 때 유용하다
// false로 평가받는 Falsy 값이면 우항의 피연산자를 반환한다