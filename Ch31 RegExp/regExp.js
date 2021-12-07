// 사용자로부터 입력받은 번호
const tel = "010-7601-873삼";

// 정규 표현식 리터럴로 번호 패턴을 정의
const regExp = /^\d{3}-\d{4}-\d{4}$/;

// tel이 휴대폰 번호 패턴에 매칭하는지 테스트
console.log(regExp.test(tel)); // false

const target = "Is this all there is?";
const regexp = /is/;

console.log(regexp.exec(target));

const target2 = "http://poiemaweb.com";

// 'http'로 시작하는지 검색
const regExp2 = /^http/g;
console.log(regExp2.test(target2));
console.log(target2.match(regExp2));

const email = "ujmn0418@gmail.com";
const exp =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-A])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-A])*\.[a-zA-Z]{2,3}$/;

console.log(exp.test(email));
