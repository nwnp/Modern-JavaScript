/* 프로토타입 */
// 상속을 통해 내용이 동일한 메서드 중복이 여러개 생기면 메모리를 불필요하게 낭비하게 됨
//   --> prototype 기반으로 상속 구현
function Circle(radius) {
  this.radius = radius;

  Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
  // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
  // 공유해서 사용할 수 있도록 프로토타입에 추가
  // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다

  /* 내가 이해한 대로 풀어씀 */
  // getArea() 메서드의 참조 주소를 가지고 있고
  // 호출이 되면 참조 주소를 넘겨주고, 함수 내 실행문을 실행
}

const circle1 = new Circle(4);
const circle2 = new Circle(6);

console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());
