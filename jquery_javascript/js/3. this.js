console.clear();
/*
var person1 = {
  name:"홍길동",
  age:22,
  hello:function() {
    console.log("안녕하세요. 저는 " + person1.age + "살, " + person1.name + "입니다.");
  }
};
person1.hello();
*/

// 객체가 자기 자식을 가리킬 때는 this를 사용한다.

var person1 = {
  name:"홍길동",
  age:22,
  hello:function() {
    console.log("안녕하세요. 저는 " + this.age + "살, " + this.name + "입니다.");
  }
};
person1.hello();

var person2 = {
  name:"홍길순",
  age:23,
  hello:function() {
    console.log("안녕하세요. 저는 " + this.age + "살, " + this.name + "입니다.");
  }
};
person2.hello();








