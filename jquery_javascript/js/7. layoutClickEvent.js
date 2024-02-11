// nav를 감싸고 있는 요소들이 제일 아래로 차례차례 깔리고 있음
//  그러므로 nav를 클릭을하면, article, div, section이 전부 다 클릭이 됨

$('section').click(function() {
  alert("section 클릭됨")
});

$('div').click(function() {
  alert("div 클릭됨")
});

$('article').click(function() {
  alert("article 클릭됨")
});

$('nav').click(function() {
  alert("nav 클릭됨")
});