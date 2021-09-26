// @ts-check

/* 연산자 */
// 다른 언어와 별다른 차이가 없음

// 몰랐던 것 : 부호 반전
var x = -10
console.log(-(x))

// 비교 연산자
// == : 동등비교
// === : 일치비교
// != : 부동등 비교
// !== : 불일치 비교

// 일치비교 연산자는 좌항과 우항의 타입도 같고, 값도 같을 때 true 반환
console.log(4 === "4")

console.log(NaN === NaN) // false
var nan = NaN
console.log(isNaN(nan))
console.log(isNaN(1 + undefined))

var score = 80
var result = score >= 70 ? console.log("pass") : console.log("fail")

// 지수 연산자
console.log(2**3)
console.log(2**2.5)
console.log(2**0)
console.log((-10)**3)

/* 그 외의 연산자 */
// -> 다른 주제와 밀접한 관련이 있어서 해당 주제를 배우는 챕터에서 배울 예정
// ?. : 옵셔널 체이닝 연산자
// ?? : null 병합 연산자
// delete : 프로퍼티 삭제
// new : 생성자 함수를 호출할 때 사용하여 인스턴스를 생성
// instancof : 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별
// in : 프로퍼티 존재 확인
