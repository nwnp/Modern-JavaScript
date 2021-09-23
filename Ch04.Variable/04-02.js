// @ts-check

/* eslint-disable no-console */

/* 변수에 여러 개의 값을 저장하는 방법 */
/* 
변수 이름을 식별자라고 하며,
식별자는 값이 아니라 <<<<메모리 주소>>>>를 기억하고 있다 
  즉, 식별자는 메모리 주소에 붙인 이름이라고 할 수 있다
*/
var userId = 1;
var userName = 'Jin';
var user = { id: 1, name: 'jin' };

var users = [
  { id: 1, name: 'jin' },
  { id: 2, name: 'hwang' },
];

console.log(users);
