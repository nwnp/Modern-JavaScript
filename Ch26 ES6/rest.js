function foo(...rest) {
  console.log(rest);
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1, param2, rest);
}

bar(1, 2, 3, 4, 5);
