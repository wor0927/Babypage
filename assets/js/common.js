window.onpageshow =  function(event) {
    //back 이벤트 일 경우
    if ( event.persisted) {
        if ( document.documentElement.scrollTop > 0 ) {
            $('.nav_header ').addClass('nav_up_white');
            $('.nav_header ').removeClass('nav_down_white');
        }
    }
};


var SVR_URL = 'https://iandna.biz';

/*
	since  : 2020-09-18 오후 3:43
	func   : 페이지 뒤로가기
	des    : 모든 (1)웹페이지와 (2)안드로이드 뒤로가기에서 사용되는 공통함수
	         (1) - 뒤로가기 금지목록 생성되어있음 (프로세스에 제한이 생길여자가 있는 페이지들)
	         (2) - 안드로이드 네이티브 backPress에서도 사용 됨
	             - 뒤로가기 금지목록 포함되어있음 (프로세스에 제한이 생길여자가 있는 페이지들)
	             - 모달이 생성된 경우 모달을 dismiss 시켜줌
	             - 모달 dismiss 생성 금지 목록 있음
	             - 모달이 여러개 노출되어있는 경우 상위 모달부터 하나씩 dismiss
*/

function pageBack() {

  /* 뒤로 가기 금지 페이지 목록 확인*/
  if (isBlockList())
    return;

  /*
   modal 이 2개 이상일 경우 최상위 모달부터 1개씩 dissmiss 시킵니다. ( pageBack 한 번당 modal 1개)
   최상위 모달이란 dom 순서상 마지막에 선언한 modal을 최상위 모달로 인식합니다.
  */
  if ($('.modal').hasClass('in')) {
    $($(".modal").get().reverse()).each(function () {
      if ($(this).hasClass('in')) {
        $(this).modal('hide');
        return false;
      }
    });
  } else if ($('.daum_addr').hasClass('in')) {
    /* 주소검색시 페이지 뒤로 가기 막기 */
    $('.daum_addr').addClass('hide');
    $('.daum_addr').removeClass('in');
    return false;
  } else {

    //if(checkConfirmPage())
    //  return ;

    /* 뒤로가기 가능하다면 */
    if (document.referrer) {
      /* 인스타그램 연동시 리다이렉트된 url 떄문에 dismiss 로 페이지 삭제 처리 */
      if (location.href.indexOf('customers/snsLinkView.do') > 0) {
          ivoryDismissPage();
      } else
        if (location.href.indexOf('application/30/leave.html') > 0) {
        ivoryDismissPage();
        return;
      } else if (location.href.indexOf('application/30/change_pw.html') > 0) {
        ivoryDismissPage();
        return;
      }
      /* page reload case goback 2step */
/*      var referrer = document.referrer;
      var nowHref = location.href;
      if(referrer === nowHref){
        histroy.go(-2);
        return;
      }*/
      /* 리로드 된 케이스 */
      if(document.referrer == location.href){
        console.log('뒤로가기 가능함1');
        history.back(-2);
      }else{
        console.log('뒤로가기 가능함2');
        history.back();
      }

    } else {
      console.log('뒤로가기 가능함3');
      ivoryDismissPage();
    }
  }
}


/*
	since  : 2020-11-18 오후 12:22
	func   : custom comfirm Alert
	des    : 확인 시 callback 동작 , 취소시 dismiss
*/
function checkConfirmPage(){
  var nowHref = location.href;
  if (location.nowHref.indexOf('review/productModView.do') > 0) {
    msgAlertConfirm('저장되지 않은 리뷰가 있습니다. 뒤로 이동하시겠습니까?', function(){
      if (document.referrer) {
        history.back();
      } else {
        ivoryDismissPage();
      }
    });
    return true;
  }
  return false;

}
/*
	since  : 2020-09-28 오전 11:28
	func   : 뒤로가기 금지 목록 체크
	des    : gate(로그인/회원가입 화면), joinComplete(회원가입 완료 화면), index(앱 초기화면)
	return : true :뒤로 가기 금지 목록, false : 뒤로가기 금지목록 아님
*/
function isBlockList(url) {
  /* type cafe24 */
  if (location.href.indexOf('join_result.html') > 0)
    return true;

  /* type ivory server */
  if (location.href.indexOf('customers/addProfile.do') > 0)
    return true;
  else if (location.href.indexOf('customers/gate.do') > 0) {
    onExit();
    return true;
  } else if (location.href.indexOf('https://iandna.biz') > 0) {
    onExit();
    return true;
  } else if (location.href.indexOf('index.do') > 0) {
    onExit();
    return true;
  }
  return false;
}

/*
	since  : 2020-11-09 오후 12:55
	func   : 내비게이션 엑티브 효과
*/
function activeNagivation(url, type) {
  resetNavigationMenu();

  if (url.indexOf('index.do') > 0) {
    $('.icon_home').attr('src', '/resources/assets/img/all/icon_home_active.png');
  } else if (url.indexOf('listView.do?pcc_tab=1') > 0) {
    $('.icon_pcc').attr('src', '/resources/assets/img/all/icon_pcc_active.png');
  } else if (url.indexOf('review/listView.do') > 0) {
    $('.icon_review').attr('src', '/resources/assets/img/all/icon_review_active.png');
  } else if (url.indexOf('m.i-vory.shop') > 0) {
    $('.icon_mall').attr('src', '/resources/assets/img/all/icon_mall_active.png');
  } else if (url.indexOf('customers/mypage.do') > 0) {
    $('.icon_mypage').attr('src', '/resources/assets/img/all/icon_mypage_active.png');
  }

  movePage(url, type);
    setTimeout(function () {
      resetNavigationMenu();
    }, 800);

}

function resetNavigationMenu() {
  try {
    $('.icon_home').attr('src', '/resources/assets/img/all/icon_home.png')
    $('.icon_review').attr('src', '/resources/assets/img/all/icon_review.png')
    $('.icon_mall').attr('src', '/resources/assets/img/all/icon_mall.png')
    $('.icon_pcc').attr('src', '/resources/assets/img/all/icon_pcc.png')
    $('.icon_mypage').attr('src', '/resources/assets/img/all/icon_mypage.png')
  } catch (e) {
    console.log(e);
  }
}

/*
	since  : 2020-10-19 오후 6:00
	func   : 페이지 이동 함수
	des    : 앱에서 3가지 타입으로 페이지를 이동, 웹접속의 무조건 location.href 로 이동
	param  : url : 이동할 주소,
	         type=0       : 새로운 탭(웹뷰)를 생성하면서 페이지 이동
	         type=1       : 새로운 화면을 생성하면서 페이지 이동
	         type=default : location.href load하면서 이동
*/
function movePage(url, type) {
  console.log(url);
  // 2020-12-09 url 디코드 추가
  url = decodeURI(url);

  if (window.location.href.indexOf(url) > 0){

    if(url.indexOf('/review/listView.do')  < 0 ){
      return;
    }
  }


  /* 웹동작일 경우 기본 하이퍼링크 속석으로 변경 함*/
  if (!isAppRunning())
    type = 9;

  /* 아이폰은 이동 기본값을 newTab이 아닌 location으로 한다. 단 회원가입 페이지는 예외로한다. */
  if(!isAndroidDevice()){
    type = 9;
    /* 아이폰 쇼핑몰 관련 페이지와, sns 연동페이지는 팝업으로 처리함. */
    /* 로그인 회원가입등 메인페이지 이전화면은 제외 함 */
    if (url.indexOf('m.i-vory.shop') > 0) {
      var nextUrl = url;
      if (nextUrl.indexOf('login.html') > 0 || nextUrl.indexOf('agreement.html') > 0) {

      }else{
        type = 1;
      }
    }else if (url.indexOf('www.instagram.com/') > 0) {
      type = 1;
      //url = 'https://iandna.biz' + url;
    }
    /* 아이폰에 NEWPAGE 아직 미구현
      if (url.indexOf('application/30/agreement.html') > 0) {
        type = 0;
      }

      else if (url.indexOf('snsLinkView.do') > 0) {
        type = 0;
      }*/
  }
  switch (type) {
    case 0:
      if (url.indexOf('m.i-vory.shop') > 0) {
        url = url;
      } else if (url.indexOf('http') > 0) {
        /* 불특정 다수의 홈페이지들 */
        url = url;
      } else {

        if(url.indexOf('https://iandna.biz') > 0){
          url = url;
        }else{
          /* 새로운 페이지 생성 시 아이보리서버 uri는 도메인 추가 삽입*/
          url = 'https://iandna.biz' + url;
        }
      }
      ivoryNewTab(url, true);
      break;

    case 1:
      ivoryOpenLinkExternally(url);
      break;

    default:
      location.href = url;
      break
  }
}


/*
	since  : 2020-10-19 오후 6:00
	func   : 새로운 창을 생성 하면서 페이지를 오픈
	param  : headerTyp  : 페이지 헤더영역 노춣 여부 (X 버튼 + 페이지 주소) show or hide
	         naviType   : 페이지 하단영역 노출 여부 (뒤로, 앞으로 가기)    show or hide
	         screenType : 풀스크린
*/
function movePageNewTab(url, headerType, naviType, screenType) {
  console.log(url);
  url = decodeURI(url);

  /* 웹동작일 경우 기본 하이퍼링크 속석으로 변경 함*/
  if (isAppRunning()){
    ivoryOpenLinkExternally(url, headerType, naviType, screenType);
  }else{
    location.href = url;
  }


}


/*
  since  : 2020-10-16 오후 5:30
  func   : 로그인 토큰, id 네이티브 저장
  des    : 로그인 요청시 strQuery에 loginComplete 포함해서 호출
*/
function saveLoginToken() {
    var id = getCookie('frcsCustNo');
    var login_token = getCookie('login_token');
    // alert('id : ' + id + ' login_token : ' + login_token);
    console.log('id: ' + id);
    console.log('login_token: ' + login_token);

    try{
    if (login_token != null)
      ivorySaveData('login_token', login_token);
    if (id != null)
      ivorySaveData('frcsCustNo', id);
    }catch (e) {
      alert(e);

    }
}

function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookie(cookie_name) {
  // return document.cookie;
  var x, y;
  var val = document.cookie.split(';');

  for (var i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf('='));
    y = val[i].substr(val[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
    if (x == cookie_name) {
      return unescape(y); // unescape로 디코딩 후 값 리턴
    }
  }
}

function onResetPage() {
  console.log('onResetPage : ' + location.href);
}

/*
	since  : 2020-10-19 오후 1:11
	func   : 현재주소 스트링 쿼리값 얻기
	param  : key : 얻고싶은 값의 키
*/
function getQueryString(key) {
  var str = location.href;
  // QueryString의 값을 가져오기 위해서, ? 이후 첫번째 index값을 가져온다.
  var index = str.indexOf("?") + 1;
  // Url에 #이 포함되어 있을 수 있으므로 경우의 수를 나눴다.
  var lastIndex = str.indexOf("#") > -1 ? str.indexOf("#") + 1 : str.length;
  // index 값이 0이라는 것은 QueryString이 없다는 것을 의미하기에 종료
  if (index == 0) {
    return "";
  }
  // str의 값은 a=1&b=first&c=true
  str = str.substring(index, lastIndex);
  // key/value로 이뤄진 쌍을 배열로 나눠서 넣는다.
  str = str.split("&");
  var rst = "";
  for (var i = 0; i < str.length; i++) {

    // key/value로 나눈다.
    // arr[0] = key
    // arr[1] = value
    var arr = str[i].split("=");

    // arr의 length가 2가 아니면 종료
    if (arr.length != 2) {
      break;
    }
    // 매개변수 key과 일치하면 결과값에 셋팅
    if (arr[0] == key) {
      rst = arr[1];
      break;
    }
  }
  return rst;
}


/** Native js interface start **/

/*
	since  : 2020-09-28 오후 7:06
	func   : 네이티브에 데이터 저장
	des    : android key : Android, IOS key : echossHybrid
	param  : keyStr : map에서 사용될 key, valueStr : 맵에 저장할 정보
*/
function ivorySaveData(keyStr, valueStr) {

  console.log(keyStr + " : " + valueStr);
  if (!isAppRunning())
    return;
  try {
    if (isAndroidDevice()) {
      window.Android.echossSaveData(keyStr, valueStr);
    } else {
      var nativeParam = {};
      nativeParam.key = keyStr;
      nativeParam.value = valueStr;
      webkit.messageHandlers.saveData.postMessage(nativeParam);
    }
  } catch (e) {
    console.log('save data error : ' + e);
  }
}

/*
	since  : 2020-09-28 오후 7:06
	func   : 네이티브에 데이터  로드
	des    : android key : Android, IOS key : echossHybrid
	param  : keyStr : map에서 불러올 key
*/
function ivoryLoadData(keyStr) {
  if (!isAppRunning())
    return;

  var value = null;
  if (isAndroidDevice()) {
    value = window.Android.echossLoadData(keyStr);
  } else {
    value = echossHybrid.echossLoadData(keyStr);
  }
  return value;
}

/*
	since  : 2020-10-23 오후 2:53
	func   : 모바일 OS 구분
	des    : 안드로이드 or 아이폰
*/

function isAndroidDevice() {
  var bAndroidDevice = null;
  if (bAndroidDevice === null) {
    var ua = "" + navigator.userAgent;
    if (ua.toUpperCase().indexOf('IPHONE') != -1 || ua.toUpperCase().indexOf('IPAD') != -1 ) {
      bAndroidDevice = false;
    } else {
      bAndroidDevice = true;
    }
  }
  return bAndroidDevice;
}

function isAndroidDevice2() {
  if (bAndroidDevice === null) {
    var ua = "" + navigator.userAgent;
    if (ua.toUpperCase().indexOf('IPHONE') != -1 || ua.toUpperCase().indexOf('IPAD') != -1 || ua.toUpperCase().indexOf('APPLEWEBKIT') != -1) {
      bAndroidDevice = false;
    } else {
      bAndroidDevice = true;
    }
  }
  return bAndroidDevice;
}

/*
	since  : 2020-10-23 오후 3:14
	func   : 네이티브 문자 보내기 앱 실행
*/
function ivorySendSms(msg) {

  if (!isAppRunning())
    return;
  console.log("ivoryNewTap is : " + msg);

  if (isAndroidDevice()) {
    window.Android.sendSms(msg);
  } else {
    location.href = "ivory://sendSMS?" + msg + "";
    // echossHybrid.sendSms(msg);
  }
}

// 전화 연결을 위해 네이티브 호출
function ivoryCall(telNo) {
  if (!isAppRunning()) {
    return;
  }
  console.log("ivoryCall is : " + telNo);

  if (isAndroidDevice()) {
    window.Android.callCallCenter(telNo);
  } else {
    location.href = "ivory://callPhone?" + telNo + "";
    // echossHybrid.callCallCenter(telNo);
  }
}

/*
	since  : 2020-10-19 오후 9:31
	func   : 새로운 탭을(웹뷰) 생성하면서 페이지 로딩
	des    : 네이티브에 jsInterface 호출
	param  : url : 로딩할 페이지 주소
*/
function ivoryNewTab(url) {

  if (!isAppRunning())
    return;

  console.log("ivoryNewTap is : " + url);

  if (isAndroidDevice()) {
    window.Android.newTap(url);
  } else {
    location.href = url;
    //echossHybrid.newTap(url);
    //location.href = "ivory://showPage?" + url + "";
  }
}

/*
	since  : 2020-10-19 오후 9:31
	func   : 새로운 화면(activity, controller)에서 페이지를 로딩
	des    : 네이티브에 jsInterface 호출
	param  : url : 로딩할 페이지 주소
	       : headerType : show or hide,
	       : naviType   : show or hide,
	       : screenType : show or hide,
*/
function ivoryOpenLinkExternally(url, headerType, naviType, screenType) {

  console.log("ivoryOpenLinkExternally is : " + url);

  /* 전체화면 구분 없을 경우 모달 ( 아이폰 전용 )*/
  if(screenType == null || screenType == undefined){
    screenType = 'full'
  }

  /* 헤더 타입 구분 없을 경우 기본값 show */
  if(headerType == null || headerType == undefined){
    headerType = 'show'
  }

  /* 네비게이션 영역 기본값 = 노출*/
  if(naviType == null || headerType == naviType){
    naviType = 'show'
  }


  if (!isAppRunning()){
    location.href = url;
    return;
  }
  url = encodeURI(url);
  if (isAndroidDevice()) {
    window.Android.echossOpenLinkExternally(url, headerType);
  } else {
    var nativeParam = {};
    nativeParam.url = url;
    nativeParam.screenType = screenType; /* modal or full*/
    nativeParam.headerType = headerType; /* hide or show */
    nativeParam.naviType = naviType; /* hide or show */

    webkit.messageHandlers.openLinkExternally.postMessage(nativeParam);
  }
}

/*
	since  : 2020-10-19 오후 9:31
	func   : 새로운 탭을(웹뷰) 삭제함
	des    : 네이티브에 jsInterface 호출
	param  : url : 로딩할 페이지 주소
*/
function ivoryDismissPage() {
  console.log("dismissPage");

  if (!isAppRunning()) {
    /* 웹 환경에선 일반적인 history back 처리*/
    history.back();
    return;
  }

  if (isAndroidDevice()) {
    window.Android.dismissPage();
  } else {
    //echossHybrid.dismissPage();
    location.href = "ivory://dismissPage?";
  }
}

/*
	since  : 2020-10-19 오후 9:31
	func   : 앱종료 요청
*/
function ivoryExit() {
  console.log("dismissPage");

  if (!isAppRunning())
    return;

  if (isAndroidDevice()) {
    window.Android.exitApplication();
  } else {
    location.href = "ivory://exitApp?";
  }
}

/*
	since  : 2020-10-22 오후 4:04
	func   : 아기영상 재생을 위해 새로운 뷰를 생성 ( activity or controller)
	param  : jsonResult : 아기 정보를 제외한 정보들 ( 산후조리원 정보, 산모이름, 배너정보 등등 )
	         babyInfo : 아기 정보들의 집합 , 실시간 스트리밍을 위한 정보
	return :
*/
function ivoryVideoView(jsonResult, babyInfo) {

  if (!isAppRunning()) {
    msgAlert('베베캠은 모바일버전만 지원합니다.');
    return;
  }
  if (isAndroidDevice()) {
    window.Android.echossVideoView(jsonResult, babyInfo);
  } else {
    var nativeParam = {};
    nativeParam.data = jsonResult;
    nativeParam.babyInfo = babyInfo;
    webkit.messageHandlers.videoView.postMessage(nativeParam);
  }
}

/*
	since  : 2020-10-22 오후 4:04
	func   : 모바일 바이브레이션
*/
function ivoryVibrator() {

  if (!isAppRunning()) {
    return;
  }
  if (isAndroidDevice()) {
    window.Android.ivoryVibrator();
  } else {
    location.href = "ivory://vibrate?";
  }
}

/*
	since  : 2020-10-22 오후 4:04
	func   : 외부 브라우저를 통해 인터넷창 열기
*/
function ivoryShowouterbrowser(url) {

  if (!isAppRunning()) {
    location.href = url;
  }

  if (isAndroidDevice()) {
    window.Android.showouterbrowser(url);
  } else {
    location.href = "ivory://showOuterBrowser?" + url + "";
  }
}

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
	since  : 2020-10-19 오후 9:31
	func   : 생성된 모든 웹뷰 페이지를 삭제하고 1개 웹뷰만 남겨둠 ( INDEX.DO 이동시 사용)
*/
function allClearWebview() {
  if (!isAppRunning()) {
    location.href = url;
  }

  if (isAndroidDevice()) {
    // window.Android.showouterbrowser(url);
  } else {
    location.href = "ivory://cleanViews?";
  }
}


/*
since  : 2020-12-23
func   : 안드로이드 외부브라우저 연결
des    : 플레이스토어
*/
function ivoryLinkExternally(url) {

  url = encodeURI(url);
  if (isAndroidDevice()) {
    window.Android.openLinkExternally(url);
  } else {

  }
}


/** Native js interface end **/
