var touchFlag = true;
var duplicateFlag = false;
var frcsCustNo = "";
var tempScroll = 0;
var loadingTimeout = 3400;
var memberId = "";
// right slide menu + bottom tab menu common event + all event
$(window).scroll(function() {

  var scrollTop = $(window).scrollTop();
  tempScroll = scrollTop;

  if (scrollTop < 20) {
    var isOpenNav = $('body').hasClass("nav-expanded");
    if (!isOpenNav) {
      if (!$("#pagetop").hasClass("hide")) {
        $("#pagetop").addClass("hide");
      }
    }
  } else {
    if ($("#pagetop").hasClass("hide")) {
      $("#pagetop").removeClass("hide");
    }
  }
});

(function() {
  /*
    $.fn.topMainSlider = function() {
      return this.each(function() {
        var $this = $(this);
        var $itemList = $this.find('.items');
        var $item = $itemList.find('li');
        var itemLength = $item.size();
        var isLoopable = itemLength > 1;
        var $topBgImg = $('.topBgWrap').find('li');

        var currentIndex;
        var beforeIndex;
        var switcher = function(e) {
          $topBgImg
            .eq(beforeIndex)
            .removeClass('before')
            .end()
            .eq(currentIndex)
            .addClass('before')
            .removeClass('current')
            .end()
            .eq(e.activeIndex % e.loopedSlides)
            .addClass('current');

          beforeIndex = currentIndex;
          currentIndex = e.activeIndex % e.loopedSlides;
        };

        topBannerSlider = new Swiper($this[0], {
          wrapperClass: 'items',
          slideClass: 'item',
          slidesPerView: 'auto',
          loopedSlides: itemLength,
          loop: isLoopable,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          onInit: switcher,
          onSlideChangeStart: switcher
        });
      });
    };

    $.fn.clock = function(opts) {
      opts = $.extend({
        mins: '.mins',
        hrs: '.hrs'
      }, opts);
    };

    $(document).ready(function() {
      //$('.performListWrap').topMainSlider();
      //$('.clock').clock();

      var ticketLankingSlider = new Swiper('.LankingContentsWrapper', {
        wrapperClass: 'LankingContentsList',
        slideClass: 'LankingListWrapper',
        loop: true,
        slidesPerView: 'auto',
        onTouchStart: function () {
            jQuery(".LankingContentsWrapper img").each(function () {
                if (jQuery(this).attr("data-src")) {
                    jQuery(this).attr("src", jQuery(this).attr("data-src"));
                    jQuery(this).removeAttr("data-src");
                }
            });
        }
      });
    });
    */
})();


$(function() {

  var footerwrap = "";
  footerwrap += ' <div class="footer">';
  footerwrap += '				<div class="container">';
  footerwrap += '					<div class="row">';
  footerwrap += ' 						<div class="col-xs-12">';
  footerwrap += '							<ul class="footer-link">';
  footerwrap += '								<li class="btn_terms"><a>????????? ????????????</a></li>';
  footerwrap += '								<li class="btn_privacy"><a>????????????????????????</a></li>';
  footerwrap += '							</ul>';
  footerwrap += '						</div>';
  footerwrap += '						<div class="col-xs-12">';
  footerwrap += '							<ul class="footer-link">';
  footerwrap += '								<li class="btn_media_privacy"><a>???????????????????????? ?????? ??? ?????? ?????? ??????</a></li>';
  footerwrap += '							</ul>';
  footerwrap += '						</div>';
  footerwrap += '					</div>';
  footerwrap += '				</div>';
  footerwrap += '			</div>     ';
  footerwrap += '			<div class="container">';
  footerwrap += '				<div class="row">';
  footerwrap += '					<div class="col-xs-12">';
  footerwrap += '						<div class="footer-copy">????????? ????????? ???????????? 211, ?????????????????? 10???<br/>(???) ???????????? ??? ????????????: ????????? ????????? <br/>????????????????????? 363-81-01044';
  footerwrap += ' <br/>????????????????????? ???????????? 00765???<br/>??????????????????????????? : ????????? ??????<br/><a id="btn_partners_add">?????? ??? ?????? ?????? http://i-vory.com</a><br/>??? I&NA co., ltd. All rights reserved.</div>';
  footerwrap += '					</div>';
  footerwrap += '					<div class="col-xs-12 text-center">';
  // footerwrap +='						<div class="logo-copy"><img src="./assets/img/svg/logo-namyang.svg" alt="??????"/></div>';
  footerwrap += '					</div>';
  footerwrap += '				</div>';
  footerwrap += '			</div>';
  $('#footer_wrap').append(footerwrap);


  $('#nav-expander').on('click', function(e) {
    e.preventDefault();
    var isOpenNav = $('body').hasClass("nav-expanded");
    if (isOpenNav)
      echossSaveData("isOpenNav", "N");

    $('body').toggleClass('nav-expanded');

    echossSaveData("isOpenNav", "Y");
  });

  // $('#btn_home').on('click', function(e) {
  //   echossShowPage('index.html', 'none', 'none', false);
  // });

  $('#pg_setting').on('click', function(e) {
    echossShowPage('setting.html', 'none', 'none', true);
  });

  $('#btn_menu_join').on('click', function(e) {
    echossShowPage(getDomain() + '/member/agreement.html', 'none', 'none', false);
  });

  $('#btn_menu_login').on('click', function(e) {
    echossShowPage(getDomain() + '/member/login.html', 'none', 'none', false);
  });

  $('#btn_menu_logout').on('click', function(e) {
    askLogout();
  });

  $('#pg_login').on('click', function(e) {
    echossShowPage(getDomain() + '/login/login.html', 'none', 'none', false);
  });

  $('#pg_myinfo').on('click', function(e) {
    echossShowPage(getDomain() + '/member/modify.html', 'none', 'none', false);
  });

  $('#pg_myzzim').on('click', function(e) {
    echossShowPage('myzzim.html', 'none', 'none', true);

    // //jhtest ????????????
    // echossShowPage('question.html', 'none', 'none', true);
  });

  $('#btn_join').click(function() {
    // empty
  });

  $('#callcenter1').click(function() {
    callCallCenter("02-6205-1313");
  });

  $('#callcenter2').click(function() {
    callCallCenter("1670-3137");
  });

  $('#authConfirm').click(function() {
    var code = $('#authCode').val();
    NY.AP008({
      frcsCustNo: getMemId(),
      code: code
    }, function(result) {
      echossLog("Result : " + JSON.stringify(result));
      alert(result.resMsg);
      if (result.actFlag == 1) {
        updateNavigationInfo();
      }
      $('#authCode').val("");
      hideLoading();
    }, function(errorCode, errorMessage) {
      echossLog("[" + errorCode + "]" + errorMessage);
      hideLoading();
      uploadErrors("[?????????????????? ????????? ????????????]" + errorCode + ":" + errorMessage, "default:??????????????????:AP008", getMemId(), "2");
    });
  });

  $('#gotoSms').click(function() {
    sendSms('???????????? ????????? ?????? ?????? ????????????! ?????? ???????????? ?????????????????? ?????? ?????? ????????? ???????????????.' + ' ' + getMarketAddr());
  });

  $('#gotoKakao').click(function() {

  });

  $('#gotoCopy').click(function() {
    // authCode
    var downloadLink = "";

    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = getMarketAddr();
    temp.select();
    temp.setSelectionRange(0, 9999);

    document.execCommand('copy');
    document.body.removeChild(temp);
    alert('???????????? ????????? ??????????????? ?????????????????????.');
  });

  $('#pg_mychild_info').on('click', function(e) {
    echossShowPage(getDomain() + '/member/modify_add.html', 'none', 'none', false);
  });

  $('#pg_my_cpn').on('click', function(e) {
    echossSaveData("isOpenNav", "N");
    echossShowPage('my_coupon.html', 'none', 'none', true);
  });

  $('#pg_top_alarm').on('click', function(e) {
    echossSaveData("isNewPush", "N");
    echossShowPage('alarm.html', 'none', 'none', true);
  });

  $('#pg_alarm').on('click', function(e) {
    echossSaveData("isNewPush", "N");
    echossShowPage('alarm.html', 'none', 'none', true);
  });

  // TODO: jhtest ?????????????????????
  $('#pg_bebejjal').on('click', function(e) {
    echossBeNeJJalView();
  });

  $('.pg_about').on('click', function(e) {
    echossShowPage('about.html', 'none', 'none', true);
  });

  $('.pg_index').on('click', function(e) {
    echossShowPage('index.html', 'none', 'none', true);
  });

  $('.pg_school').on('click', function(e) {
    echossSaveData("isNewClass", "N");
    echossShowPage('class.html', 'none', 'none', true);
  });

  $('.pg_care').on('click', function(e) {
    echossSaveData("isNewCare", "N");
    echossShowPage('care.html', 'none', 'none', true);
  });

  $('.pg_bebecam').on('click', function(e) {
    isJoinBebeCam();
  });

  $('.pg_bebemall').on('click', function(e) {
    echossSaveData("isNewMall", "N");
    isHaveLoginSession(
      function() {
        // riseViewCnt('mall');
        riseIvoryViewCnt(getMemId(), 'mall');
        echossOpenLinkExternally(getDomain() + '');
      },
      function() {
        showMessageBox2("???????????? ??????", "???????????? ???????????? ?????? ???????????? ?????? ????????? ???????????? ?????? ??????????????????.", "???????????? ?????? ????????? ??????????????? '????????? ?????? ?????? ??????'??? ?????? ????????????.");
      }
    );
  });

  // 2020-04-03 ???????????? ??????
  $('.pg_coupon').on('click', function(e) {
    // echossSaveData("isNewCpn", "N");
    // echossShowPage('coupon.html', 'none', 'none', true);
  });

  $('.pg_event').on('click', function(e) {
    echossSaveData("isNewEvent", "N");
    echossShowPage('event.html', 'none', 'none', true);
  });

  $('.pg_mamibox').on('click', function(e) {
    echossShowPage('happybox.html', 'none', 'none', true);
  });

  $('.pg_notice').on('click', function(e) {
    echossSaveData("isNewNotice", "N");
    echossShowPage('notice.html', 'none', 'none', true);
  });

  $('.nav-back').click(function() {
    historyBack();
  });

  $('.btn-back').click(function() {
    historyBack();
  });
  $('.closer').click(function() {
    closeNav();
  });

  $('.btn_terms').click(function() {
    echossOpenLinkExternally(getDomain() + '/member/agreement/agreement1.html');
  });

  $('.btn_privacy').click(function() {
    echossOpenLinkExternally(getDomain() + '/member/agreement/agreement2.html');
  });

  $('.btn_media_privacy').click(function() {
    echossOpenLinkExternally(getDomain() + '/member/agreement/media_agreement.html');
  });

  // 20200304 ?????? ??? ???????????? ??????
  $('#btn_partners_add').click(function() {
    echossOpenLinkExternally('http://m.i-vory.com/partners_add.html');
  });
});

function goToIndex() {
  echossShowPage('index.html', 'none', 'none', false);
}

function updateSliceMenuStatus() {
  // not use
  if (echossLoadData("isNewPush") == "Y" ? $('#img_new_push').removeClass("hide") : $('#img_new_push').addClass("hide"));
  if (echossLoadData("isNewClass") == "Y" ? $('#img_new_class').removeClass("hide") : $('#img_new_class').addClass("hide"));
  if (echossLoadData("isNewCare") == "Y" ? $('#img_new_care').removeClass("hide") : $('#img_new_care').addClass("hide"));
  if (echossLoadData("isNewMall") == "Y" ? $('#img_new_mall').removeClass("hide") : $('#img_new_mall').addClass("hide"));
  // if (echossLoadData("isNewCpn") == "Y" ? $('#img_new_cpn').removeClass("hide") : $('#img_new_cpn').addClass("hide")); // 2020-04-03 ?????? ?????? ??????
  if (echossLoadData("isNewEvent") == "Y" ? $('#img_new_event').removeClass("hide") : $('#img_new_event').addClass("hide"));
  if (echossLoadData("isNewNotice") == "Y" ? $('#img_new_notice').removeClass("hide") : $('#img_new_notice').addClass("hide"));
}

function updateNavigationInfo() {

  // var frcsCustNo = echossLoadData("frcsCustNo");
  var frcsCustNo = getMemId();

  if (frcsCustNo == undefined || frcsCustNo.length <= 0) {
    // TODO
  } else {
    // TODO
  }
  echossLog('canMoveBupdateNavigationInfoBebeMall : ' + getMemId());
  var levelText = "";
  NY.AP5012({
    frcsCustNo: frcsCustNo,
    deviceId: echossLoadData("eqNo")
  }, function(result) {
    if (result.passFlag == 1) {
      $('#member_prim').removeClass('hide');
      $('#member_welcom').addClass('hide');
    } else {
      $('#member_prim').addClass('hide');
      $('#member_welcom').removeClass('hide');
    }
    if (result.custNm == null || result.custNm == undefined || result.custNm.length <= 0)
      $('.custName').text(frcsCustNo + ' ???');
    else
      $('.custName').text(result.custNm + ' ???');

  }, function(errorCode, errorMessage) {
    echossLog("[" + errorCode + "]" + errorMessage);
    uploadErrors("[????????????????????? ????????????]" + errorCode + ":" + errorMessage, "default:updateNavigationInfo:AP5012", getMemId(), "2");
  });
}

function showToast(msg) {
  Toastr.setPosition('toast-bottom-full-width');
  Toastr.info(msg, " ", {
    timeOut: 1800
  });
}

function closeNav() {
  $('body').removeClass('nav-expanded');
  echossSaveData("isOpenNav", "N");
}

function historyBack() {

  // gate.html ?????? ????????? ??????.
  if (document.location.href.indexOf('gate.html') > 0)
    return;

  echossDismissPage();
}

function isJoinBebeCam() {

  NY.AP5010({
    frcsCustNo: getMemId(),
    deviceId: echossLoadData("eqNo")
  }, function(result) {
    echossLog("Result : " + JSON.stringify(result));
    echossLog("actFlag : " + result.actFlag);
    if (result.actFlag == 1)
      gotoBebeCamView();
    else if (result.actFlag == 0) /* approval await*/
      showApprovalMessage(result.pccNm);
    else if (result.actFlag == 6) /* reqeust date is not yet  */
      dateIsNotYet();
    else if (result.actFlag == 7) {
      /* rest baby*/
      //showRestTimeMessage(result.timeInfo);
      gotoBebeCamView();
    } else if (result.actFlag == 8) /* approval reject */
      showRejectMessage(result.pccNm);
    else if (result.actFlag == 9) /* Not request origin */
      requestService();

  }, function(errorCode, errorMessage) {
    echossLog("[" + errorCode + "]" + errorMessage);
    showMessageBox2("???????????? ??????", "??? ??? ?????? ????????? ??????????????????.", "??? ?????? ??? ?????? ????????? ?????????."); // 20191125 ????????? ????????? ?????? ????????? ??????
    uploadErrors("[??????????????? ????????????]" + errorCode + ":" + errorMessage, "default:isJoinBebeCam:AP5010", getMemId(), "2");
  });
}

function canMoveBebeMall() {
  showLoading();
  echossLog('canMoveBebeMall : ' + getMemId());
  NY.AP5012({
    frcsCustNo: getMemId(),
    deviceId: echossLoadData("eqNo")
  }, function(result) {
    hideLoading();
    echossLog("Result : " + JSON.stringify(result));
    echossLog("Result : " + JSON.stringify(result));
    if (result.passFlag == "1")
      gotoBebemall();
    else if (result.passFlag == "2")
      requestService();
    else if (result.passFlag == "3")
      noticeNotEnterMall();
  }, function(errorCode, errorMessage) {
    hideLoading();
    echossLog("[" + errorCode + "]" + errorMessage);
    uploadErrors("[????????????????????? ????????????]" + errorCode + ":" + errorMessage, "default:canMoveBebeMall:AP5012", getMemId(), "2");
  });
}

function gotoBebemall() {
  // riseViewCnt('mall');
  riseIvoryViewCnt(getMemId(), 'mall');
  echossOpenLinkExternally(getDomain() + '');
}

function gotoBebeCamView() {
  echossShowPage('bebecam_play.html', 'none', 'none', true);
}

function cancelCamService() {
  showLoading();
  NY.AP508({
    frcsCustNo: getMemId(),
  }, function(result) {

    echossLog("Result : " + JSON.stringify(result));
    noticeServiceCancel();
    hideLoading();
  }, function(errorCode, errorMessage) {
    //appendAlertOneLine(errorMessage);
    echossLog("[" + errorCode + "]" + errorMessage);
    hideLoading();
    uploadErrors("[??????????????? ??????????????? ????????????]" + errorCode + ":" + errorMessage, "default:cancelCamService:AP508", getMemId(), "2");
  });
}

function isHaveLoginSession(seccess, fail) {
  echossLog('isHaveLoginSession : ' + getMemId());
  // 20190515 lch modify ???????????? ?????? ?????????. -> ????????????????????? ????????? ????????? ?????? ??????????????? ??????????????? ?????????
  var frcsCustNo = getMemId()
  NY.AP5012({
    frcsCustNo: frcsCustNo,
    deviceId: echossLoadData("eqNo")
  }, function(result) {
    if (result.passFlag == 1)
      seccess();
    else
      fail();

  }, function(errorCode, errorMessage) {
    echossLog("[" + errorCode + "]" + errorMessage);
    uploadErrors("[????????????????????? ????????????]" + errorCode + ":" + errorMessage, "default:isHaveLoginSession:AP5012", getMemId(), "2");
  });
}

// ????????? ?????? ?????? 20190711
function gotoMallDetail(goodsDetailUrl, seqNo) {

  goodsDetailUrl = encodeURI(goodsDetailUrl);
  var frcsCustNo = getMemId()
  showLoading();
  riseBannerCnt(frcsCustNo, seqNo, 1);
  if (goodsDetailUrl.indexOf("iandna77.cafe24") > 0 || goodsDetailUrl.indexOf("i-vory.shop") > 0) {
    isHaveLoginSession(function() {
      echossLog("???????????? ???????????????");
      // riseViewCnt('mall');
      riseIvoryViewCnt(getMemId(), 'mall');
      echossOpenLinkExternally(goodsDetailUrl);
      hideLoading();
    }, function() {
      hideLoading();
      showMessageBox2("???????????? ??????", "???????????? ???????????? ?????? ???????????? ?????? ????????? ???????????? ?????? ??????????????????.", "???????????? ?????? ????????? ??????????????? '????????? ?????? ?????? ??????'??? ?????? ????????????.");
    });
  } else {
    echossLog("????????????");
    echossOpenLinkExternally(goodsDetailUrl);
  }
}

// function gotoMallDetail(goodsDetailUrl, seqNo) {
//
//   goodsDetailUrl = encodeURI(goodsDetailUrl);
//   var frcsCustNo = getMemId()
//   showLoading();
//   riseBannerCnt(frcsCustNo, seqNo);
//   isHaveLoginSession(function() {
//     // echossOpenLinkExternally(goodsDetailUrl);
//     echossOpenLinkExternally(getDomain() + '');
//     hideLoading();
//   }, function() {
//     hideLoading();
//     showMessageBox2("???????????? ??????", "???????????? ???????????? ?????? ???????????? ?????? ????????? ???????????? ?????? ??????????????????.","???????????? ?????? ????????? ??????????????? '????????? ?????? ?????? ??????'??? ?????? ????????????.");
//   });
// }

// ?????? ?????? ?????????
// 20190924 ????????? ???????????? ??????
function riseBannerCnt(frcsCustNo, seqNo, gbnCd) {

  if (seqNo == 0 || seqNo == undefined || seqNo == null) {
    return;
  }

  echossLog("frcsCustNo : " + frcsCustNo);
  echossLog("seqNo : " + seqNo);
  if (frcsCustNo == undefined || frcsCustNo == null || frcsCustNo.length <= 0)
    frcsCustNo = "";

  /*
    NY.AP304({
      frcsCustNo: frcsCustNo,
      seqNo: seqNo
    }, function(result) {

      echossLog("result : " + JSON.stringify(result));
      // chossShowPage(url,  Base64.encode(JSON.stringify(params)), 'none', false);

    }, function(errorCode, errorMessage) {
      echossLog("error : " + errorMessage);
      //showMessageBox("???????????? ??????",errorMessage);
    });*/

  NY.AP1102({
    gbnCd: gbnCd,
    seqNo: seqNo,
    act: "link"
  }, function(result) {

    echossLog("result1 : " + JSON.stringify(result));
    // chossShowPage(url,  Base64.encode(JSON.stringify(params)), 'none', false);

  }, function(errorCode, errorMessage) {
    echossLog("error : " + errorMessage);
    //showMessageBox("???????????? ??????",errorMessage);
    uploadErrors("[??????????????? ????????? ????????????]" + errorCode + ":" + errorMessage, "default:riseBannerCnt:AP1102", seqNo, "2");
  });
}

// push ?????? ?????????
function risePushCnt(sendSeqNo) {
  if (sendSeqNo == 0 || sendSeqNo == undefined || sendSeqNo == null) {
    return;
  }
  echossLog("sendSeqNo : " + sendSeqNo);

  NY.AP1301({
    sendSeqNo: sendSeqNo
  }, function(result) {
    echossLog("result : " + JSON.stringify(result));
    // chossShowPage(url,  Base64.encode(JSON.stringify(params)), 'none', false);

  }, function(errorCode, errorMessage) {
    echossLog("error : " + errorMessage);
    //showMessageBox("???????????? ??????",errorMessage);
    uploadErrors("[??????????????? ????????? ????????????]" + errorCode + ":" + errorMessage, "default:risePushCnt:AP1301", sendSeqNo, "2");
  });
}

// ????????? ??????
function loadImage(bnrSeqNo, gbnCd) {
  echossLog("load img bnrSeqNo :" + bnrSeqNo);
  checkBannerCnt(bnrSeqNo, gbnCd);
}

// ?????? ?????? ?????????
// 20190924 ????????? ???????????? ??????
function checkBannerCnt(bnrSeqNo, gbnCd) {
  if (bnrSeqNo == 0 || bnrSeqNo == undefined || bnrSeqNo == null) {
    return;
  }
  // echossLog("bnrSeqNo : " + bnrSeqNo);
  /*
    NY.AP306({
      seqNo: bnrSeqNo
    }, function(result) {
      echossLog("result2 : " + JSON.stringify(result));

    }, function(errorCode, errorMessage) {
      echossLog("[" + errorCode + "]" + errorMessage);
    }); */

  NY.AP1102({
    gbnCd: gbnCd,
    seqNo: bnrSeqNo,
    act: "view"
  }, function(result) {

    echossLog("result2 : " + JSON.stringify(result));
    // chossShowPage(url,  Base64.encode(JSON.stringify(params)), 'none', false);

  }, function(errorCode, errorMessage) {
    echossLog("error : " + errorMessage);
    //showMessageBox("???????????? ??????",errorMessage);
    uploadErrors("[??????????????? ????????? ????????????]" + errorCode + ":" + errorMessage, "default:checkBannerCnt:AP1102", seqNo, "2");
  });
}

function getMemId() {

  return memberId;
}

function setMemId(id) {
  console.log('id : ' + id );
  memberId = id;
}

function getQueryStringUrl (url, sKey){
	if (!url) return;
	var sQueryString = url.substring(url.indexOf('?')+1);
	var aParam = {};

	if (sQueryString) {
		var aFields = sQueryString.split("&");
		var aField  = [];
		for (var i=0; i<aFields.length; i++) {
			aField = aFields[i].split('=');
			aParam[aField[0]] = aField[1];
		}
	}

	aParam.page = aParam.page ? aParam.page : 1;
	return sKey ? aParam[sKey] : aParam;
}

function memOut() {
  echossSaveData("frcsCustNo", "");
  localStorage.setItem('frcsCustNo', "");
}
