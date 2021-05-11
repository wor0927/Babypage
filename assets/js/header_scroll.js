
/*
	since  : 2020-10-19 오후 9:31
	func   : 현재 페이지가 앱에서 진행중인지, 웹에서 진행중인지 체크
*/
function isAppRunning() {
  var UserAgent = navigator.userAgent;
  if (UserAgent.indexOf('ivory_3.0') > 0) {
    console.log('앱 접속증입니다.');
    return true;
  } else {
    console.log('앱 접속이 아닙니다. agent : ' + UserAgent);
    return false;
  }
}
 
/*
	since  : 2020-11-20 오후 14:36
	des    : 헤더_스크롤 반응 효과( 화이트 )
	return : header scroll
*/
var lastScrollTop = 0, delta = 10, nowScroll = 0, headHeight = 80, defaultPadValue = 12;
$(window).on('scroll touchmove mousewheel',function(event) {
    $(".mb_menu").removeClass("menu_show");

    var nowScroll = $(this).scrollTop();
    if (Math.abs(lastScrollTop - nowScroll) <= delta) return;
    if ((nowScroll > lastScrollTop) && (lastScrollTop > 0)) {

      $(".mb_menu").removeClass("menu_show");
      $(".nav_header").addClass('nav_down_color');
      $(".navbar-inverse .navbar-nav > li > a").addClass('nav_text_color');
      $('.header-logo').attr('src','assets/img/Logo/ivory_mint.png');

      //앱 햄버거 메뉴
      $('.icon-bar').addClass('app_menu_color');
    } else {
      if(nowScroll < 40) {
        /* 컨텍트는 해더 색상 똑같아서 미처리 시킴*/
        if(location.href.indexOf("/contact.html") == -1){
          $(".nav_header").removeClass('nav_down_color');
          $(".navbar-inverse .navbar-nav > li > a").removeClass('nav_text_color');
          $('.header-logo').attr('src', 'assets/img/Logo/ivory.png');
        }
      }
      if (nowScroll > headHeight) {
      //앱 햄버거 메뉴
       $('.icon-bar').removeClass('app_menu_color');
      }
    }
    lastScrollTop = nowScroll;
})
