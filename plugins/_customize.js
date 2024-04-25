// (function bannerUse() {
//   const body = document.querySelector('body');
//   const videoBox = document.querySelector('.bannerBox');
//   const video = document.querySelector('.video');
//   const loading = document.querySelector('.loading');

//   const totalFrames = 1500;
//   let lastScrollTime = 0;
//   let lastVideoTime = 0;

//   body.classList.add('onload');
//   video.addEventListener('loadeddata', function () {
//     body.classList.remove('onload');
//     loading.classList.add('loaded');
//   });
//   video.load();
//   window.addEventListener('scroll', function (e) {
//     const checkCurrentTime = performance.now();
//     if (checkCurrentTime - lastScrollTime < 50) {
//       return;
//     }
//     lastScrollTime = checkCurrentTime;

//     const scrollY = window.scrollY;

//     const currentFrame = Math.floor((scrollY / (videoBox.clientHeight - window.innerHeight)) * totalFrames);
//     const currentTimeInSeconds = (currentFrame / totalFrames) * video.duration;

//     requestAnimationFrame(function () {
//       if (Math.abs(currentTimeInSeconds - lastVideoTime) > 0.05) {
//         video.currentTime = currentTimeInSeconds;
//         lastVideoTime = currentTimeInSeconds;
//       }
//     });
//   });

//   const siteHeader = document.querySelector('.siteHeader');
//   let lastScrollTop = 0;
//   window.addEventListener('scroll', () => {
//     const currentScrollTop = window.scrollY;

//     if (currentScrollTop > lastScrollTop) {
//       siteHeader.classList.add('headIn');
//     } else {
//       siteHeader.classList.remove('headIn');
//       body.classList.remove('mobileOpen');
//     }

//     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // 確保在頂部時不會出現負值
//   });

//   // let shine = new Shine(document.querySelector('.floatNav .bg'));
//   // window.addEventListener(
//   //   'mousemove',
//   //   function (event) {
//   //     shine.light.position.x = event.clientX;
//   //     shine.light.position.y = event.clientY;
//   //     shine.draw();
//   //   },
//   //   false
//   // );
// });

(function () {
  const body = document.querySelector('body');
  const siteHeader = document.querySelector('.siteHeader');
  const siteHeaderIn = document.querySelector('.innerPage .siteHeader');
  const moreBtn = document.querySelector('.moreBtn');
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => fixFunction());
  window.addEventListener('load', () => fixFunction());
  function fixFunction() {
    let currentScrollTop = window.scrollY;

    if (currentScrollTop === 0) {
      siteHeader.classList.remove('headFixIn');
    } else {
      siteHeader.classList.add('headFixIn');
    }

    if (currentScrollTop > lastScrollTop) {
      siteHeader.classList.add('headFix');
    } else {
      siteHeader.classList.remove('headFix');
      body.classList.remove('mobileOpen');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // 確保在頂部時不會出現負值
  }

  //blockParallax
  let textWrapper = document.querySelector('.slogan .day');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime
    .timeline({ loop: true })
    .add({
      targets: '.slogan .line',
      scaleX: [0, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 900,
    })
    .add({
      targets: '.slogan .letter',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: 'easeOutExpo',
      duration: 800,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i,
    })
    .add({
      targets: '.slogan',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 5000,
    });

  if (document.querySelector('.activitiesBox .topBox .infoBox')) {
    gsap.to('.activitiesBox .topBox .infoBox', {
      yPercent: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: '.activitiesBox .topBox',
        scrub: true,
      },
    });

    //blockScrollLeft
    gsap.registerPlugin(ScrollTrigger);
    const items = gsap.utils.toArray('.activitiesBox .bottomBox .listBox .item');
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      items.forEach((item) => {
        maxWidth += item.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

    gsap.to(items, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: 'none',
      scrollTrigger: {
        trigger: '.activitiesBox .bottomBox',
        start: 'center center',
        pin: true,
        scrub: 1,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
      },
    });
  }

  //mouseHoverA
  gsap.set('.moreBtn', { xPercent: (moreBtn.clientWidth / 2) * -1, yPercent: moreBtn.clientHeight * -1 });

  let xTo = gsap.quickTo('.moreBtn', 'x', { duration: 0.6, ease: 'power3' }),
    yTo = gsap.quickTo('.moreBtn', 'y', { duration: 0.6, ease: 'power3' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  function hoverOn(elem) {
    const targetItem = document.querySelectorAll(elem);

    targetItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        moreBtn.classList.add('hoverOn');
      });

      item.addEventListener('mouseleave', () => {
        moreBtn.classList.remove('hoverOn');
      });
    });
  }
  hoverOn('section a');

  //newsBox
  const newsBox = document.querySelector('.newsBox');
  if (newsBox) {
    const bannerBox = document.querySelector('.bannerBox');
    window.addEventListener('scroll', () => {
      const newsBoxPosition = newsBox.getBoundingClientRect();
      if (newsBoxPosition.top < 0) {
        bannerBox.style.opacity = 0;
      } else {
        bannerBox.style.opacity = 1;
      }
    });
  }

  //videoBox
  const videoBoxItem = document.querySelectorAll('.videoBox video');
  if (videoBoxItem) {
    videoBoxItem.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentNode.classList.toggle('active');
        item.paused ? item.play() : item.pause();
      });
    });
  }

  //floatNav
  const mainBox = document.querySelector('.index .mainBox');
  const floatNav = document.querySelector('.floatNav');
  if (mainBox) {
    window.addEventListener('scroll', () => {
      const mainBoxPosition = mainBox.getBoundingClientRect();
      if (mainBoxPosition.top < floatNav.offsetHeight / 2 + 200) {
        floatNav.classList.add('active');
        floatNav.style.top = `${floatNav.offsetHeight / 2 + 200}px`;
        floatNav.style.position = `fixed`;
      } else {
        floatNav.removeAttribute('style');
      }
    });
  }

  //menuUse
  const menuBg = document.querySelector('.menuBg');
  const mobileBtn = document.querySelector('.mobileBtn');
  const menuBox = document.querySelector('.menuBox');
  const language = document.querySelector('.language');
  mobileBtn.addEventListener('click', () => {
    menuBg.classList.toggle('active');
    mobileBtn.classList.toggle('active');
    language.classList.toggle('active');
    siteHeader.classList.toggle('active');

    if (menuBox.classList.contains('active')) {
      menuBox.classList.remove('active');
    } else {
      setTimeout(() => {
        menuBox.classList.add('active');
      }, 1200);
    }
  });

  // bannerUse
  // const checkBox = document.querySelector('.checkBox');
  const videoBox = document.querySelector('.bannerBox');
  const video = document.querySelector('.video');
  const loading = document.querySelector('.loading');
  if (videoBox) {
    let totalHeight = videoBox.offsetHeight;

    let loaded = false;
    body.classList.add('onload');
    video.addEventListener('loadeddata', function () {
      setTimeout(() => {
        body.classList.remove('onload');
        loading.classList.add('loaded');
      }, 2000);
      loaded = true;
    });
    video.load();

    let check = 0;

    window.addEventListener('scroll', () => {
      // checkBox.innerHTML = window.scrollY;
      if (!loaded) return;
      startAnimation();
    });
    function startAnimation() {
      requestAnimationFrame(animation);
      function animation(t) {
        let currentScrollTop = window.scrollY;
        let lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // 確保在頂部時不會出現負值
        let totalTime = video.duration;

        if (check < lastScrollTop) {
          check++;
        } else {
          check--;
        }

        video.currentTime = (totalTime * check) / (totalHeight - window.innerHeight);

        requestAnimationFrame(animation);
      }
    }
  }

  $('.innerPage .functionPanel .share .shareButton').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings('ul').slideToggle();
  });

  const el = document.querySelector('.functionPanel .fontSize'); // 控制的對象
  if (el) {
    const list = el.querySelectorAll('ul button');
    const content = document.querySelector('.innerPage main .content');
    if (el) {
      list.forEach((v) => {
        v.addEventListener('click', (e) => {
          createCookie('FontSize', `${e.target.className}`, 356);
          toggleClass(e.target.className);
          e.target.classList.add('active');
        });
      });

      // 移除 active 的 class 名稱
      function toggleClass(targetClassName) {
        list.forEach((i) => i.classList.remove('active'));
        switch (targetClassName) {
          case 'small':
            content.classList.remove('largeSize', 'mediumSize');
            content.classList.add('smallSize');
            break;
          case 'medium':
            content.classList.remove('smallSize', 'largeSize');
            content.classList.add('mediumSize');
            break;
          case 'large':
            content.classList.remove('smallSize', 'mediumSize');
            content.classList.add('largeSize');
            break;
        }
      }

      // 創造新的 字體大小設定
      function createCookie(name, value, days) {
        let _expires;
        const _date = new Date();
        if (days) {
          _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
          _expires = '; expires=' + _date.toGMTString();
        } else {
          _expires = '';
        }
        document.cookie = name + '=' + value + _expires + '; path=/';
      }

      // 讀取瀏覽器上 字體大小設定
      function readCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

      // 初始化 字體大小設定
      let cookie = readCookie('FontSize');
      // 如果沒有cookie 則預設值為'medium'
      if (!cookie) {
        cookie = 'medium';
      }
      document.querySelectorAll(`.${cookie}`).forEach((i) => {
        i.classList.add('active');
        content.classList.add(`${cookie}Size`);
      });
    }
  }
})();

function sliderUse(elem) {
  let target = document.querySelector(elem);
  if (!target) return;
  let parentBoxWidth;
  let sliderMovePx;
  let request;
  let cloneElem = document.querySelector(elem).parentNode.innerHTML;
  document.querySelector(elem).insertAdjacentHTML('afterEnd', cloneElem);
  document.querySelector(elem).insertAdjacentHTML('afterEnd', cloneElem);
  $(window).on('load', () => {
    init();
  });
  $(window).on('resize', () => {
    init();
  });

  function init() {
    parentBoxWidth = document.querySelector(elem).offsetWidth;
    sliderMovePx = 0;
    cancelAnimationFrame(request);
    if (window.innerWidth < parentBoxWidth * 2) {
      requestAnimationFrame(animation);
    }
  }
  function animation() {
    sliderMovePx++;
    if (sliderMovePx < parentBoxWidth) {
      $(elem).css('transform', `translateX(-${sliderMovePx}px`);
      request = requestAnimationFrame(animation);
    } else {
      sliderMovePx = 0;
      request = requestAnimationFrame(animation);
    }
  }
}
sliderUse('.activitiesTitleBox span');
