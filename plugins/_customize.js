(function () {
  'use strict';
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

    if (targetItem.length > 0) {
      targetItem.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          moreBtn.classList.add('hoverOn');
        });

        item.addEventListener('mouseleave', () => {
          moreBtn.classList.remove('hoverOn');
        });
      });
    }
  }
  hoverOn('section a');
  hoverOn('.innerPage .listBox a');

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
      if (mainBoxPosition.top < floatNav.offsetHeight / 2 + 300) {
        floatNav.classList.add('active');
        floatNav.style.top = `${floatNav.offsetHeight / 2 + 300}px`;
        floatNav.style.position = `fixed`;
      } else {
        floatNav.removeAttribute('style');
      }
    });
  }

  // bannerUse
  const videoBox = document.querySelector('.bannerBox');
  const video = document.querySelector('.video');
  const loading = document.querySelector('.loading');

  if (loading) {
    const loadingText = document.querySelector('.loading .text');
    loadingText.innerHTML = loadingText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime
      .timeline({ loop: true })
      .add({
        targets: '.loading .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: '.loading .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
  }

  if (videoBox) {
    let totalHeight = videoBox.offsetHeight;

    let loaded = false;
    body.classList.add('onload');
    video.addEventListener('canplaythrough', function () {
      setTimeout(() => {
        body.classList.remove('onload');
        loading.classList.add('loaded');
      }, 1000);
      loaded = true;
    });
    let checkLoad = setInterval(function () {
      if (video.readyState >= 2) {
        body.classList.remove('onload');
        loading.classList.add('loaded');
        loaded = true;
      }
    }, 3000);

    const totalFrames = totalHeight - window.innerHeight;
    let lastScrollTime = 0;
    let lastVideoTime = 0;

    window.addEventListener('scroll', function () {
      if (loaded) {
        clearInterval(checkLoad);
        const currentTime = performance.now();
        if (currentTime - lastScrollTime < 50) {
          return;
        }
        lastScrollTime = currentTime;

        const scrollY = window.scrollY;

        const currentTimeInSeconds = (scrollY / totalFrames) * video.duration;

        requestAnimationFrame(function () {
          if (Math.abs(currentTimeInSeconds - lastVideoTime) > 0.05) {
            video.currentTime = currentTimeInSeconds;
            lastVideoTime = currentTimeInSeconds;
          }
        });
      }
    });
    // video.load();

    // let check = 0;

    // const checkBox = document.querySelector('.checkBox');
    // window.addEventListener('scroll', () => {
    //   checkBox.innerHTML = `${window.scrollY}/${video.currentTime}`;
    //   requestAnimationFrame(startAnimation);
    // });
    // function startAnimation(t) {
    //   let currentScrollTop = window.scrollY;
    //   let lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // 確保在頂部時不會出現負值
    //   let totalTime = video.duration;

    //   if (check < lastScrollTop) {
    //     check++;
    //   } else {
    //     check--;
    //   }

    //   video.stop;
    //   video.currentTime = (totalTime * check) / (totalHeight - window.innerHeight);

    //   requestAnimationFrame(animation);
    // }
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

  const footer = document.querySelector('footer');
  window.addEventListener('resize', footerBg);
  window.addEventListener('load', footerBg);
  window.addEventListener('scroll', footerBg);
  function footerBg() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const newsBoxFiltered = document.querySelector('.newsBox .filtered');
    const target = document.querySelector('.activitiesBox');
    const activitiesFiltered = document.querySelector('.activitiesBox .filtered');
    if (newsBoxFiltered) {
      const filteredPosition = target.getBoundingClientRect();
      const targetBoxPosition = footer.getBoundingClientRect();

      if (windowWidth < 768 && targetBoxPosition.top < windowHeight) {
        footer.classList.add('fixBg');
        activitiesFiltered.classList.add('hidden');
      } else {
        footer.classList.remove('fixBg');
        activitiesFiltered.classList.remove('hidden');
      }

      if (filteredPosition.top < windowHeight) {
        newsBoxFiltered.classList.add('hidden');
      } else {
        newsBoxFiltered.classList.remove('hidden');
      }
    }
  }

  const trafficBox = document.querySelector('.trafficBox');
  if (trafficBox) {
    trafficBox.addEventListener('mouseenter', () => {
      trafficBox.classList.remove('mouseLeave');
    });

    trafficBox.addEventListener('mouseleave', () => {
      trafficBox.classList.add('mouseLeave');
    });
  }

  const path1 =
    'M48.5,-56.8C61.9,-46.6,71,-30.4,73.8,-13.2C76.6,4,73.1,22.1,65.2,39.5C57.3,56.9,45.1,73.7,28.4,81.1C11.7,88.6,-9.5,86.6,-28.1,79C-46.6,71.4,-62.3,58.3,-69,42.1C-75.7,25.9,-73.3,6.7,-69.5,-11.8C-65.7,-30.3,-60.5,-48.1,-48.7,-58.6C-36.8,-69.1,-18.4,-72.3,-0.4,-71.8C17.6,-71.3,35.1,-67.1,48.5,-56.8Z';
  const path2 =
    'M49.1,-60.9C60.7,-48.7,65.3,-30.5,65.1,-14.1C65,2.4,60,17.1,52.4,30.1C44.7,43.2,34.4,54.5,19.8,64.1C5.2,73.6,-13.6,81.4,-28.9,76.9C-44.2,72.5,-56,55.8,-64.9,38.4C-73.9,21,-79.9,2.9,-78.6,-15.5C-77.3,-33.9,-68.6,-52.7,-54.3,-64.5C-40,-76.2,-20,-81,-0.6,-80.2C18.7,-79.5,37.4,-73.2,49.1,-60.9Z ';
  const path3 =
    ' M54.1,-63.2C68.8,-52.2,78.4,-33.8,80,-15.5C81.5,2.8,75,21.1,65.5,38.2C56.1,55.2,43.8,70.9,26.7,80C9.7,89,-12.2,91.4,-27.2,82.5C-42.1,73.6,-50,53.6,-58.8,35.4C-67.6,17.2,-77.2,1,-77.4,-16.5C-77.7,-33.9,-68.7,-52.5,-54.2,-63.6C-39.7,-74.7,-19.9,-78.3,-0.1,-78.2C19.7,-78.1,39.4,-74.3,54.1,-63.2Z';

  const path4 =
    'M43.2,-54.6C55.5,-41.1,64.7,-27.1,66.6,-12.3C68.5,2.4,63,17.8,55.6,33.6C48.3,49.3,39,65.4,25.5,70.4C12.1,75.4,-5.5,69.4,-23.3,63.2C-41,57.1,-59,50.7,-67.3,38C-75.7,25.3,-74.4,6.2,-70.9,-12.3C-67.4,-30.8,-61.7,-48.7,-49.5,-62.3C-37.3,-75.9,-18.6,-85.1,-1.6,-83.2C15.4,-81.3,30.8,-68.2,43.2,-54.6Z';

  const path5 =
    'M53.6,-64.7C65.9,-53.5,70,-33.3,72,-13.9C74,5.6,74,24.2,65.4,36.6C56.8,49,39.6,55.3,21.7,63.4C3.8,71.6,-14.8,81.6,-29.9,77.9C-45,74.2,-56.7,56.8,-63.1,39.5C-69.6,22.1,-70.8,4.7,-68.6,-12.9C-66.4,-30.5,-60.9,-48.3,-48.9,-59.4C-36.9,-70.6,-18.5,-75.2,1.1,-76.5C20.6,-77.8,41.3,-75.8,53.6,-64.7Z';

  function circle(name, t1, time1, t2, time2, t3, time3, t4, time4, t5, time5) {
    let el2 = gsap.timeline();

    el2
      .to(name, {
        attr: { d: t2 },
        duration: time1,
        ease: 'sine.out',
      })
      .to(name, {
        attr: { d: t3 },
        duration: time2,
        ease: 'sine.out',
      })
      .to(name, {
        attr: { d: t4 },
        duration: time3,
        ease: 'sine.out',
      })
      .to(name, {
        attr: { d: t5 },
        duration: time4,
        ease: 'sine.out',
      })
      .to(name, {
        attr: {
          d: t1,
        },
        duration: time5,
        ease: 'sine.out',
      })
      .repeat(-1);
  }
  if (document.querySelector('#circle')) {
    circle('#circle', path1, 2, path2, 2, path3, 2, path4, 3, path5, 2);
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

(function () {
  const filtered = document.querySelector('.filtered.top');
  if (!filtered) return;
  let scrollTop = window.scrollY;
  window.addEventListener('scroll', () => {
    scrollTop = window.scrollY;
    filtered.style.top = `-${scrollTop}px`;
  });
})();

if ($('.cpPicListBox').length > 0) {
  $('.cpPicListBox .picBox .listBox').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '.cpPicListBox .prev',
    nextArrow: '.cpPicListBox .next',
    variableWidth: true,
  });
}
