var TEST_MODE = true;
var SVC_KEY = TEST_MODE ? 'dd9927cde7b52491189c400c3a0b63d36' : 'pdf11680e063c4c46b18b8c94dba503ee';

(function(NY, $, undefined) {

  // var TEST_SERVER_URL = "http://nybb.xyz:45100";
  // var LIVE_SERVER_URL = "http://nybb.xyz:45100";

  var TEST_SERVER_URL = "https://iandna.biz";
  var LIVE_SERVER_URL = "https://iandna.biz";

  // var TEST_SERVER_URL = "http://222.239.97.157:44100";
  // var LIVE_SERVER_URL = "http://222.239.97.157:44100";

  // var TEST_SERVER_URL = "http://222.239.97.157:45200";
  // var LIVE_SERVER_URL = "http://222.239.97.157:45200";

  var SERVER_URL = TEST_MODE ? TEST_SERVER_URL : LIVE_SERVER_URL;

  NY.NYDUMMY = function(request, callbackSuccess, callbackFail) {

    var params = new Object();

    handleAjax(SERVER_URL + "/api/NYDUMMY.json", params, callbackSuccess, callbackFail);
  }

  NY.SKDUMMY = function(request, callbackSuccess, callbackFail) {

    var params = new Object();
    handleAjax(SERVER_URL + "/api/SKDUMMY.json", params, callbackSuccess, callbackFail);
  }

  NY.CPDUMMY = function(request, callbackSuccess, callbackFail) {

    var params = new Object();

    handleAjax(SERVER_URL + "/api/CPDUMMY.json", params, callbackSuccess, callbackFail);
  }


  // 공지사항 목록 조회
  NY.AP301 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("A301", "You missed some parameter.");
      return;
    }

    var params = new Object();
    params.frcsCustNo = request.frcsCustNo; // 제휴처 고객 번호

    handleAjax(SERVER_URL + "/api/AP301.json", params, callbackSuccess, callbackFail);
  }

  // 공지사항 상세 조회
  NY.AP302 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.seqNo) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("A302", "You missed some parameter.");
      return;
    }

    var params = new Object();
    params.frcsCustNo = request.frcsCustNo; // 제휴처 고객 번호
    params.seqNo = request.seqNo;

    handleAjax(SERVER_URL + "/api/AP302.json", params, callbackSuccess, callbackFail);
  }

  // 제휴제안보내기
  NY.AP1612 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.gbnCd) ||
      isEmptyParameter(request.comNm) ||
      isEmptyParameter(request.comTel) ||
      isEmptyParameter(request.comEmail) ||
      isEmptyParameter(request.sbj) ||
      isEmptyParameter(request.ctnt) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1612", "You missed some parameter.");
      return;
    }

    var params = new Object();
    params.gbnCd = request.gbnCd;
    params.comNm = request.comNm;
    params.comTel = request.comTel;
    params.comEmail = request.comEmail;
    params.sbj = request.sbj; // 제휴처 고객 번호
    params.ctnt = request.ctnt;

    handleAjax(SERVER_URL + "/api/AP1612.json", params, callbackSuccess, callbackFail);
  }

  // 이메일 문의하기
  NY.AP1611 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.custNm) ||
      isEmptyParameter(request.phoneNo) ||
      isEmptyParameter(request.email) ||
      isEmptyParameter(request.gbnCd) ||
      isEmptyParameter(request.ctnt) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1611", "You missed some parameter.");
      return;
    }

    var params = new Object();
    params.custNm = request.custNm;
    params.phoneNo = request.phoneNo;
    params.email = request.email;
    params.gbnCd = request.gbnCd;
    params.ctnt = request.ctnt;

    handleAjax(SERVER_URL + "/api/AP1611.json", params, callbackSuccess, callbackFail);
  }

  // 이벤트
  // 아이보리 배너, 이벤트 사용현황 집계
  NY.AP1102 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.gbnCd) ||
      isEmptyParameter(request.seqNo) ||
      isEmptyParameter(request.act) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1102", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.gbnCd = request.gbnCd;
    params.seqNo = request.seqNo;
    params.act = request.act;
    handleAjax(SERVER_URL + "/api/AP1102.json", params, callbackSuccess, callbackFail);
  }

  // 이벤트 상세 조회
  NY.AP402 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.seqNo) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("A402", "You missed some parameter.");
      return;
    }

    var params = new Object();
    params.frcsCustNo = request.frcsCustNo; // 제휴처 고객 번호
    params.seqNo = request.seqNo;

    handleAjax(SERVER_URL + "/api/AP402.json", params, callbackSuccess, callbackFail);
  }

  // 이벤트 설문참여권한 체크
  NY.AP406 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.evtSeqNo) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP406", "You missed some parameter.");
      return;
    }

    var params = new Object();
    params.frcsCustNo = request.frcsCustNo;
    params.evtSeqNo = request.evtSeqNo;

    handleAjax(SERVER_URL + "/api/AP406.json", params, callbackSuccess, callbackFail);
  }

  //댓글 추가
  NY.AP1200 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.pageSeqNo) ||
      isEmptyParameter(request.pageGbnCd) ||
      isEmptyParameter(request.comment) ||
      isEmptyParameter(request.secCd) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1200", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.frcsCustNo = request.frcsCustNo;
    params.pageSeqNo = request.pageSeqNo;
    params.pageGbnCd = request.pageGbnCd;
    params.comment = request.comment;
    params.secCd = request.secCd;
    handleAjax(SERVER_URL + "/api/AP1200.json", params, callbackSuccess, callbackFail);
  }

  //댓글 리스트 불러오기
  NY.AP1201 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.pageSeqNo) ||
      isEmptyParameter(request.pageGbnCd) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1201", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.pageSeqNo = request.pageSeqNo;
    params.pageGbnCd = request.pageGbnCd;
    params.frcsCustNo = request.frcsCustNo;
    handleAjax(SERVER_URL + "/api/AP1201.json", params, callbackSuccess, callbackFail);
  }

  //댓글 업데이트
  NY.AP1202 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.seqNo) ||
      isEmptyParameter(request.comment) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1202", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.frcsCustNo = request.frcsCustNo;
    params.seqNo = request.seqNo;
    params.comment = request.comment;
    handleAjax(SERVER_URL + "/api/AP1202.json", params, callbackSuccess, callbackFail);
  }

  //댓글 삭제
  NY.AP1203 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.seqNo) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1203", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.frcsCustNo = request.frcsCustNo;
    params.seqNo = request.seqNo;
    handleAjax(SERVER_URL + "/api/AP1203.json", params, callbackSuccess, callbackFail);
  }

  // 대댓글 달기
  NY.AP1205 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.seqNo) ||
      isEmptyParameter(request.comment) ||
      isEmptyParameter(request.secCd) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1205", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.frcsCustNo = request.frcsCustNo;
    params.seqNo = request.seqNo;
    params.comment = request.comment;
    params.secCd = request.secCd;
    handleAjax(SERVER_URL + "/api/AP1205.json", params, callbackSuccess, callbackFail);
  }

  //대댓글 수정
  NY.AP1206 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.seqNo) ||
      isEmptyParameter(request.comment) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1206", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.frcsCustNo = request.frcsCustNo;
    params.seqNo = request.seqNo;
    params.comment = request.comment;
    handleAjax(SERVER_URL + "/api/AP1206.json", params, callbackSuccess, callbackFail);
  }

  //대댓글 삭제
  NY.AP1207 = function(request, callbackSuccess, callbackFail) {
    if (isEmptyParameter(request.frcsCustNo) ||
      isEmptyParameter(request.seqNo) ||
      isEmptyParameter(callbackSuccess) ||
      isEmptyParameter(callbackFail)) {
      callbackFail("AP1207", "You missed some parameter.");
      return;
    }
    var params = new Object();
    params.frcsCustNo = request.frcsCustNo;
    params.seqNo = request.seqNo;
    handleAjax(SERVER_URL + "/api/AP1207.json", params, callbackSuccess, callbackFail);
  }


  function isEmptyParameter(parameter) {
    return parameter === undefined || parameter === null || parameter === '';
  }

  function handleAjax(url, params, callbackSuccess, callbackFail) {
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      data: params,
      cache: false,
      crossDomain: true,
      success: function(data) {

        var code = data.resCd;
        var message = data.resMsg;
        if (code == "0000") {
          var result = data.result;
          callbackSuccess(result);
        } else {
          callbackFail(code, message);
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        callbackFail(textStatus, errorThrown);
      }
    });
  }

}(window.NY = window.NY = {}, jQuery));

function getCurrentDate() {
  var now = new Date();
  var yyyy = '' + now.getFullYear();
  var mm = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
  var dd = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();
  return yyyy + mm + dd;
}
