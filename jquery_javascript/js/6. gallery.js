function SideBar__init() {
  const $statusIco = $('.side-bar__status-ico');

  $('.side-bar__menu-box-1 > ul > li:not(:last-child)').mouseenter(function() {

    const $this = $(this);
    const position = $this.position();
  
    console.log("position.left" + position.left);
    console.log("position.top" + position.top);
    
    $statusIco.css('top', position.top + 16);
  });

  $('.side-bar__menu-box-1 > ul > li:not(:last-child)').mouseleave(function() {
    $statusIco.css('top', '');
  });
}

SideBar__init();
