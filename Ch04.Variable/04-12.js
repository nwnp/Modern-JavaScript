/* 
  #### 식별자 네이밍 규칙 #### 
    - 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어, 달러 기호를 포함할 수 있다
    - 식별자 이름의 첫 글자에는 숫자로 시작하면 안된다
    - 예약어는 식별자로 사용할 수 없다


  1. 변수는 쉼표로 구분해 하나의 문에서 여러 개를 한번에 선언할 수 있다
  2. 한글이나 일본어 식별자도 사용할 수 있다
  3. 예약어나 특정 특수문자를 사용할 수 없다
  4. 대소문자를 구분한다
  5. 가독성이 좋은 네이밍을 한다
*/

// 1
var person, first;

// 2
var 진정우;

// 3
// var first-name
// var this

// 4
var firstName;
var firstname;
var FIRSTNAME;

// 5
const x = 95;
const score = 95;

/** 네이밍 컨벤션
 *
 *  - 카멜 케이스
 *  - 스네이크 케이스
 *  - 파스칼 케이스
 *  - 헝가리언 케이스
 *
 */

// 카멜 케이스
var firstName;

// 스네이크 케이스
var fist_name;

// 파스칼 케이스
var FistName;

// 헝가리언 케이스
var strFirstName;
