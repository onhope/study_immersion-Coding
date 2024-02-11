console.clear(); 

const $bottomLine = $('section > div');

$('section > ul > li').mouseenter(function() {
  const $this = $(this);

  const position = $this.position();

  const width = $this.outerWidth();

  console.log("position.left : " + position.left);
  console.log("position.top : " + position.top);
  console.log("width : " + width);

  $bottomLine.css({
    left : position.left,
    top : position.top + 40,
    width : width
  })
});