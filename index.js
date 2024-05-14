// navbar-toggler 클래스를 가진 버튼을 클릭하면, list-group 클래스에 show 클래스를 부착한다. 
document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function () {
    document.getElementsByClassName('list-group')[0].classList.toggle('show');
  });

  // login-button 클래스를 가진 버튼을 클릭하면, black-bg 클래스에 show 클래스를 부착한다.
  $('.login-button').on('click', function () {
    $('.black-bg').addClass('show-modal');
  })

  // 아이디가 close인 버튼을 클릭하면, black-bg 클래스에 show 클래스를 제거하여 모달창을 닫는다. 
  $('#close').on('click', function () {
    $('.black-bg').removeClass('show-modal');
  })

  // 아이디가 email인 폼을 등록할 때, 입력값이 공백이면 alert 창을 띄운다. 
  $('form').on('submit', function (e) {
    if (document.getElementById('email').value == '') {
      e.preventDefault();
      alert('아이디를 입력하세요.');
    } else if (document.getElementById('password').value == '') {
      e.preventDefault();
      alert('비밀번호를 입력하세요.');
    } else if (document.getElementById('password').value.length < 6) {
      e.preventDefault();
      alert('비밀번호를 6자 이상 입력하세요.');
    }
  })

  // slide-1 클래스를 가진 버튼을 클릭하면, 1번 그림으로 이동한다. 
  $('.slide-1').on('click', function () {
    $('.slide-container').css('transform', 'translateX(0vw)');
  })

  // slide-2 클래스를 가진 버튼을 클릭하면, alert창을 띄운다. 
  $('.slide-2').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-100vw)');
  })

  // slide-3 클래스를 가진 버튼을 클릭하면, 3번 그림으로 이동한다. 
  $('.slide-3').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-200vw)');
  })

  // previous 클래스를 가진 버튼을 클릭하면, 현재 위치에서 +100vw한다. 

  var currentImage = 1;

  // 다음 버튼 누르면, 1번일 경우 2번 사진 보여주세요
  // 다음 버튼 누르면, 2번일 경우 3번 사진 보여주세요
  $('.next').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-' + currentImage + '00vw)');
    currentImage += 1;
  })

  // 이전 버튼 누르면, 2번일 경우 1번 사진 보여주세요
  // 이전 버튼 누르면, 3번일 경우 2번 사진 보여주세요
  $('.previous').on('click', function () {
    if (currentImage == 2) {
      $('.slide-container').css('transform', 'translateX(0vw)');
      currentImage--;
    } else if (currentImage == 3) {
      currentImage--;
      $('.slide-container').css('transform', 'translateX(-100vw)');
    }
  })

  // 스크롤을 100px 내리면, 일단 alert을 띄운다. 
  $(window).on('scroll', function() {
    if (window.scrollY >= 100) {
      $('.navbar-brand').css('fontSize', '50px');
    } else {
      $('.navbar-brand').css('fontSize', '20px');
    }
  })

  // lorem div에서 스크롤 얼마나 내렸는지
  $('.lorem').on('scroll', function() {
    var scrollDown = $('.lorem')[0].scrollTop;        // 스크롤양
    var scrollHeight = $('.lorem')[0].scrollHeight;   // 스크롤 실제 높이
    var clientHeight = $('.lorem')[0].clientHeight;   // 화면에 보이는 높이
    console.log(scrollDown + ',' + scrollHeight + ',' + clientHeight);

    // 스크롤양 + 화면에 보이는 높이 == 실제 div 높이 -10 (오차범위)
    if (scrollDown + clientHeight > scrollHeight - 10) {
      alert('Alert');
    }
  })

  // 현재 페이지 스크롤찾기
  var pageScroll = document.querySelector('html').scrollTop;     // 현재 웹페이지 스크롤양
  var pageHeight = document.querySelector('html').scrollHeight;  // 현재 웹페이지 실제 높이
  var pageViewHeight = document.querySelector('html').clientHeight;  // 현재 웹페이지 보이는 높이

  var scrollStatus = pageScroll / pageHeight * 100;

  // 스크롤
  $(window).on('scroll', function() {
    console.log('scroll');
    $('.scroll-status').css('width', `${scrollStatus}%`);
  })