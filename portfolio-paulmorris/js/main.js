const mw = window.matchMedia("(min-width: 768px)");
window.addEventListener('resize', resize);

function resize() {
  if (mw.matches) {
    $('.name-div, .proj-div, .git, .email').fadeIn();
    $('svg.git-icon').css('opacity', '0');
  } else {
    $('.name-div, .proj-div, .git, .email').hide();
    $('.git-div, .email-div').show();
    $('svg.git-icon').css('opacity', '1');
  }
}

$( document ).ready(function() {
  $('body').fadeIn(1200);
  if (mw.matches) {
    $('.name-div').slideDown(1000);
    $('.proj-div').delay(400).slideDown(1000);
    $('.git-div').delay(800).slideDown(1000);
    $('.email-div').delay(1200).slideDown(1000);
  } else {
    $('.git-div, .email-div').show();
    $('.git, .email').hide();
  }
});

$('.profile-pic').hover(function () {
    $('.hey-there').delay(1000).animate({"opacity":"1"},500);
  }, function () {
    $('.hey-there').animate({"opacity":"0"}),500;
  }
);

$('.git-div').hover(
  function() {
    if (mw.matches) {
      $('.git').animate({"width":"0%"},200);
      $('.git-icon').animate({"opacity":"1","margin-left":"2.5rem"},250);
    }
  },
    function() {
      if (mw.matches) {
        $('.git').animate({"width":"100%"},300);
        $('.git-icon').animate({"opacity":"0","margin-left":"0"},300);
      }
    }
);

$('.email-div').hover(
  function() {
    $('.email').animate({"height":"0%"},300);
    },
    function() {
      $('.email').animate({"height":"100%"},300);
    }
);


$(".proj-div").click(function () { 
  $('.proj-div h2').addClass('active');
  $('.name-div h2').removeClass('active');
  $(".main-wrapper").animate({"left":"-5000px"},700);
  $(".project-wrapper").css("display", "flex").animate({"right":"0"},700);
});

$(".name-div").click(function () { 
  $('.name-div h2').addClass('active');
  $('.proj-div h2').removeClass('active');
  $(".project-wrapper").animate({"right":"-5000px"},700);
  $(".main-wrapper").css("display", "flex").animate({"left":"0px"},700);
});
