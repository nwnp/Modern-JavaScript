// @ts-check
/* 생성자 함수에 의한 객체 생성 방식의 장점 */
// 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

  // 2. this에 바인딩되어 있는 인스턴스를 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됨
  // return 100 -> 명시적으로 원시 값을 반환하면 원시 값을 무시하고 this를 반환
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

console.log(circle1); // 암묵적으로 반환된 this를 출력
console.log(circle2); // 암묵적으로 반환된 this를 출력
