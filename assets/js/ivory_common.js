// 20190927 lch add 메인 탑배너 슬라이드 동작 함수
function startBnrSlide() {
  $('#carousel-visual').carousel('cycle');
}

// 20190927 lch add 메인 탑배너 슬라이드 동작 함수
function stopBnrSlide() {
  $('#carousel-visual').carousel('pause');
}

// 현재 페이지를 Pop 하고, 이전 화면에 다른 페이지를 로드합니다.
function echossDismissPage(prevPageUrl, bUsePlatformFunction) {
  echossLog("echoss : " + prevPageUrl);
  if (location.href.indexOf("index.html") >= 0) {
    return;
  }

  var url = "echoss://dismissPage?";
  if (prevPageUrl !== undefined && bUsePlatformFunction !== undefined) {
    url += prevPageUrl + "&" + bUsePlatformFunction;
  }
  location.href = url;
}

function echossExitApp() {
  location.href = "echoss://exit";
}

// 액티비티를 Push 하면서 새로운 페이지를 로드합니다.
// 데이터와 애니메이션 타입도 함께 전달합니다.
function echossShowPage(urlData, params, anim, bUsePlatformFunction) {

  // echossLog("location : " + location);
  //echossLog("urlData : " + urlData);
  if (location.href.indexOf(urlData) >= 0) {
    if (location.href.indexOf("innerPageUrl") >= 0)
      location.href = "echoss://showPage?" + urlData + "&" + params + "&" + anim + "&" + bUsePlatformFunction;
    else if (location.href.indexOf('index.html') >= 0)
      location.href = "echoss://showPage?" + urlData + "&" + params + "&" + anim + "&" + bUsePlatformFunction;
    return;
  }
  stopBnrSlide();
  location.href = "echoss://showPage?" + urlData + "&" + params + "&" + anim + "&" + bUsePlatformFunction;
}

function echossExternalShowPage(urlData, params, anim, bUsePlatformFunction) {

  if (location.href.indexOf(urlData) >= 0) {
    if (location.href.indexOf("innerPageUrl") >= 0)
      location.href = "echoss://showPage?" + urlData + "&" + params + "&" + anim + "&" + bUsePlatformFunction;

    return;
  }
  stopBnrSlide();
  location.href = "echoss://externalshowpage?" + urlData;
}

// 이전 페이지로 되돌아올경우 호출됩니다.
//각 html에서 override 하므로 비어있습니다.
function onResetPage() {

}

// 외부 브라우저를 로드합니다.
function echossShowOuterBrowser(url) {
  stopBnrSlide();
  location.href = "echoss://showOuterBrowser?" + url;
}

// 네이티브로부터 전달받을 데이터를 요청합니다.
function echossGetparams(callback) {
  location.href = "echoss://getparams?" + callback;
}

// 현재 클라이언트의 GPS 상태를 요청합니다.
function echossGpsState(callback) {
  location.href = "echoss://getGpsState?" + callback;
}

// GPS 상태를 위한 설정메뉴로 이동합니다.
function echossGoToGspSetting() {
  location.href = "echoss://goToGpsSetting";
}

// GPS 상태를 위한 설정메뉴로 이동합니다.
function testtest() {
  location.href = "echoss://goToGpsSetting";
}

// 네이티브와 웹이 서로 유기적으로 통신하기위해 초기화를 진행합니다.
function echossInitJavaScriptContext() {
  location.href = "echoss://initJSContext";
}

// 로그인 중복 방지를 위해 체크 시작
function overLapCheck() {
  location.href = "echoss://overLapCheck";
}

// 게임 앱을 실행합니다. added 20170401 lch
function echossRunGameApp() {
  location.href = "echoss://rungameapp";
}

// 게임 앱을 다운로드 합니다. added 20170510 lch
function echossDownGameApp() {
  location.href = "echoss://downloadappneo";
}
/******************************************************
 * 						Hybrid
 ******************************************************/
var bAndroidDevice = null;

function isAndroidDevice() {
  if (bAndroidDevice === null) {
    var ua = "" + navigator.userAgent;
    if (ua.toUpperCase().indexOf('IPHONE') != -1 || ua.toUpperCase().indexOf('IPAD') != -1) {
      bAndroidDevice = false;
    } else {
      bAndroidDevice = true;
    }
  }
  return bAndroidDevice;
}

//데이터 파일에서 읽어오기
function echossLoadData(keyStr) {
  var value = "";

  return value;
}

//데이터 파일에서 저장하기
function echossSaveData(keyStr, valueStr) {

  if (isAndroidDevice()) {
    window.Android.echossSaveData(keyStr, valueStr);
  } else {
    echossHybrid.echossSaveDataWithValue(keyStr, valueStr);
  }
}

//데이터 메모리에서 읽어오기 (앱 종료시 삭제)
function echossGetData(keyStr) {
  var value = null;
  if (isAndroidDevice()) {
    value = window.Android.echossGetData(keyStr);
  } else {
    value = echossHybrid.echossGetData(keyStr);
  }
  return value;
}

//데이터 메모리에 저장하기
function echossPutData(keyStr, valueStr) {
  if (isAndroidDevice()) {
    window.Android.echossPutData(keyStr, valueStr);
  } else {
    echossHybrid.echossPutDataWithValue(keyStr, valueStr);
  }
}

// HTML 상에서의 로그를 네이티브에서 찍어볼 수 있도록 합니다.
function echossLog(message) {

    if (isAndroidDevice()) {
        console.log(message);
    } else {
        console.log("LOG : " + message);
    }
}

function echossOpenLinkExternally(url) {

  url = changeDomain(url);
  echossLog(url);
  stopBnrSlide();
  // 20190918 아이앤나 로컬서버형식이면 uri + 고객아이디를 같이 전달한다
  // 20200522 lch iandna.biz 도메인도 추가함.
  if (url.indexOf("m.i-vory.com/event/") > 0) {
    if (url.indexOf("?") < 0) {
      url = url + '?custId=' + getMemId();
    }
  } else if (url.indexOf("iandna.biz") > 0) {
    if (url.indexOf("?") < 0) {
      url = url + '?custId=' + getMemId();
    }
  }


  url = encodeURI(url);
  if (isAndroidDevice()) {
    window.Android.echossOpenLinkExternally(url);
  } else {
    echossHybrid.echossOpenLinkExternally(url);
  }
}

function openLinkExternally(url) {

  url = encodeURI(url);
  if (isAndroidDevice()) {
    window.Android.openLinkExternally(url);
  } else {
    echossHybrid.openLinkExternally(url);
  }
}

// 로딩을 애니메이션을 작동합니다.
function echossShowLoading() {
  if (isAndroidDevice()) {
    window.Android.showLoading();
  } else {
    echossHybrid.showLoading();
  }
}

// 로딩을 애니메이션을 작동합니다. (타이머)
function echossShowLoadingTimer() {
  if (isAndroidDevice()) {
    // window.Android.showLoadingTImer();
  } else {
    echossHybrid.showLoadingTimer();
  }
}

// 로딩을 애니메이션을 중지합니다.
function echossHideLoading() {
  if (isAndroidDevice()) {
    window.Android.hideLoading();
  } else {
    echossHybrid.hideLoading();
  }
}

//RTSP 영상재생
function echossShowRtspVideo(uri) {
  if (isAndroidDevice()) {
    window.Android.echossShowRtspVideo(uri);
  } else {
    //        echossHybrid.echossPutDataWithValue(keyStr, valueStr);
  }
}

// 영상재생을 위해 새로운 뷰를 생성
function echossVideoView(jsonResult, babyInfo, adInfo) {
  if (isAndroidDevice()) {
    window.Android.echossVideoView(jsonResult, babyInfo, adInfo);
  } else {
    echossHybrid.echossVideoViewWithBaby(jsonResult, babyInfo, adInfo);
  }
}

// 영상재생을 위해 새로운 뷰를 생성
// jhtest 배내짤보기
function echossBeNeJJalView() {
  if (isAndroidDevice()) {
    window.Android.echossBeNeJJalView();
  } else {
    // echossHybrid.echossBeNeJJalViewWithBaby();
  }
}

// 전화 연결을 위해 네이티브 호출
function callCallCenter(telNo) {
  if (isAndroidDevice()) {
    window.Android.callCallCenter(telNo);
  } else {
    echossHybrid.callCallCenter(telNo);
  }
}

// 전화 연결을 위해 네이티브 호출
function sendSms(msg) {
  if (isAndroidDevice()) {
    window.Android.sendSms(msg);
  } else {
    echossHybrid.sendSms(msg);
  }
}

// 셋팅체크를 위해 네이티브
function checkAppSetting() {
  var check = null;
  if (isAndroidDevice()) {
    check = window.Android.checkAppSetting();
  } else {
    check = echossHybrid.checkAppSetting();
  }
  return check;
}

// 셋팅이동을 위해 네이티브
function gotoAppSetting() {
  if (isAndroidDevice()) {
    window.Android.gotoAppSetting();
  } else {
    echossHybrid.gotoAppSetting();
  }
}


/******************************************************
 * 				COMMON FUNCTION
 ******************************************************/
function onPrev() {

  // gate.html 없어짐. 나머지 조건문도 필요없어서 제거 lch 20180604
  if (location.href.indexOf("gate.html") >= 0 || location.href.indexOf("index.html") >= 0 || location.href.indexOf("login_check.html") >= 0 || location.href.indexOf("check_login.html") >= 0) {
    /* if( $('.exit_popup').is(":visible") ) {
         $('.exit_popup').hide();
     }

     else if( $('.push_popup').is(":visible") ) {
         $('.push_popup').hide();
     }
     else {*/
    $('#appExit').modal("toggle");
    //  }

  } else if (location.href.indexOf("class.html") >= 0 || location.href.indexOf("care.html") >= 0 || location.href.indexOf("event_detail.html") >= 0 || location.href.indexOf("care_detail.html") >= 0) {
    if ($('#selRegionModal').is(":visible")) { // 지역선택 modal
      $('#selRegionModal').modal("toggle");
    } else if ($('#ellipsisModal').is(":visible")) { // 이벤트 댓글 더보기 modal
      $('#ellipsisModal').modal("toggle");
    } else if ($('#editModal').is(":visible")) { // 이벤트 댓글 수정 modal
      $('#editModal').modal("toggle");
    } else if ($('#delModal').is(":visible")) { // 이벤트 댓글 삭제 modal
      $('#delModal').modal("toggle");
    } else if ($('#selPriceModal').is(":visible")) { // 이벤트 댓글 삭제 modal
      $('#selPriceModal').modal("toggle");
    } else if ($('#editInfoModal').is(":visible")) { // 이벤트 댓글 삭제 modal
      $('#editInfoModal').modal("toggle");
    } else {
      echossDismissPage();
    }

  } else {
    echossDismissPage();
  }
}

function executeAfterAnimationEnded(beforeStampingTimestamp, executeFunc) {
  var afterStampTimestamp = Date.now();
  var interval = afterStampTimestamp - beforeStampingTimestamp > 2000 ? 0 :
    2000 - afterStampTimestamp + beforeStampingTimestamp;
  setTimeout(executeFunc, interval);
}

function checkMaxLength(object, maxLength) {
  if (object.value.length > maxLength) {
    object.value = object.value.slice(0, maxLength);
  }
}

// add 20180913 by lch
function getQueryStringObject() {

  var a = window.location.search.substr(1).split('&');
  if (a == "") return {};
  var b = {};
  console.log("firstin : " + a);
  for (var i = 0; i < a.length; ++i) {

    var results = a[i].match(/=/g);
    var splitLength = 0;
    if (results != null) {
      splitLength = results.length + 1;
    } else
      splitLength = 2;
    console.log("results.length  : " + splitLength);
    var p = a[i].split('=', splitLength);
    console.log("in : " + p);
    if (p.length == 1)
      b[p[0]] = "";
    else {
      if (splitLength <= 2)
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      else if (splitLength > 2) {
        console.log("> 3 : ");
        var str = "";
        for (var j = 0; j < splitLength; j++) {
          if (p[j + 1] != undefined) {
            if (j % 2 == 0) {
              str += p[j + 1] + "=";
            } else {
              str += p[j + 1] + "&";
            }
          }
        }
        b[p[0]] = decodeURIComponent(str.replace(/\+/g, " "));
      }
    }
    console.log("out : " + b[p[0]]);
  }
  return b;
}

// add 20190308 lch
function riseViewCnt(pageName) {

  NY.AP1100({
    pageNm: pageName
  }, function(result) {
    echossLog("result : " + JSON.stringify(result));
  }, function(errorCode, errorMessage) {
    echossLog("error : " + errorMessage);
  });
}

// add 20190805 ljh
function riseIvoryViewCnt(frcsCustNo, pageName) {

  NY.AP1101({
    frcsCustNo: frcsCustNo,
    pageNm: pageName
  }, function(result) {
    echossLog("result : " + JSON.stringify(result));
  }, function(errorCode, errorMessage) {
    echossLog("error : " + errorMessage);
  });
}

function getMarketAddr() {

  var downloadLink = '';
  if (isAndroidDevice()) {
    downloadLink = 'https://play.google.com/store/apps/details?id=com.namyang.bebe';
  } else {
    downloadLink = 'https://itunes.apple.com/kr/app/id1113295590';
  }
  return downloadLink;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
}

function numberWithCommas2(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getDomain() {
  var verCode = echossLoadData("appVersionCode");
  console.log("verCode : " + verCode);

  var domain;
  // verCode 86 이하는 네이티브에 쇼핑몰 도메인이 m.iandna77.cafe24로 되어있음.
  // verCode 86 부터는 도메인 m.i-vory.shop 으로 변경함.
  if (verCode < 86)
      domain = 'http://m.iandna77.cafe24.com';
    else
      domain = 'https://m.i-vory.shop';
  // alert('획득도메인 :' + domain);
  return domain;
}

function changeDomain(str) {
  var oldStr = str;
  console.log("before : " + str);
  // alert(str);
  var verCode = echossLoadData("appVersionCode");

  // 도메인 통일을 위해 버전 85부터는 ianda77.cafe24.com -> m.i-vory.shop 변경해줌
  if ( verCode > 85)
    str = replaceAll(str, "http://m.iandna77.cafe24.com", "https://m.i-vory.shop");

  // alert('old :' + oldStr + "\n new : " +  str );
  console.log("after : " + str);
  return str;
}

function changeDomainJson(str) {
  console.log("before : " + str);
  // alert(str);
  var verCode = echossLoadData("appVersionCode");

  // 안드로이의 경우 - 안드로이드 현재 base Domain = https://m.i-vory.shop
  // 도메인 통일을 위해 ianda77.cafe24.com -> m.i-vory.shop 변경해줌
  if (isAndroidDevice() && verCode > 85) {
    str = replaceAll(str, "http://m.iandna77.cafe24.com", "https://m.i-vory.shop");
  }

  // 아이폰일 경우 - 아이폰 현재 base Domain = ianda77.cafe24.com
  // 도메인 통일을 위해 m.i-vory.shop -> ianda77.cafe24.com 변경해줌
  if (!isAndroidDevice() && url.indexOf("https://m.i-vory.shop") >= 0) {
    str = replaceAll(str, "https://m.i-vory.shop", "http://m.iandna77.cafe24.com");
  }
  // alert(str);
  console.log("after : " + str);
  return JSON.parse(str);
}

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}


/******************************************************
 * 				COMMON UTIL
 ******************************************************/
var Base64 = {

  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }

    return output;
  },

  // public method for decoding
  decode: function(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = Base64._utf8_decode(output);
    return output;
  },

  // private method for UTF-8 encoding
  _utf8_encode: function(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode: function(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while (i < utftext.length) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}
