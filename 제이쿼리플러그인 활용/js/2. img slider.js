function MySliderBox1__init() {
  var swiper = new Swiper('.my-slider-box-1 .swiper-container', {
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".my-slider-box-1 .swiper-pagination",
      clickable:true,
      renderBullet: function (index, className) {
        let img = "";
        
        if ( index == 0 ) {
          img = '<img src="https://picsum.photos/id/1/100/100">';
        }
        else if ( index == 1 ) {
          img = '<img src="https://picsum.photos/id/2/100/100">';
        }
        else if ( index == 2 ) {
          img = '<img src="https://picsum.photos/id/3/100/100">';
        }
        else if ( index == 3 ) {
          img = '<img src="https://picsum.photos/id/4/100/100">';
        }
        else if ( index == 4 ) {
          img = '<img src="https://picsum.photos/id/5/100/100">';
        }
        else if ( index == 5 ) {
          img = '<img src="https://picsum.photos/id/6/100/100">';
        }
        else if ( index == 6 ) {
          img = '<img src="https://picsum.photos/id/7/100/100">';
        }
        else if ( index == 7 ) {
          img = '<img src="https://picsum.photos/id/8/100/100">';
        }
        
        const bullet = '<span class="' + className + '">' + img + '</span>';
        
        return bullet;
      },
    },
    slidesPerView : 1, // 한 화면에 보이는 슬라이드 이미지 수
    spaceBetween : 0, // 슬라이드 사이의 여백을 지정
    loop : false, // 슬라이드의 루프 설정 (true시, 무한으로 돌기)
    navigation: { // 버튼 엘리먼트
      nextEl: '.my-slider-box-1 .my-slider-box-1__btn-right',
      prevEl: '.my-slider-box-1 .my-slider-box-1__btn-left',
    },
  });
}
MySliderBox1__init();

function MySliderBox2__init() {
  var swiper = new Swiper('.my-slider-box-2 .swiper-container');
}

MySliderBox2__init();