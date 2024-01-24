//Слайдер для страниц ФИЗИКА и ИНФОРМАТИКА

const splide = new Splide('.splide', {
  perPage: 1,
  type: 'loop',
  drag: 'free',
  focus: 'center',
  pagination: false,
  arrows: false,
  autoScroll: {
    speed: 3,
  },
});
splide.on( 'autoplay:playing', function ( rate ) {
  console.log( rate ); // 0-1
} );
splide.mount(window.splide.Extensions);
