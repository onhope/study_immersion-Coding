// 문제 : age의 값에 따라서 성년인지 미성년인지 출력해주세요
console.clear();

let age;

console.log("== 정답 ==");

age = 20;

// v1
if (age >= 20) {
  console.log("성년");
}

if (age < 20) {
  console.log("미성년");
}

// v2
age = 15;

if (age >= 20) {
  console.log("성년");
}

else {
  console.log("미성년");
}

// v3 
age = 225;

if (age < 20) {
  console.log("미성년");
}

else {
  console.log("성년");
}


// 구현