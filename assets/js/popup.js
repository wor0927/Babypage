// popup auto append list
$(function() {
  var popup = "";

  popup += '<div class="modal fade modal-center padding-top20" id="messageBox" tabindex="-1" role="dialog" aria-labelledby="messageLabel">';
  popup += '    <div class="modal-dialog" role="document">';
  popup += '        <div class="modal-content">';
  popup += '            <div class="modal-header">';
  popup += '                <h4 class="modal-title" id="messageBoxTitle"></h4>';
  // popup += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  popup += '            </div>';
  popup += '            <div class="modal-body">';
  popup += '                <p><span class="icon"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span></p>';
  popup2 += '                 <p class="clearfix"><br/></p>';
  popup += '                <p><h7 style="margin-top:10px;" id="messageBoxContents" ></h7></p>';
  popup += '            </div>';
  popup += '            <div class="modal-footer-btm">';
  popup += '                <a class="btn-primary btn-full"  btn-lg" data-dismiss="modal">확인</a>';
  popup += '            </div>';
  popup += '       </div>';
  popup += '    </div>';
  popup += '</div>';

  $('body').append(popup);

  //2018.09.14 pws
  var callBackPopup = "";
  callBackPopup += '<div class="modal fade modal-center padding-top20" id="callbackMessagePop" tabindex="-1" role="dialog" aria-labelledby="messageLabel">';
  callBackPopup += '    <div class="modal-dialog" role="document">';
  callBackPopup += '        <div class="modal-content">';
  callBackPopup += '            <div class="modal-header">';
  callBackPopup += '                <h4 class="modal-title" id="callbackMessagePopTitle"></h4>';
  // callBackPopup += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  callBackPopup += '            </div>';
  callBackPopup += '            <div class="modal-body">';
  callBackPopup += '                <p><span class="icon"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span></p>';
  popup2 += '                 <p class="clearfix"><br/></p>';
  callBackPopup += '                <p><h7 style="margin-top:10px;" id="callbackMessagePopContents" ></h7></p>';
  callBackPopup += '            </div>';
  callBackPopup += '             <div class="modal-footer-btm">';
  callBackPopup += '                <a id="gotoPrevPage" class="btn-primary btn-full"  data-dismiss="modal">확인</a>';
  callBackPopup += '            </div>';
  callBackPopup += '       </div>';
  callBackPopup += '    </div>';
  callBackPopup += '</div>';

  $('body').append(callBackPopup);

  $('#gotoPrevPage').click(function(e) {
    historyBack();
  });

  var popup2 = "";

  popup2 += '<div class="modal fade modal-center padding-top14" id="messageBox2" tabindex="-1" role="dialog" aria-labelledby="message2Label">';
  popup2 += '    <div class="modal-dialog" role="document">';
  popup2 += '        <div class="modal-content">';
  popup2 += '            <div class="modal-header">';
  popup2 += '                <h4 class="modal-title" id="messageBoxTitle2"></h4>';
  // popup2 += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  popup2 += '            </div>';
  popup2 += '            <div class="modal-body">';
  popup2 += '                <p><span class="icon"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span></p>';
  popup2 += '                 <p class="clearfix"><br/></p>';
  popup2 += '                <p><h7 style="margin-top:10px;" id="messageBoxContents2" ></h7></p>';
  popup2 += '                <p><h7 style="margin-top:10px;" id="messageBoxContents2-1" ></h7></p>';
  popup2 += '            </div>';
  popup2 += '             <div class="modal-footer-btm">';
  popup2 += '                <a class="btn-primary btn-full" data-dismiss="modal">확인</a>';
  popup2 += '            </div>';
  popup2 += '       </div>';
  popup2 += '    </div>';
  popup2 += '</div>';
  $('body').append(popup2);

  var popup3 = "";

  popup3 += '<div class="modal fade modal-center padding-top14" id="messageBox3" tabindex="-1" role="dialog" aria-labelledby="message3Label">';
  popup3 += '    <div class="modal-dialog" role="document">';
  popup3 += '        <div class="modal-content">';
  popup3 += '            <div class="modal-header">';
  popup3 += '                <h4 class="modal-title" id="messageBoxTitle3"></h4>';
  // popup3 += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  popup3 += '            </div>';
  popup3 += '            <div class="modal-body">';
  // popup3 += '                <p><span class="icon"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span></p>';
  // popup3 += '                 <p class="clearfix"><br/></p>';
  popup3 += '                <p><h7 style="margin-top:10px;" id="messageBoxContents3" ></h7></p>';
  popup3 += '                <p><h7 style="margin-top:10px;" id="messageBoxContents3-1" ></h7></p>';
  popup3 += '            </div>';
  popup3 += '             <div class="modal-footer-btm">';
  popup3 += '                <a id="gotoNext" class="btn-primary btn-full" data-dismiss="modal">확인</a>';
  popup3 += '            </div>';
  popup3 += '       </div>';
  popup3 += '    </div>';
  popup3 += '</div>';
  $('body').append(popup3);
});

// not use
function askLoginPopup(message) {
  if (message == undefined)
    message = "";

  var popup = "";
  $('body').children('#askLogin').remove();

  popup += '<div class="modal fade modal-center" id="askLogin" tabindex="-1" role="dialog" aria-labelledby="askLoginLabel">';
  popup += '    <div class="modal-dialog" role="document">';
  popup += '        <div class="modal-content">';
  popup += '            <div class="modal-header">';
  popup += '                <h4 class="modal-title" id="askLoginLabel">아이보리 회원인증</h4>';
  popup += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  popup += '            </div>';
  popup += '            <div class="modal-body">';
  popup += '                <p class="clearfix"></p>';
  popup += '                <h6>' + message + '<strong class="point">아이보리 프리미엄 회원만 진입이</strong>가능합니다.</h6>';
  //popup += '                <h6><strong class="point">로그인</strong></span> 하시겠습니까?</h6>';
  popup += '                <p class="clearfix"><br/></p>';
  popup += '            </div>';
  popup += '             <div class="modal-footer">';
  // popup += '                <a class="btn btn-third-outline btn-lg" id="login_cancel" data-dismiss="modal">취소</a><a class="requst_btn_login btn btn-primary btn-lg" data-dismiss="modal">로그인</a>';
  popup += '                <a btn btn-primary btn-lg" data-dismiss="modal">확인</a>';
  popup += '            </div>';
  popup += '       </div>';
  popup += '    </div>';
  popup += '</div>';

  $('body').append(popup);

  $('#askLogin').modal("show");

  $('.requst_btn_login').click(function(e) {
    echossOpenLinkExternally(getDomain() + '/member/login.html');
  });

  $('#login_cancel').click(function(e) {
    $('#askLogin').modal("hide");
  });
}

// not use
function appendAlertTwoLine(title, message1, message2, point) {

  var popup = "";
  $('body').children('#showAlert2').remove();
  popup += '<div class="modal fade modal-center" id="showAlert2" tabindex="-1" role="dialog" aria-labelledby="showAlertLabel">';
  popup += '    <div class="modal-dialog" role="document">';
  popup += '        <div class="modal-content">';
  popup += '            <div class="modal-header">';
  popup += '                <h4 class="modal-title" id="showAlertSchoolLabel">' + title + '</h4>';
  popup += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  popup += '            </div>';
  popup += '            <div class="modal-body">';
  popup += '                <p class="clearfix"></p>';
  popup += '                <p><img src="./assets/img/icon_bebecam_connecting.gif" alt=""/></p>';
  popup += '                <h6>' + message1 + '</h6>';
  popup += '                <span>' + message2 + '</span><strong class="point">' + point + '</strong>' + message3 + '</span>';
  popup += '                <p class="clearfix"><br/></p>';
  popup += '            </div>';
  popup += '             <div class="modal-footer">';
  popup += '                <a class="btn btn-primary btn-lg" data-dismiss="modal">확인</a>';
  popup += '            </div>';
  popup += '       </div>';
  popup += '    </div>';
  popup += '</div>';

  $('body').append(popup);
  $('#showAlert2').modal("toggle");
}

// not use
function showAlertOneLine(title, message) {

  var popup = "";

  $('body').children('.showAlert').remove();

  popup += '<div class="modal fade modal-center showAlert" id="" tabindex="-1" role="dialog" aria-labelledby="showAlertLabel">';
  popup += '    <div class="modal-dialog" role="document">';
  popup += '        <div class="modal-content">';
  popup += '            <div class="modal-header">';
  popup += '                <h4 class="modal-title" id="showAlertSchoolLabel">' + title + '</h4>';
  popup += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  popup += '            </div>';
  popup += '            <div class="modal-body-x-sm">';
  popup += '                <h6 style="margin-top:10px;">' + message + '</h6>';
  popup += '                    <p class="clearfix"><br/></p>';
  popup += '            </div>';
  popup += '             <div class="modal-footer">';
  popup += '                <a class="btn_confirm btn btn-primary btn-lg" data-dismiss="modal">확인</a>';
  popup += '            </div>';
  popup += '       </div>';
  popup += '    </div>';
  popup += '</div>';

  $('body').append(popup);
  $('.showAlert').modal("show");
}

// not use
function showAlert(title, message) {

  var popup = "";
  $('body').parents('#showAlert').remove();
  popup += '<div class="modal fade modal-center" id="showAlert" tabindex="-1" role="dialog" aria-labelledby="showAlertLabel">';
  popup += '    <div class="modal-dialog" role="document">';
  popup += '        <div class="modal-content">';
  popup += '            <div class="modal-header">';
  popup += '                <h4 class="modal-title" id="showAlertSchoolLabel">' + title + '</h4>';
  popup += '               <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span>';
  popup += '            </div>';
  popup += '            <div class="modal-body-x-sm">';
  popup += '                <h6 style="margin-top:10px;">' + message + '</h6>';
  popup += '                    <p class="clearfix"><br/></p>';
  popup += '            </div>';
  popup += '             <div class="modal-footer">';
  popup += '                <a class="btn btn-primary btn-lg" data-dismiss="modal">확인</a>';
  popup += '            </div>';
  popup += '       </div>';
  popup += '    </div>';
  popup += '</div>';

  $('body').append(popup);
  $('#showAlert').modal("toggle");
}


function askLogout() {

  var popup = "";
  $('body').parents('#confirmLogout').remove();

  popup += '   <div class="modal fade modal-center padding-top20" id="confirmLogout" tabindex="-1" role="dialog" aria-labelledby="confirmLogoutLabel">';
  popup += '       <div class="modal-dialog" role="document">';
  popup += '           <div class="modal-content">';
  popup += '               <div class="modal-header">';
  popup += '                   <h4 class="modal-title" id="confirmLogoutLabel">아이보리 로그아웃</h4>';
  // popup+='                   <span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '               </div>';
  popup += '               <div class="modal-body">';
  popup += '                   <p><span class="icon"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span></p>';
  popup += '                   <p class="clearfix"></p>';
  popup += '                   <h5><strong class="point">로그아웃</strong> 하시겠습니까?</h5>';
  popup += '                   <p class="clearfix"><br/></p>';
  popup += '               </div>';
  popup += '              <div class="modal-footer-btm">';
  popup += '                   <a class="col-xs-6 btn-white btn-left" data-dismiss="modal">취소</a><a class="col-xs-6 btn-primary btn-right" id="confirm_logout" data-dismiss="modal">확인</a>';
  popup += '               </div>';
  popup += '           </div>';
  popup += '       </div>';
  popup += '   </div> ';

  $('body').append(popup);
  $('#confirmLogout').modal("toggle");


  $('#confirm_logout').click(function() {
    var verCode = echossLoadData("appVersionCode");

    $('body').removeClass('nav-expanded');
    showLoadingIntervalProgress(2000);
    NY.AP002({
      frcsCustNo: getMemId()
    }, function(result) {
      echossLog("Result : " + JSON.stringify(result));

      location.href = getDomain() + "/member/proxy_logout.html";

      memOut();
      updateNavigationInfo();
    }, function(errorCode, errorMessage) {
      echossLog("[" + errorCode + "]" + errorMessage);

      location.href = getDomain() + "/member/proxy_logout.html";

      memOut();
      updateNavigationInfo();
    });
  });
}

function noticeBabyRestTime() {

  var popup = "";
  $('body').parents('#restBabyTime').remove();

  popup += '	<div class="modal fade modal-center" id="restBabyTime" tabindex="-1" role="dialog" aria-labelledby="restBabyTimeLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="restBabyTimeLabel">아기들의 휴식시간</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '					<p class="clearfix"></p>';
  popup += '                    <p><span class="icon"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span></p>';
  popup += '					<p class="clearfix"><br/></p>';
  popup += '					<p><h7>아가들의 <strong class="point">휴식시간</strong> 입니다.</h7></p>';
  popup += '					<p><h7>아가들을 볼 수 있는 시간은 다음과 같습니다.</h7></p>';
  popup += '					<p id="rest_time"><h7><strong class="point"></strong></h7></p> ';

  popup += '				</div>';
  popup += '              <div class="modal-footer-btm">';
  popup += '					<a class="btn-primary btn-full" data-dismiss="modal">확인</a>';
  popup += '				</div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div> ';

  $('body').append(popup);
  $('#restBabyTime').modal("toggle");
}

// not use
function showFindCustNoPopup() {

  var popup = "";
  $('body').parents('#helpCheckCustNo').remove();

  popup += '<div class="modal fade modal-center" id="helpCheckCustNo" tabindex="-1" role="dialog" aria-labelledby="helpCheckCustNoLabel" data-interval="3000">';
  popup += '         <div class="modal-dialog-big" role="document">';
  popup += '            <div class="modal-content">';
  popup += '                <div class="modal-header-sm">';
  popup += '                    <h5 class="modal-title" id="helpCheckCustNoLabel">고객번호 확인하는 방법 안내</h5>';
  popup += '                </div>';
  popup += '                <div class="modal-body modal-body-nopadding text-left">';
  popup += '                    <div id="carousel-pop" class="carousel slide" data-ride="carousel" data-pause="hover">';
  popup += '                        <div class="carouselwrap">';
  popup += '                            <ol class="carousel-indicators">';
  popup += '                                <li data-target="#carousel-pop" data-slide-to="0" class="active"></li>';
  popup += '                                <li data-target="#carousel-pop" data-slide-to="1"></li>';
  popup += '                            </ol>';
  popup += '                            <div class="carousel-inner visual" role="listbox">';
  popup += '                                 <div class="item active">';
  popup += '                                    <img src="./assets/img/cam_help1.png" alt="" class="img-responsive"/>';
  popup += '                                </div>';
  popup += '                                <div class="item">';
  popup += '                                    <img src="./assets/img/cam_help2.png" alt="" class="img-responsive"/>';
  popup += '                                </div>';
  popup += '                            </div>';
  popup += '                        </div>';
  popup += '                    </div> ';
  popup += '                </div>';
  popup += '                <div class="modal-footer">';
  popup += '                    <a class="btn btn-third-outline btn-lg-no-pad" data-dismiss="modal" id="btn_after_now_show">다시보지않기</a><a class="btn btn-primary btn-lg-no-pad" data-dismiss="modal">확인</a>';
  popup += '                </div>';
  popup += '            </div>';
  popup += '        </div>';
  popup += '    </div>';

  $('body').append(popup);
  $('#helpCheckCustNo').modal("show");
}


function noticeRejectService(pccName) {
  var popup = "";
  $('body').parents('#bebeCamReject').remove();

  popup += '	<div class="modal fade modal-center padding-top14" id="bebeCamReject" tabindex="-1" role="dialog" aria-labelledby="bebeCamRejectLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="bebeCamRejectLabel">서비스 이용 안내</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '					<p><span class="icon"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '					<p><h7>베베캠 신청이 반려되었습니다.</h7></p>';
  popup += '					<p><h7><strong class="point" id="pcc_Name2">' + pccName + '</strong>에<br/> 문의바랍니다.</h7></p>';
  popup += '				</div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '					<a class="col-xs-6 btn-white btn-left" data-dismiss="modal">닫기</a><a class="col-xs-6 btn-primary btn-right" id="btn_re_requst_bebecam" data-dismiss="modal">다시 신청하기</a>';
  popup += '				</div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div> ';

  $('body').append(popup);
  $('#bebeCamReject').modal("toggle");

  $('#btn_re_requst_bebecam').on('click', function(e) {
    echossShowPage('bebecam_apply.html', 'none', 'none', false);
  });

}

function requestService() {

  var popup = "";
  $('body').parents('#requstSerivice').remove();
  popup += '   <div class="modal fade modal-center padding-top20" id="requstSerivice" tabindex="-1" role="dialog" aria-labelledby="requstSeriviceLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="requstSeriviceLabel">베베캠 서비스 신청</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '					<p class="clearfix"></p>';
  popup += '					<p><h7><span class="icon"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span></h7></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '					<p><h7><strong class="point">베베캠 서비스</strong>를 신청 하시겠습니까?</h7></p>';
  popup += '					<p><h7>베베캠 승인 완료 후 아이보리몰 이용이 가능합니다.</h7></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '				</div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '					<a class="col-xs-6 btn-white  btn-left" data-dismiss="modal">닫기</a><a class="col-xs-6 btn-primary btn-right" id="btn_requst_bebecam" data-dismiss="modal">신청할게요</a>';
  popup += '				</div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div>';

  $('body').append(popup);
  $('#requstSerivice').modal("toggle");

  $('#btn_requst_bebecam').on('click', function(e) {
    echossShowPage('bebecam.html', 'none', 'none', false);
  });
}


function dateIsNotYet() {
  var popup = "";
  $('body').parents('#dateIsNotYet').remove();
  popup += '   <div class="modal fade modal-center padding-top20" id="dateIsNotYet" tabindex="-1" role="dialog" aria-labelledby="dateIsNotYetLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="requstSeriviceLabel">베베캠 입실대기</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '					<p><span class="icon"><img src="./assets/img/svg/pop_icon_notice.svg" alt=""/></span></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '					<p><h7>입실 대기중입니다. 입실후 이용가능합니다.</h7></p>';
  popup += '					<p><h7>서비스 날짜 변경은<strong class="point"> 신청하신 산후조리원에서 </strong>가능합니다.</h7></p>';
  popup += '				</div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '                <a class="btn-primary btn-full" data-dismiss="modal">확인</a>';
  popup += '              </div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div>';

  $('body').append(popup);
  $('#dateIsNotYet').modal("toggle");
}

function showApprovalMessage(pccName) {
  echossLog("pccName : " + pccName);
  noticeServiceRequestComp(pccName);
}


function showMessageBox(title, message) {

  $('#messageBoxTitle').text(title);
  $('#messageBoxContents').text(message);
  $('#messageBox').modal("show");
}

//2018.09.14 pws
function showCallBackPopup(title, message) {

  $('#callbackMessagePopTitle').text(title);
  $('#callbackMessagePopContents').text(message);
  $('#callbackMessagePop').modal("show");
}

function showMessageBox2(title, message1, msg2) {

  $('#messageBoxTitle2').text(title);
  $('#messageBoxContents2').text(message1);
  $('#messageBoxContents2-1').text(msg2);
  $('#messageBox2').modal("show");
}

function showMessageBox3(title, message1, msg2, success) {

  $('#messageBoxTitle3').text(title);
  $('#messageBoxContents3').text(message1);
  $('#messageBoxContents3-1').text(msg2);
  $('#messageBox3').modal("show");

  $('#gotoNext').click(function(e) {
    success();
  });
}


function showApprovalMessage(pccName) {
  echossLog("pccName : " + pccName);
  noticeServiceRequestComp(pccName);
  // $('#pcc_Name1').text(pccName);
  //$('#awaitApproval').modal("toggle");
}

function noticeServiceRequestComp(pccName) {
  var popup = "";

  // $('body').parents('#awaitApproval').remove();

  popup += '	<div class="modal fade modal-center padding-top20" id="awaitApproval" tabindex="-1" role="dialog" aria-labelledby="awaitApprovalLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="awaitApprovalLabel">베베캠 승인 대기중..</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '					<p class="clearfix"></p>';
  popup += '                    <p><span class="icon"><img src="./assets/img/svg/pop_icon_bebecam.svg" alt=""/></span></p>';
  popup += '					<p><img src="./assets/img/icon_bebecam_connecting.gif" alt=""/></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '					<p><h7>베베캠 서비스를 신청해 주셔서 감사합니다.</h7></p>';
  popup += '					<p><h7>정확한 연결을 위해 <span id="pcc_Name1">' + pccName + '</span><strong class="point"> 승인</strong>을 <span>기다리고 있습니다.</span></h7></p>';
  popup += '					<p><h7>베베캠은 승인 완료 후 자동 연결 됩니다.</h7></p>';
  popup += '				</div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '					<a class="col-xs-6 btn-white btn-left" data-toggle="modal"  data-dismiss="modal" onclick="askServiceCancel();">신청취소</a><a class="col-xs-6 btn-primary btn-right" data-dismiss="modal">확인</a>';
  popup += '				</div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div>';

  $('body').append(popup);
  $('#awaitApproval').modal("show");
}


function noticeNotEnterMall(pccName) {
  var popup = "";

  // $('body').parents('#awaitApproval').remove();

  popup += '	<div class="modal fade modal-center padding-top20" id="notEnterMall" tabindex="-1" role="dialog" aria-labelledby="notEnterMallLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="awaitApprovalLabel">베베캠 승인 대기중..</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '					<p class="clearfix"></p>';
  popup += '                    <p><span class="icon"><img src="./assets/img/svg/pop_icon_bebecam.svg" alt=""/></span></p>';
  popup += '					<p><img src="./assets/img/icon_bebecam_connecting.gif" alt=""/></p>';
  popup += '					<h6>베베캠 서비스를 신청해 주셔서 감사합니다.</h6>';
  popup += '					<p>베베캠 <strong class="point"> 승인 완료 </strong>후 쇼핑몰을 사용할 수 있습니다.</p>';
  popup += '					<p class="clearfix"><br/></p>';
  popup += '				</div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '					<a class="btn-primary btn-full" data-dismiss="modal">확인</a>';
  popup += '				</div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div>';

  $('body').append(popup);
  $('#notEnterMall').modal("show");
}


function noticeServiceCancel() {

  var popup = "";
  //  $('body').parents('#cancelCamServiceComp').remove();
  popup += '	<div class="modal fade modal-center padding-top20" id="cancelCamServiceComp" tabindex="-1" role="dialog" aria-labelledby="cancelCamServiceCompLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="cancelCamServiceCompLabel">서비스신청 취소</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '                    <p><span class="icon"><img src="./assets/img/svg/pop_icon_bebecam.svg" alt=""/></span></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '					<p><h7>캠 서비스 신청이 <strong class="point">취소</strong> 되었습니다.</h7></p>';
  popup += '					<p><h7>더 좋은 모습으로 찾아뵙겠습니다.</h7></p>';
  popup += '				</div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '					<a class="btn-primary btn-full" data-dismiss="modal">확인</a>';
  popup += '				</div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div>';

  $('body').append(popup);
  $('#cancelCamServiceComp').modal("show");
}


function askServiceCancel() {

  var popup = "";
  $('body').parents('#cancelBebeCamService').remove();

  popup += '		<div class="modal fade modal-center padding-top20" id="cancelBebeCamService" tabindex="-1" role="dialog" aria-labelledby="cancelCamServiceLabel">';
  popup += '		<div class="modal-dialog" role="document">';
  popup += '			<div class="modal-content">';
  popup += '				<div class="modal-header">';
  popup += '					<h4 class="modal-title" id="cancelCamServiceLabel">서비스신청 취소</h4>';
  // popup+='					<span class="icon icon-lg"><img src="./assets/img/svg/pop_icon_mom.svg" alt=""/></span>';
  popup += '				</div>';
  popup += '				<div class="modal-body">';
  popup += '                    <p><span class="icon"><img src="./assets/img/svg/pop_icon_bebecam.svg" alt=""/></span></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '					<p><h7>캠 서비스를 취소하시면 <strong class="point">아이보리의 다양한 혜택</strong>을 받으실 수 없습니다.</h7></p>';
  popup += '					<p><h7>서비스 신청을 <strong class="point">취소</strong> 하시겠습니까?</h7></p>';
  popup += '					<p class="clearfix"></p>';
  popup += '				</div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '					<a class="col-xs-6 btn-primary btn-left" data-dismiss="modal">닫기</a><a class="col-xs-6 btn-white btn-right" onclick="cancelCamService();" data-dismiss="modal">취소할게요</a>';
  popup += '				</div>';
  popup += '			</div>';
  popup += '		</div>';
  popup += '	</div> ';

  $('body').append(popup);
  $('#cancelBebeCamService').modal("show");
}


// 어플 업데이트 공지(선택)
function appUpdateTwoButton(message) {

  var popup = "";
  $('body').parents('#appUpdateTwoButton').remove();

  popup += '   <div class="modal fade modal-center padding-top20" id="appUpdateTwoButton" tabindex="-1" role="dialog" aria-labelledby="appUpdateTwoButtonLabel">';
  popup += '       <div class="modal-dialog" role="document">';
  popup += '           <div class="modal-content">';
  popup += '               <div class="modal-header">';
  popup += '                   <h4 class="modal-title" id="appUpdateTwoButtonLabel">어플 업데이트 공지</h4>';
  popup += '               </div>';
  popup += '               <div class="modal-body">';
  popup += '                   <h5><strong>' + message + '</strong></h5>';
  popup += '                   <p class="clearfix"></p>';
  popup += '                   <h5><strong class="point">최신버전 업데이트를 위해 앱스토어로 이동하시겠습니끼?</strong></h5>';
  popup += '                   <p class="clearfix"><br/></p>';
  popup += '               </div>';
  popup += '              <div class="modal-footer-btm">';
  popup += '                   <a class="col-xs-6 btn-primary btn-left" id="gotoAppStrore" data-dismiss="modal">지금 업데이트</a><a class="col-xs-6 btn-white btn-right"  data-dismiss="modal">나중에</a>';
  popup += '               </div>';
  popup += '           </div>';
  popup += '       </div>';
  popup += '   </div> ';

  $('body').append(popup);
  $('#appUpdateTwoButton').modal("toggle");
}

// 어플 업데이트 공지(강제)
function appUpdateOneButton(message) {

  var popup = "";
  $('body').parents('#appUpdateOneButton').remove();

  popup += '   <div class="modal fade modal-center padding-top20" id="appUpdateOneButton" tabindex="-1" role="dialog" aria-labelledby="appUpdateOneButtonLabel">';
  popup += '       <div class="modal-dialog" role="document">';
  popup += '           <div class="modal-content">';
  popup += '               <div class="modal-header">';
  popup += '                   <h4 class="modal-title" id="appUpdateOneButtonLabel">어플 업데이트 공지</h4>';
  popup += '               </div>';
  popup += '               <div class="modal-body">';
  popup += '                   <h5><strong>' + message + '</strong></h5>';
  popup += '                   <p class="clearfix"></p>';
  popup += '                   <h5><strong class="point">최신버전 업데이트를 위해 앱스토어로 이동하시겠습니끼?</strong></h5>';
  popup += '                   <p class="clearfix"><br/></p>';
  popup += '               </div>';
  popup += '				<div class="modal-footer-btm">';
  popup += '					<a id="gotoAppStrore" class="btn-primary btn-full" data-dismiss="modal">확인</a>';
  popup += '				</div>';
  popup += '           </div>';
  popup += '       </div>';
  popup += '   </div> ';

  $('body').append(popup);
  $('#appUpdateOneButton').modal("toggle");
}



function showRestTimeMessage(restTimeList) {
  echossLog("restTimeList : " + restTimeList);
  var restList = restTimeList;
  var restTime = "";

  for (var i = 0; i < restList.length; i++) {
    restTime += '<p><h7><strong class="point">' + restList[i].openTm.substring(0, 2) + ':' + restList[i].openTm.substring(2, 5) + ' ~ ' + restList[i].closeTm.substring(0, 2) + ':' + restList[i].closeTm.substring(2, 5) + '</strong></p></h7> 까지</br>';
  }
  noticeBabyRestTime();
  restTime += '총 ' + restList.length + '타임 입니다.'
  $('#rest_time').html(restTime);

  $('#restBabyTime').modal("toggle");
}

function showRejectMessage(pccName) {
  echossLog("pccName : " + pccName);
  // $('#pcc_Name2').text(pccName);
  noticeRejectService(pccName);
  // $('#bebeCamReject').modal("toggle");
}


function showLoading() {
  var loading = "";
  $('body').bind('touchmove', function(e) {
    e.preventDefault()
  });
  loading += '<div class="loading_wrap">';
  loading += '     <img class="loading_circle_img" src="../assets/img/loading.gif" alt="Loading..."/>';
  loading += ' </div>';
  $('body').append(loading);
  //$('body').bind('touchmove', function(e){e.preventDefault()});

  var timer = setInterval(function() {
    hideLoading();
    clearInterval(timer);
  }, 6500);
}

function showLoadingIntervalProgress(time) {
  echossLog("시간 : " + time);
  var loading = "";
  loading += '<div class="loading_wrap">';
  loading += '     <img style="width:26px; height:26px; " class="loading_circle_img" src="./assets/img/loading2.gif" alt="Loading..."/>';
  loading += ' </div>';
  $('body').append(loading);
  $('body').bind('touchmove', function(e) {
    e.preventDefault()
  });

  var timer = setInterval(function() {
    hideLoading();
    clearInterval(timer);
  }, time);
}

function showLoadingInterval(time) {
  echossLog("시간 : " + time);
  var loading = "";
  loading += '<div class="loading_wrap">';
  loading += '     <img class="loading_circle_img" src="./assets/img/loading.gif" alt="Loading..."/>';
  loading += ' </div>';
  $('body').append(loading);
  $('body').bind('touchmove', function(e) {
    e.preventDefault()
  });

  var timer = setInterval(function() {
    hideLoading();
    clearInterval(timer);
  }, time);
}

function hideLoading() {

  $('.loading_wrap').remove();
  $('body').unbind("touchmove");
}
