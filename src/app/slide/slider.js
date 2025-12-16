// document.addEventListener('wheel', function (e) {
//   // Prevent the default behavior of scrolling
//   e.preventDefault();
  
//   // Check the direction of the wheel
//   if (e.deltaY < 0) {
//     // If scrolling up
//     if ($(this).slick('slickCurrentSlide') === $(this).find('.slick-slide').length - 1) {
//       return; // Do nothing if it's the last slide
//     }
//     $(this).slick('slickNext'); // Go to the next slide
//   } else {
//     // If scrolling down
//     if ($(this).slick('slickCurrentSlide') === 0) {
//       return; // Do nothing if it's the first slide
//     }
//     $(this).slick('slickPrev'); // Go to the previous slide
//   }
// });