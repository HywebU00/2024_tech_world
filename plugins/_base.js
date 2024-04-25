const setWidth = 1000;

$(function () {
  // sliderDown('.language');
  faq('.qBox', '.aBox');
});

// 開啟畫面動態效果
new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 50, // default
  mobile: true, // default
  live: true, // default
}).init();
// 開啟畫面動態效果

// 滾動畫面時
// window.addEventListener('scroll', function () {
//   if ($(window).scrollTop() > 20) {
//     $('body').addClass('headFix');
//   } else {
//     $('body').removeClass('headFix');
//   }
// });

// cookie
(function () {
  function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;

    for (var i = 0, l = cookieAry.length; i < l; ++i) {
      cookie = jQuery.trim(cookieAry[i]);
      cookie = cookie.split('=');
      cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
  }

  function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
      value = decodeURIComponent(value);
    }

    return value;
  }
  getCookieByName('privacy') === undefined ? (document.cookie = 'privacy=false; max-age=2592000; path=/') : null;

  if (getCookieByName('privacy') === 'false') {
    $('.closePrivacy').on('click', function () {
      $('.privacyBox').slideUp(400, function () {
        document.cookie = 'privacy=true; max-age=2592000; path=/';
        $(this).remove();
      });
    });
  } else {
    $('.privacyBox').remove();
  }
})();
// cookie

// head搜尋
(function () {
  $('.menuSearch > button').on('click', function () {
    $('.searchOuter').toggleClass('active');
  });
  $('.searchClose').on('click', function () {
    $('.searchOuter').removeClass('active');
  });
})();

// sliderDown
function sliderDown(elem) {
  $(elem)
    .children('button')
    .on('click', function () {
      $(elem).children('ul').slideToggle('fast');
    });
  $(window).on('load resize', function () {
    $(elem).find('ul').removeAttr('style');
    $(elem).removeClass('active');
  });
}

// mobileMenu按鈕
// $('.headerBox .container').append('<button type="button" class="mobileBtn"><div class="text">MENU</div><span></span><span></span><span></span></button>');

// menu
(function () {
  $('.menuBox .nextMenuBox').parent().addClass('nextLv');
  // $('.menuBox .nextLv')
  //   .off()
  //   .mouseenter(function () {
  //     if (window.innerWidth > setWidth) {
  //       $(this).children('.nextMenuBox').stop().slideDown(300);
  //       $(this).children('.nextMenuBox').addClass('active');
  //     }
  //   })
  //   .mouseleave(function () {
  //     if (window.innerWidth > setWidth) {
  //       $(this).children('.nextMenuBox').stop().slideUp(300);
  //       $(this).children('.nextMenuBox').removeClass('active');
  //     }
  //   });

  // function menuU() {
  //   bodyWidth = $('body').outerWidth();

  //   $('.mainMenu .nextLv')
  //     .off()
  //     .mouseenter(function () {
  //       if ($('body').outerWidth() > setWidth) {
  //         $(this).addClass('active');
  //       }
  //     })
  //     .mouseleave(function () {
  //       if ($('body').outerWidth() > setWidth) {
  //         $(this).removeClass('active');
  //       }
  //     });
  //   $('.mainMenu .nextLv > button, .mainMenu .nextLv > a')
  //     .off()
  //     .on('click', function (e) {
  //       if ($('body').outerWidth() <= setWidth) {
  //         e.preventDefault();
  //         $(this).parent('li').toggleClass('active');
  //         $(this).siblings('.nextMenuBox').slideToggle('fast');

  //         $(this).parent('li').siblings('li').removeClass('active');
  //         $(this).parent('li').siblings('li').find('.nextMenuBox').slideUp('fast');
  //       }
  //     });
  // }

  // $(window).on('load', function () {
  //   menuU();
  // });
  // $(window).on('resize', function () {
  //   menuU();
  // });
})();

// menu手機版
// (function () {
//   $('.mobileBtn').on('click', function () {
//     $(this).toggleClass('active');
//     $('body').toggleClass('mobileOpen');
//     $('.menuBox').toggleClass('active');
//   });
//   $('.nextLv > button, .nextLv > a').on('click', function (e) {
//     e.preventDefault();
//     $(this).siblings('.nextMenuBox').slideToggle(300);
//     $(this).toggleClass('active');
//     $(this).parent().siblings().find('.nextMenuBox').slideUp(300);
//   });
// })();

(function () {
  $(window).on('resize', function () {
    $('.nextMenuBox').removeAttr('style');
  });
})();

// sideBox
(function () {
  $('.hasSide button').on('click', function () {
    $('.hasSide ul').slideToggle(300);
  });
})();

// faq

function faq(q, a) {
  $(q).on('click', function () {
    var thisQ = $(this);
    var thisP = thisQ.parent();
    if (thisP.is('.active') == true) {
      thisP.toggleClass('active').find(a).slideToggle('fast');
    } else {
      thisP.siblings('.active').removeClass('active').find(a).slideToggle('fast');
      thisP.toggleClass('active').find(a).slideToggle('fast');
    }
  });
}
