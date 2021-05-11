/*$(document).swipe({
  swipe: function(event, direction, distance, duration, fingerCount) {
    if (direction == 'right' && distance > 150) {
      pageBack();
    }
  },
  click: function(event, target) {
    $(target).click();
  },

  threshold: 100,
  allowPageScroll: "vertical",
  excludedElements: "label, button, input, select, textarea, li, .noSwipe, .noSwipeBtn"
});*/

/*
since  : 2020-10-15
func   : 버튼하나 확인창 닫기
*/
function msgAlert(msg) {
  $('.popupin').remove();
  $("html, body").css({overflow: 'hidden'}).bind('touchmove');

  var alertOneBtn = '';
  alertOneBtn += '<div class="popupin popup_bg p_alert1"></div>';
  alertOneBtn += '<article class="popupin popup_element p_alert1" >';
  alertOneBtn += '  <p class="message" id="p_message"></p>';
  alertOneBtn += '  <button class="close_btn p_close_btn">확인</button>';
  alertOneBtn += '</article>';

  $('body').append(alertOneBtn);
  $('.p_close_btn').click(function (e) {
    $('body').unbind("touchmove");
    $("html, body").css({'overflow': 'visible'}).unbind('touchmove');
    $('.p_alert1').fadeOut(100);
    $('.popupin').remove();
  });

  $('#p_message').text(msg);
  $('.p_alert1').fadeIn(300);
}

/*
since  : 2020-10-15
func   : 버튼하나 확인창 콜백
des    : 버튼 하나 알럿창 확인 클릭시 콜백메소드
*/
function msgAlertCallback(msg, callback) {
  $('.popupin').remove();
  $("html, body").css({overflow: 'hidden'}).bind('touchmove');

  var alertOneBtn = '';
  alertOneBtn += '<div class="popupin popup_bg p_alert1"></div>';
  alertOneBtn += '<article class="popupin popup_element p_alert1" >';
  alertOneBtn += '  <p class="message" id="p_message"></p>';
  alertOneBtn += '  <button class="close_btn p_close_btn">확인</button>';
  alertOneBtn += '</article>';

  $('body').append(alertOneBtn);
  $('.p_close_btn').click(function (e) {
    $('body').unbind("touchmove");
    $("html, body").css({'overflow': 'visible'}).unbind('touchmove');
    $('.p_alert1').fadeOut(100);
    $('.popupin').remove();
    callback();
  });

  $('#p_message').text(msg);
  $('.p_alert1').fadeIn(300);
}

/*
since  : 2020-10-15
func   : 버튼두개 확인창 콜백
des    : 버튼 두개 알럿창 확인 클릭시 콜백메소드
                         취소 클릭시 창 닫기
*/
function msgAlertConfirm(msg, callback, btnClose, btnCallback) {
  btnClose = btnClose == undefined ? '취소' : btnClose;
  btnCallback = btnCallback == undefined ? '확인' : btnCallback;

  $('.popupin').remove();
  $("html, body").css({overflow: 'hidden'}).bind('touchmove');

  var alertTwoBtn = '';
  alertTwoBtn += '<div class=" popupin popup_bg p_alert2"></div>';
  alertTwoBtn += '<article class="exitapp popupin popup_element p_alert2">';
  alertTwoBtn += '  <p class="message" id="p_message">' + msg + '</p>';
  alertTwoBtn += '  <p class="function_panel">';
  alertTwoBtn += '    <button class="cancle p_close_btn">' + btnClose + '</button>';
  alertTwoBtn += '    <button class="confirm" id="p_confirm_btn">' + btnCallback + '</button>';
  alertTwoBtn += '  </p>';
  alertTwoBtn += '</article>';

  $('body').append(alertTwoBtn);

  // $('#p_message').text(msg);
  $('.p_alert2').fadeIn(300);

  $('.p_close_btn').click(function (e) {
    $('body').unbind("touchmove");
    $("html, body").css({'overflow': 'visible'}).unbind('touchmove');
    $('.p_alert2').fadeOut(100);
    $('.popupin').remove();
  });

  $('#p_confirm_btn').click(function (e) {
    $('body').unbind("touchmove");
    $("html, body").css({'overflow': 'visible'}).unbind('touchmove');
    $('.popupin').remove();
    callback();
  });
}

function alertChoiceLogin(callLogout, callLogin) {
  $('.popupin').remove();
  $("html, body").css({overflow: 'hidden'}).bind('touchmove');

  var alertChoiceLogin = '';
  alertChoiceLogin += '<div class="popupin popup_bg p_choice_login"></div>';
  alertChoiceLogin += '<article class="popupin popup_element p_choice_login">';
  alertChoiceLogin += '  <p class="message">이미 다른기기에 로그인되어있습니다.</br>현재 기기에서 로그인 하시겠습니까?</p>';
  alertChoiceLogin += '  <p class="function_panel">';
  alertChoiceLogin += '    <button class="cancle p_close_btn">닫기</button>';
  alertChoiceLogin += '    <button class="confirm" id="p_confirm_btn">로그인하기</button>';
  alertChoiceLogin += '  </p>';
  alertChoiceLogin += '</article>';

  $('body').append(alertChoiceLogin);
  $('.p_choice_login').fadeIn(300);

  $('.p_close_btn').click(function (e) {
    $('body').unbind("touchmove");
    $("html, body").css({'overflow': 'visible'}).unbind('touchmove');
    $('.p_choice_login').fadeOut(100);
    $('.popupin').remove();
    callLogout();
  });

  $('#p_confirm_btn').click(function (e) {
    $('body').unbind("touchmove");
    $("html, body").css({'overflow': 'visible'}).unbind('touchmove');
    $('.popupin').remove();
    callLogin();
  });
}

function showLoading() {
  var loading = "";
  $('body').bind('touchmove', function (e) {
    e.preventDefault()
  });

  loading += '<div class="loading_wrap">';
  loading += '     <img class="loading-circle" src="/resources/assets/img/all/loading-circle.png" alt="Loading..."/>';
  loading += '     <img class="loading_point" src="/resources/assets/img/all/loading_point.png" alt="Loading..."/>';
  loading += '</div>';
  $('body').append(loading);
  /* 터치막으면 스크롤이 top 0으로 가는 버그 떄문에 주석 */
  //$("html, body").css({overflow: 'hidden'}).bind('touchmove'); //브라우져에 터치를 막아 스크롤
  var timer = setInterval(function () {
    hideLoading();
    clearInterval(timer);
  }, 3500);
}

function showLoadingInfinity(strArray) {
  var loading = "";
  $('body').bind('touchmove', function (e) {
    e.preventDefault()
  });

  loading += '<div class="loading_wrap">';
  loading += '     <img class="loading-circle" src="/resources/assets/img/all/loading-circle.png" alt="Loading..."/>';
  loading += '     <img class="loading_point" src="/resources/assets/img/all/loading_point.png" alt="Loading..."/>';
  loading += '     <p class="loading_wait_text MG030 " id="change_text">이미지 업로드 중입니다..</p>';
  loading += '</div>';
  $('body').append(loading);
  var index = 0;
  var timer = setInterval(function () {
    try{
    $('#change_text').text(strArray[index]);
    index ++;
    }catch (e) {

    }
  }, 600);

  return timer;
}

function showLoadingInterval(time) {
  var loading = "";
  $('body').bind('touchmove', function (e) {
    e.preventDefault()
  });

  loading += '<div class="loading_wrap">';
  loading += '     <img class="loading-circle" src="/resources/assets/img/all/loading-circle.png" alt="Loading..."/>';
  loading += '     <img class="loading_point" src="/resources/assets/img/all/loading_point.png" alt="Loading..."/>';
  loading += '</div>';
  $('body').append(loading);
  $("html, body").css({overflow: 'hidden'}).bind('touchmove'); //브라우져에 터치를 막아 스크롤
  var timer = setInterval(function () {
    hideLoading();
    clearInterval(timer);
  }, time);
}
/*
	since  : 2020-11-20 오후 1:22
	func   : 로딩 프로그레스 삭제
	des    : 최소지연시간 0.6 초
*/
function hideLoading() {

  setTimeout(function(){
    $('.loading_wrap').remove();
    $('body').unbind("touchmove");
    $("html, body").css({'overflow': 'visible'}).unbind('touchmove');
  }, 600)
}

function showShareModal(link, title, des, imgUrl) {
  var shareHtml = '';

  shareHtml += '<div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
  shareHtml += '  <div class="modal-dialog" role="document">';
  shareHtml += '    <div class="modal-close" id="btn_close"></div>';
  shareHtml += '    <div class="modal-content-share">';
  shareHtml += '    <h4 class="descript">공유로 함께해요</h4>';
  shareHtml += '      <div class="container">';
  shareHtml += '        <div class="item" id="btn_kako">';
  shareHtml += '          <div class="tab">';
  shareHtml += '            <img src="/resources/assets/img/all/icon_kakao.png" />';
  shareHtml += '          </div>';
  shareHtml += '        </div>';
  shareHtml += '        <div class="item" id="btn_sms">';
  shareHtml += '          <div class="tab">';
  shareHtml += '            <img src="/resources/assets/img/all/icon_sms.png" />';
  shareHtml += '          </div>';
  shareHtml += '        </div>';
  shareHtml += '        <div class="item" id="btn_link">';
  shareHtml += '          <div class="tab">';
  shareHtml += '            <img src="/resources/assets/img/all/icon_link.png" />';
  shareHtml += '          </div>';
  shareHtml += '        </div>';
  shareHtml += '      </div>';
  shareHtml += '    </div>';
  shareHtml += '  </div>';
  shareHtml += ' </div>';

  $('body').append(shareHtml);
  $('#shareModal').modal('show');

  $('#btn_close').click(function (e) {
    $('#shareModal').modal('hide');
  });

  $('#btn_kako').click(function (e) {
    /* 카카오톡 공유하기를 위한 초기화 WEB SDK CODE*/
    try{
    Kakao.init('1e36a67256dabc9103fc9f3137f14f6d');
    }catch (e) {
    }
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: des,
        imageUrl: imgUrl,
        link: {
          mobileWebUrl: link,
          webUrl: link
        }
      },
      buttons: [
        {
          title: '안드로이드 다운받기',
          link: {
            mobileWebUrl: 'https://play.google.com/store/apps/details?id=com.namyang.bebe',
            webUrl: 'https://play.google.com/store/apps/details?id=com.namyang.bebe'
          }
        },
        {
          title: '아이폰 다운받기',
          link: {
            mobileWebUrl: 'https://itunes.apple.com/kr/app/id1113295590',
            webUrl: 'https://itunes.apple.com/kr/app/id1113295590'
          }
        }
      ]
    });
    $('#shareModal').modal('hide');
  });

  $('#btn_sms').click(function (e) {
    $('#shareModal').modal('hide');
    ivorySendSms(title + '\n' + link);
  });

  $('#btn_link').click(function (e) {
    $('#shareModal').modal('hide');

    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = link;
    temp.select();
    temp.setSelectionRange(0, 9999);

    document.execCommand('copy');
    document.body.removeChild(temp);
    msgAlert('공유 링크가 클립보드에 복사되었습니다.');
  });
}

// text 공백 체크
function checkSpace(str) {
  if (str.search(/\s/) != -1) {
    return false;
  } else {
    return true;
  }
}

// text 특수 문자 체크
function checkSpecial(str) {
  var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
  if (special_pattern.test(str) == true) {
    return false;
  } else {
    return true;
  }
}
