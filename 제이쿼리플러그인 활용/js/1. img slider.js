function MySliderBox1__init() {
  var swiper = new Swiper('.my-slider-box-1 .swiper', {
    slidesPerView : 3, // 한 화면에 보이는 슬라이드 이미지 수
    spaceBetween : 30, // 슬라이드 사이의 여백을 지정
    loop : false, // 슬라이드의 루프 설정 (true시, 무한으로 돌기)
    navigation: { // 버튼 엘리먼트
      nextEl: '.my-slider-box-1 .my-slider-box-1__btn-right',
      prevEl: '.my-slider-box-1 .my-slider-box-1__btn-left',
    },
  });
}

function MySliderBox2__init() {
  var swiper = new Swiper('.my-slider-box-2 .swiper');
}

MySliderBox1__init();
MySliderBox2__init();