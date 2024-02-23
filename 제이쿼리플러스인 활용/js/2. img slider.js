function MYSliderBox1__init() {
  let swiper = new Swiper('.my-slider-box-1 .swiper', {
    slidesPerView: 3, // 화면에 보이는 칸 지정
    spaceBetween : 30, // 칸 사이 지정
    loop : false,
    navigation : {
      nextEl : '.my-slider-box-1 .my-slider-box-1__btn-right',
      precEl : '.my-slider-box-1 .my-slider-box-1__btn-left'
    },
  });
}

MYSliderBox1__init();

function MYSliderBox2__init() {
  let swiper = new Swiper('.my-slider-box-2 .swiper');
}

MYSliderBox2__init();