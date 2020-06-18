$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
      $('.row-offcanvas').toggleClass('active')
    });
  });
  $('.carousel').carousel({
    interval: 3000
  })
  $('#myCarousel').on('slide.bs.carousel', function () {
    // do something…
  })

  $('#myModal').on('hidden', function () {
    // do something…
  })