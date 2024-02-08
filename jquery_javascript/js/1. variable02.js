// 문제 : 변수 a와 b의 값을 서로 교체해주세요.
// 조건 : 숫자를 사용할 수 없습니다.
// 조건 : 4칙연산을 사용할 수 없습니다.
console.clear();

let a = 10;
let b = 5;

// 수정가능지역 시작
var c = a;
a = b;
b = c;

// 수정가능지역 끝

console.log("a : " + a);
// 출력 => a : 5
console.log("b : " + b);
// 출력 => b : 10