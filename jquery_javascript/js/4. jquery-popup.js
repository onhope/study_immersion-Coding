for (let no=1; no <=3; no++) {

  // 열기
  $('.btn-popup-' + no).click(function() {
    $('.popup-' + no).addClass("active");
  })

  // 닫기 
  $('.popup-' + no + ' > section > header > button').click(function() {
    $('.popup-' +no).removeClass("active");
  })
}