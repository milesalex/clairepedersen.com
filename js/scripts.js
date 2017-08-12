(function($) {

  var breakpoint = 850;

  function init() {

    $('.gallery #showballroom').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/011.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/011b.jpg");
    })

    $('.gallery #showhall').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/015.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/015b.jpg");
    })

    $('.gallery #showmirror').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/016.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/016b.jpg");
    })

    $('.gallery #showcasino').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/012.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/012b.jpg");
    })

    $('.gallery #showdrinks').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/013.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/013b.jpg");
    })

    $('.gallery #showstage').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/019.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/019b.jpg");
    })

    $('.gallery #showphotobooth').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/020.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/020b.jpg");
    })

    $('.gallery #showchat').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/017.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/017b.jpg");
    })

    $('.gallery #showarash').hover(function(){
      // Gif image
      $(this).attr("src", "../img/print/018.jpg");
      }, function() {
      // Still image
      $(this).attr("src", "../img/print/018b.jpg");
    })

    $(".gallery #unboxing-gif").hover( function(){
      // Gif image
      $(this).attr("src", "../img/cupcake/unboxing(stop)2.gif");
    }, function() {
      // Still image
      $(this).attr("src", "../img/cupcake/unboxing(freeze).png");
    });    

    $(".gallery #assembly-gif").hover( function(){
      // Gif image
      $(this).attr("src", "../img/cupcake/animate(final)stop.gif");
    }, function() {
      // Still image
      $(this).attr("src", "../img/cupcake/animate(final)freeze.png");
    });       

    $(".gallery #fill-gif").hover( function(){
      // Gif image
      $(this).attr("src", "../img/littler/keepcup2.gif");
    }, function() {
      // Still image
      $(this).attr("src", "../img/littler/keepcup(freeze).png");
    }); 

    $(".gallery #envelope-gif").hover( function(){
      // Gif image
      $(this).attr("src", "../img/print/envelope(front).gif");
    }, function() {
      // Still image
      $(this).attr("src", "../img/print/envelopefront.png");
    });

    $(".gallery #hp2014-gif").hover( function(){
      // Gif image
      $(this).attr("src", "../img/print/hp_2014.gif");
    }, function() {
      // Still image
      $(this).attr("src", "../img/print/hp_2014_stop.png");
    });  

    $(".gallery #hp-gif").hover( function(){
      // Gif image
      $(this).attr("src", "../img/print/HP_2015.gif");
    }, function() {
      // Still image
      $(this).attr("src", "../img/print/HP_2015_stop.png");
    });   

    // Hover image reveal on about page
    $(".showpic").hover(function(){
      $('.profpic').css("display","block");
    },function(){
      $('.profpic').css("display","none");
    });

     // Hover image reveal on about page
    $(".showpic2").hover(function(){
      $('.playful').css("display","block");
    },function(){
      $('.playful').css("display","none");
    });

    $(".showcupcakes").hover(function(){
      $('.cupcakes').css("display","block");
    },function(){
      $('.cupcakes').css("display","none");
    });

    $(".showsocks").hover(function(){
      $('.socks').css("display","block");
    },function(){
      $('.socks').css("display","none");
    });

    $(".showcups").hover(function(){
      $('.cups').css("display","block");
    },function(){
      $('.cups').css("display","none");
    });

    $(".showlibrary").hover(function(){
      $('.library').css("display","block");
    },function(){
      $('.library').css("display","none");
    });

    $(".showprints").hover(function(){
      $('.prints').css("display","block");
    },function(){
      $('.prints').css("display","none");
    });

    $(".showdancer").hover(function(){
      $('.dancer').css("display","block");
    },function(){
      $('.dancer').css("display","none");
    });

    $(".showshoes").hover(function(){
      $('.shoes').css("display","block");
    },function(){
      $('.shoes').css("display","none");
    });

    $(".showcomputer").hover(function(){
      $('.computer').css("display","block");
    },function(){
      $('.computer').css("display","none");
    });

    $(".showwork").hover(function(){
      $('.work').css("display","block");
    },function(){
      $('.work').css("display","none");
    });
  }

  function stickToTop(){
    // Fix sidebar to top after scroll position
    var heroHeight = $('.full-wrap').height();
    var scrollPos = $(document).scrollTop();

    if ($(window).width() > breakpoint) {
      if (scrollPos >= heroHeight) {
        $('.project .sidebar').addClass('stick-to-top');
      } else {
        $('.project .sidebar').removeClass('stick-to-top');
      }
    } else {
      $('.project .sidebar').removeClass('stick-to-top');
    }
  }

	$(document).ready(function(){
  	// $.featherlight({iframe: '../img/littler/LittleR_Concept(Full).pdf', iframeHeight: 400});
		$('.gallery').featherlightGallery({
			previousIcon: '',
	    nextIcon: '',
	    galleryFadeIn: 0,
	    galleryFadeOut: 0,
	    openSpeed: 300
		});
    if ($(window).width() > breakpoint) {
      init();
    }
	});

  $(window).resize(function() {
    if ($(window).width() > breakpoint) {
      init();
    }
    stickToTop();
  });

  var offset = 1200
  var duration = 300

  $(window).scroll(function(){
    stickToTop();

    // Reveal the back to top icon
    if ($(this).scrollTop() > offset){
      $('.back-to-top').fadeIn(0);
    } else {
      $('.back-to-top').fadeOut(0);
    }
  });

  $('.back-to-top').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  });
  
})(jQuery);