const values = [1, 2, 3, 4, 5, 6];
const totalScore = values.reduce((pre, cur) => pre + cur);
console.log(totalScore / values.length);

const max = values.reduce((pre, cur) => (pre > cur ? pre : cur));
console.log(max);

// 중복 획수 구하기
const data = ["1", "1", "2", "1"];
const count = data.reduce((pre, cur) => {
  pre[cur] = (pre[cur] || 0) + 1;
  return pre;
}, {});
console.log(count);

// 중복 요소 제거
const values2 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values2.reduce((pre, cur, i, arr) => {
  if (arr.indexOf(cur) === i) pre.push(cur);
  return pre;
}, []);

console.log(result);
