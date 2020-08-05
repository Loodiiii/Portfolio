$(document).ready(function () {

  var $scroll = $('.cao1');
  $scroll.waypoint(function (direction) {
    if (direction == "down") {
      $scroll.addClass('js-animate');
    }
    else {
      $scroll.removeClass('js-animate');
    }
    console.log("davim brate sta se desilo da jeste");


  }, { offset: "85%" });
  $scroll.waypoint(function (direction) {
    if (direction == "up") {
      $scroll.addClass('js-animate');
    }
    else {
      $scroll.removeClass("js-animate");
    }
    console.log("davim brate sta se desilo da jeste");

  });

  //default scrolling
  var $things = $('.thing');
  $things.waypoint(function (direction) {
    if (direction === 'down') {
      // Do stuff
    }
  }, {
    offset: '25%'
  });

  $things.waypoint(function (direction) {
    if (direction === 'up') {
      // Do stuff
    }
  }, {
    offset: '75%'
  });

  $(".kvadrat-slika").on("mouseover", function () {
    $(".kvadrat-slika").css({ "cursor": "pointer" })
  });


  $(".slika1").on("mouseover", function () {
    $(".slika1").css({ "background-size": "120% 120%" });
  });
  $(".slika1").on("mouseleave", function () {
    $(".slika1").css({ "background-size": "100% 100%" });
  });

  $(".slika2").on("mouseover", function () {
    $(".slika2").css({ "background-size": "120% 120%" });
  });
  $(".slika2").on("mouseleave", function () {
    $(".slika2").css({ "background-size": "100% 100%" });
  });

  $(".slika3").on("mouseover", function () {
    $(".slika3").css({ "background-size": "120% 120%" });
  });
  $(".slika3").on("mouseleave", function () {
    $(".slika3").css({ "background-size": "100% 100%" });
  });

  $(".slika4").on("mouseover", function () {
    $(".slika4").css({ "background-size": "120% 120%" });
  });
  $(".slika4").on("mouseleave", function () {
    $(".slika4").css({ "background-size": "100% 100%" });
  });

  $(".slika5").on("mouseover", function () {
    $(".slika5").css({ "background-size": "120% 120%" });
  });
  $(".slika5").on("mouseleave", function () {
    $(".slika5").css({ "background-size": "100% 100%" });
  });

  $(".slika6").on("mouseover", function () {
    $(".slika6").css({ "background-size": "120% 120%" });
  });
  $(".slika6").on("mouseleave", function () {
    $(".slika6").css({ "background-size": "100% 100%" });
  });



});

//typed.js titles
var typed2 = new Typed('.kucano', {
  strings: ['Web Developer', 'Various Skills', 'HTML, CSS, jQuery'],
  typeSpeed: 40,
  backSpeed: 60,
  backDelay: 1300,
  fadeOut: true,
  loop: true
});
