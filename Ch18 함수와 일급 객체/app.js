/**
 *
 * 일급객체 조건
 *  - 무명의 리터럴로 생성 가능해야함 -> 런타임에 생성이 가능하다
 *  - 변수나 자료구조에 저장할 수 있어야함
 *  - 매개변수에 전달할 수 있어야함
 *  - 함수의 반환값으로 사용가능해야함
 *
 *   => 함수는 위 조건에 모두 만족하므로 일급 객체
 */

// 함수는 무명의 리터럴로 생성할 수 있음
// 함수는 변수에 저장할 수 있음
// 런타임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당됨
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 함수는 객체에 저장할 수 있음
const predicates = { increase, decrease };
