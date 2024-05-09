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
  $('.inMenu .nextMenuBox').parent().addClass('nextLv');
  $('.inMenu .nextLv')
    .off()
    .mouseenter(function () {
      if (window.innerWidth > setWidth) {
        $(this).children('.nextMenuBox').addClass('active');
      }
    })
    .mouseleave(function () {
      if (window.innerWidth > setWidth) {
        $(this).children('.nextMenuBox').removeClass('active');
      }
    });

  $('.menuBox .nextLv')
    .off()
    .mouseenter(function () {
      if (window.innerWidth > 1240) {
        $(this).children('.nextMenuBox').addClass('active');
      }
    })
    .mouseleave(function () {
      if (window.innerWidth > 1240) {
        $(this).children('.nextMenuBox').removeClass('active');
      }
    })
    .click(function () {
      if (window.innerWidth < 1240) {
        $(this).children('.nextMenuBox').removeClass('active');
        $(this).parent('li').siblings().find('.nextMenuBox').slideUp('fast');
        $(this).children('.nextMenuBox').slideToggle('fast');
      }
    });

  //menuUse
  const menuBg = document.querySelector('.menuBg');
  const mobileBtn = document.querySelector('.mobileBtn');
  const menuBox = document.querySelector('.menuBox');
  const language = document.querySelector('.language');
  const siteHeader = document.querySelector('.siteHeader');
  const mainBox = document.querySelector('.innerPage .mainBox .container');
  if (mainBox) {
    function checkInMenu() {
      const mainBoxPosition = mainBox.getBoundingClientRect();
      if (mainBoxPosition.top < 0) {
        siteHeader.classList.add('active');
      } else {
        siteHeader.classList.remove('active');
      }
    }

    window.addEventListener('resize', checkInMenu);
    window.addEventListener('load', checkInMenu);
    window.addEventListener('scroll', checkInMenu);
  }

  mobileBtn.addEventListener('click', () => {
    menuBg.classList.toggle('active');
    mobileBtn.classList.toggle('active');
    language.classList.toggle('active');
    siteHeader.classList.toggle('active');

    if (menuBox.classList.contains('active')) {
      menuBox.classList.remove('active');
    } else {
      menuBox.classList.add('active');
    }
  });

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
