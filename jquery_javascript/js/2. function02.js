console.clear();
// 괄호 안의 a, b는 매개변수
// 함수 안에서 값을 정해 놓지 않고, 함수 안의 세상과 바깥 세상을 연결해 주는 매개체 역할을 매개변수가 함
// 함수 호출할 때 매개변수를 넣어서 사용한다
function plus(a, b) {
    console.log(a + b);
}

plus(10, 20); // 30
plus(100, 200); // 300

function minus(a, b) {
    console.log(a - b);
}

minus(10, 20); // -10
minus(100, 200); // -100