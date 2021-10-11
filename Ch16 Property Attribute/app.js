/**
 *
 *    프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
 *      - 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 property attribute를 default로 자동 정의한다
 *        * 프로퍼티의 상태
 *          - 프로퍼티의 값(value)
 *          - 값의 갱신 가능 여부(writable)
 *          - 열거 가능 여부(enumerable)
 *          - 재정의 가능 여부(configurable)
 *
 */

/* 데이터 프로퍼티 */
const person = {
  name: 'Jin',
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// 프로퍼티 동적 생성
person.age = 28;
person.location = 'incheon';

console.log(Object.getOwnPropertyDescriptors(person));

/* 접근자 프로퍼티 */
// 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장
// 접근자 함수(accessor function)로 구성된 프로퍼티 -> getter, setter 함수

const exAccessorFunction = {
  firstName: 'Jeongwoo',
  lastName: 'Jin',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};

// 프로퍼티 값 참조
console.log(exAccessorFunction.firstName + ' ' + exAccessorFunction.lastName);

// 값을 저장하면 setter 함수 호출
exAccessorFunction.fullName = 'Jin jeong-woo';

// getter 함수 호출
console.log(exAccessorFunction.fullName);
