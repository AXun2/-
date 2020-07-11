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

  // 当网页向下滑动 20px 出现"返回顶部" 按钮
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
      // console.log(100);
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 100) {
          document.getElementById("btnTop").style.display = "block";
      } else {
          document.getElementById("btnTop").style.display = "none";
      }
  }
  
  // 点击按钮，返回顶部
  function returnTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }