/* all slider start */
$('.about-slider').slick({
  infinite: true,
  slidesToShow: 2.1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '30px',
      }
    }
  ]
});

$('.main-sliders').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  centerMode: true,
  dots: true,
    responsive: [
{
  breakpoint: 992,
  settings: {
    arrows: false,
    dots: true,
    centerMode: false,
    centerPadding: '15px',
    slidesToShow: 3
  }
},
{
  breakpoint: 768,
  settings: {
    arrows: false,
    dots: true,
    centerMode: false,
    centerPadding: '0px',
    slidesToShow: 2
  }
},
{
  breakpoint: 480,
  settings: {
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: false,
    centerPadding: '15px',
    slidesToShow: 1
  }
}
]
});

// location slider

$('.loca-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  centerMode: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 3
      }
    }
  ]
});
// tests-slider


$('.tests-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  centerMode: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1.5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

//sepcializari slider
$('.spechob-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  centerMode: false,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1.5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('button[data-bs-toggle="pill"]').on('click', function (e) {
  $('.spechob-slider').slick('setPosition');
})

function changeImg(value)
{
  var srcLink = './assets/images/ab' + value + '.png';
  $("#abcontainer").attr('src',srcLink);
}

function changeImg2(value)
{
  var srcLink = './assets/images/pp' + value + '.jpg';
  $("#ppcontainer").attr('src',srcLink);
}

// category slider
$('.category-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  centerMode: false,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        // prevArrow: $(".pp2"),
        // nextArrow: $(".nn2"),
      }
    }
  ]
});


// cases slider
$('.case-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  centerMode: false,
  centerPadding: '15px',
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});

// team slider
$('.team-slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  centerMode: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1.5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});
/* serv slider */
$('.long-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoPlay: true,
  centerMode: true,
  prevArrow: $('.left-arw'),
  nextArrow: $('.right-arw'),
  dots: false,
  centerPadding: '15px',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 2.3
      }
    }
  ]
});

/* rev slider */
$('.review-slider-wrap').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoPlay: true,
  centerMode: false,
  prevArrow: $('.left-rev'),
  nextArrow: $('.right-rev'),
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        dots: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});
/* partner slider */
$('.partner-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: false,
  centerPadding: '15px',
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    }
  ]
});
