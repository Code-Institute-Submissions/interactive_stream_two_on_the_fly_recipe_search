$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-right");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });
  
   $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
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

function showPancakes() { 
     let pancake = document.getElementById("pancake");
     pancake =  pancake.style.display = "block";
}

function showQuiche() { 
     let quiche = document.getElementById("quiche");
     quiche =  quiche.style.display = "block";
}

function showSalmon() { 
     let salmon = document.getElementById("salmon");
     salmon =  salmon.style.display = "block";
}

function showSmoothie() { 
     let smoothie = document.getElementById("smoothie");
     smoothie =  smoothie.style.display = "block";
}


function resetResults() { 
      window.location.reload();
}

function showReset() { 
     let reset = document.getElementById("reset");
     reset =  reset.style.display = "block";
}