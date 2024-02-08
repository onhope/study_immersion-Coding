// 문제 : 4칙연산 함수를 만들고 실행해주세요.

console.clear();

// 함수 생성
function plus (a, b) {
  let num = a + b;
  return num;
}

function minus (a, b) {
  let num = a - b;
  return num;
}

function multiple (a, b) {
  let num = a * b;
  return num;
}

function divide (a, b) {
  let num = a / b;
  return num;
}

// 함수를 호출하고 출력하기 위해서는 변수에 저장해서 콘솔로 찍어주자
let num1 = plus(10, 20);
let num2 = minus(10, 20);
let num3 = multiple(10, 20);
let num4 = divide(10, 20);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);