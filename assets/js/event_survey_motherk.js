function getId() {

  var url = document.location.href;
  var sKey = "custId";
  var sQueryString = url.substring(url.indexOf('?') + 1);
  var aParam = {};

  if (sQueryString) {
    var aFields = sQueryString.split("&");
    var aField = [];
    for (var i = 0; i < aFields.length; i++) {
      aField = aFields[i].split('=');
      aParam[aField[0]] = aField[1];
    }
  }

  aParam.page = aParam.page ? aParam.page : 1;
  var idd = sKey ? aParam[sKey] : aParam;

  return idd;
}

function requstEvent() {
  var name1 = $('#name').val();
  var mobileno = $('#mobileno').val();
  var addr1 = $('#addr1').val();
  var addr2 = $('#addr2').val();
  var mkMallId = $('#inputMotherKId').val();
  var snsUrl = $('#inputSNSUrl').val();

  var ans1 = $('input[name="question01"]:checked').val();
  var ans2 = $('input[name="question02"]:checked').val();
  var ans3 = "";
  var ans4 = $('input[name="question03"]:checked').val();
  var ans5 = $('input[name="question03_1"]:checked').val();

  if (!$("input:radio[name='question01']").is(":checked")) {
    alert('첫번째 질문에 응답해주세요.');
    return false;
  }

  if (!$("input:radio[name='question02']").is(":checked")) {
    alert('두번째 질문에 응답해주세요.');
    return false;
  }

  if (name1 == null || name1.length <= 0) {
    alert('이름을 입력해주세요.');
    return false;
  }

  if (mobileno == null || mobileno.length <= 0) {
    alert('전화번호를 입력해주세요.');
    return false;
  }

  if (addr1 == null || addr1.length <= 0) {
    alert('주소를 입력해주세요.');
    return false;
  }

  if (agreeCheckBox.checked != true) {
    alert("개인정보 수집 및 이용동의를 확인해주세요.");
    return false;
  }

  if(ans1 == "기타") {
    ans1 = $('#inputQ1Etc').val();
  }

  $("input[name=question02_1]:checked").each(function() {
    if (ans3 == "") {
      ans3 = $(this).val();
    } else {
      ans3 += "," + $(this).val();
    }
  });

  if(ans3.indexOf("기타") >= 0 ) {
    ans3 += "," + $('#inputQ2-1Etc').val();
  }

  if(ans4 == "기타") {
    ans4 = $('#inputQ3Etc').val();
  }

  if(ans5 == "기타") {
    ans5 = $('#inputQ3-1Etc').val();
  }

  var params = new Object();
  params.ans1 = ans1;
  params.ans2 = ans2;
  params.ans3 = ans3;
  params.ans4 = ans4;
  params.ans5 = ans5;
  params.custName = name1;
  params.custPhoneNo = mobileno;
  params.custAdd1 = addr1;
  params.custAdd2 = addr2;
  params.mkMallId = mkMallId;
  params.snsUrl = snsUrl;
  params.frcsCustNo = $('#custId').val();
  params.evtGbnCd = '4'; // 이벤트구분코드 (1:현대해상 2: SKB 3:핀덴베베 4:마더케이)

  applyEvent(params);
}

function getMyInfo(custId) {

  var params = new Object();
  params.frcsCustNo = custId;

  $.ajax({
    url: 'http://222.239.97.157:45100/api/AP012.json',
    type: 'POST',
    dataType: "json",
    cache: false,
    crossDomain: true,
    data: params,
    success: function(data) {
      console.log(data);
      var code = data.resCd;
      var message = data.resMsg;
      if (code == "0000") {
        setUserInfo(data.result);
      } else {
        console.log("정보불러오기 실패~~ \n" + code + " : " + message);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("에러 발생~~ \n" + textStatus + " : " + errorThrown);
      // localStorage.removeItem('tempPhoneNo');
    }
  });
}

function setUserInfo(info) {
  // console.log(info);
  /*info.custName = "이지희";
  info.custPhoneNo = "01085783460";
  info.custMail = "email";
  info.custAdd1 = "add1";
  info.custAdd2 = "add2";
  info.custRelGbnCd = "4";
  info.pccData = "";
  info.birtDate = "";*/

  $('#name').val(info.custName);
  $('#mobileno').val(info.custPhoneNo);
  $('#addr1').val(info.custAdd1);
  $('#addr2').val(info.custAdd2);
}

function applyEvent(params) {
  console.log(params);
  $.ajax({
    url: 'http://222.239.97.157:45100/api/AP405.json',
    type: 'POST',
    dataType: "json",
    cache: false,
    crossDomain: true,
    data: params,
    success: function(data) {
      console.log(data);
      var code = data.resCd;
      var message = data.resMsg;

      if (code == "0000") {
        var result = data.result;
        var resultMessage = result.resMsg;
        var actFlag = result.actFlag;
        // alert('이벤트 신청이 완료되었습니다.');
        // 이벤트 참여 완료시 쿠폰 발급
        if (actFlag == 1) { // 설문참여 완료
          alert(resultMessage);
          location.href = "echoss://dismissPage";
        } else {
          alert(resultMessage);
        }
      } else {
        alert(message);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("에러 발생~~ \n" + textStatus + " : " + errorThrown);
    }
  });

}
