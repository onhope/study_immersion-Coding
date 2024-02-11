// nav를 감싸고 있는 요소들이 제일 아래로 차례차례 깔리고 있음
//  그러므로 nav를 클릭을하면, article, div, section이 전부 다 클릭이 됨

$('section').click(function() {
  alert("section 클릭됨")
});

$('div').click(function() {
  alert("div 클릭됨")
});

$('article').click(function(e) {
  alert("article 클릭됨")

  e.stopPropagation()
});

// return false 는 기본동작을 못하게 만드는 역할을 한다. 
// e.preventDefault()도 동일한 역할
// e.stopPropagation()도 동일한 역할

$('nav').click(function() {
  alert("nav 클릭됨")

  // e.preventDefault()
  return false;
});

// a의 기본 동작은 url로 이동을 하는 것인데, 이를 못하게 막음
$('a').click(function(e) {
  // return false;
  // e.preventDefault();
  e.stopPropagation();
});

$('section, div, article, nav').click(function() {
  $(this).addClass('active');
});