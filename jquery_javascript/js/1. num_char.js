console.clear();

console.log("== 숫자 더하기 숫자 ==");
console.log(10 + 10); // 숫자

console.log("== 문장 더하기 숫자 ==");
console.log("점수 : " + "10");  // 문장

console.log("== 문장 더하기 숫자 ==");
console.log("점수 : " + 10); // 문장

console.log("== 문장 더하기 숫자, 더하기 우선순위 ==");
console.log("점수 : " + 10 + 20); // 문장1020

console.log("== 문장 더하기 숫자, 곱하기 우선순위 ==");
console.log("점수 : " + 10 * 20); // 문장200

console.log("== 문장 더하기 숫자, 괄호 우선순위 ==");
console.log("점수 : " + (10 + 20)); // 문장30