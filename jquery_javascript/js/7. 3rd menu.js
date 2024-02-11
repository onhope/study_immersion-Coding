function TopBar__init() {
  $('.top-bar__menu-box-1 ul > li').click(function() {
    $(this).siblings('.hover').removeClass('hover');

    // 내가 열려고하는 메뉴에 하위 메뉴들이 이미 열려 있으면 닫는다. 
    $(this).find('.hover').removeClass('hover');
    // 내가 선택한 아이템의 자식인 메뉴를 연다.
    $(this).addClass('hover');
  });

  $('.top-bar__menu-box-1 ul').click(function() {
    return false;
  });

  $('body').click(function() {
    $('.top-bar__menu-box-1 ul > li.hover').removeClass('hover');
  });
}

TopBar__init();