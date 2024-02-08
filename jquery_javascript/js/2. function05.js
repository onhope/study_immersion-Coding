// 함수는 자판기이다.
// 함수에 입력값(동전과 음료수 버튼 번호)를 넣으면 반환값(음료수) 를 얻을 수 있다.
// typeof 함수는 인자로 입력받은 값의 타입을 반환(리턴)한다.

// typeof는 내장함수로 따로 정의하지 않아도 실행된다. 
// typeof는 데이터의 타입을 확인하는 함수

console.clear();

var a = 1 > 1;
var typeOfA = typeof(a);
console.log("typeOfA : " + typeOfA); // boolean

var b = 1 == 1;
var typeOfB = typeof(b);
console.log("typeOfB : " + typeOfB);// boolean

var c = 1 + 1;
var typeOfC = typeof(c);
console.log("typeOfC : " + typeOfC); // number

var d = "1 + 1";
var typeOfD = typeof(d);
console.log("typeOfD : " + typeOfD); // string