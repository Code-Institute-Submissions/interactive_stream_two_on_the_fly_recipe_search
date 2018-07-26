$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-right");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });
  
  var $item = 0,
      $itemNo = $('.hero figure').length;
  function transitionSlide() {
    $item++;
    if ($item > $itemNo - 1) {
      $item = 0;
    }
    $('.hero figure').removeClass('on');
    $('.hero figure') .eq($item).addClass('on');
  }
  var $autoTransition = setInterval(transitionSlide, 3500);

  $('.hero figure').click(function() {
    clearInterval($autoTransition);
    $item = $(this).index();
    $('.hero figure').removeClass('on');
    $('.hero figure').eq($item).addClass('on');
    $autoTransition = setInterval(transitionSlide, 3500);
  });

});

function hideHome() { 
     let home = document.getElementById("home");
     home =  home.style.display = "none";
}