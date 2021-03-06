console.log(score);
// 참조에러(ReferenceError)가 발생해야 하는데 undefined가 출력이 됨
// 런타임 이전 단계에서 먼저 실행이 되기 때문에
// -> 변수 호이스팅(variable hoisting)

var score = 123;
// 값의 할당
// 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만
// 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행이 된다.

console.log(score);
// 메모리 공간에 저장되어 있던 값(undefined)을 지우고 123을 저장

var score = 1234;
// 값의 재할당
// 값을 재할당할 수 없어서 변수에 저장된 값을 변경할 수 없다면
// 변수가 아니라 상수(constant)라 한다
console.log(score);

/* 
    #### 언매니지드 언어와 매니지드 언어 #### 

  - 자바스크립트 값은 매니지드 언어는 메모리의 할당 및 해제를 위한 메모리 관리 기능을 
    언어 차원에서 담당하고 개발자의 직접적인 메모리 제어를 허용하지 않는다
    -> 즉, 개발자가 명시적으로 메모리를 할당하고 해제할 수 없다
  - 더 이상 사용하지 않는 메모리의 해제는 가비지 콜렉터가 수행을 함
  
*/
