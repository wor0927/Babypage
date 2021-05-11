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

  var target = document.getElementById("selRel");
  var imDataTarget = document.getElementById("imDate");
  var birthData1target = document.getElementById("birthData1");
  var birthData2target = document.getElementById("birthData2");
  var birthData3target = document.getElementById("birthData3");

  var mobileDatatarget = document.getElementById("selTelecom");

  var name1 = $('#name').val();
  var mobileno = $('#mobileno').val();
  var emailAd = $('#emailAd').val();
  var addr1 = $('#addr1').val();
  var addr2 = $('#addr2').val();
  var relIndex = selRel.options[selRel.selectedIndex].index;
  var relati = relIndex > 0 ? --relIndex : "";
  var relText = selRel.options[selRel.selectedIndex].text;

  var imData = imDataTarget.options[imDataTarget.selectedIndex].text;
  imData = imData == "선택" ? "" : imData;

  var birth1 = birthData1target.options[birthData1target.selectedIndex].text;
  birth1 = birth1 == "선택" ? "" : birth1;

  var birth2 = birthData2target.options[birthData2target.selectedIndex].text;
  birth2 = birth2 == "선택" ? "" : birth2;

  var birth3 = birthData3target.options[birthData3target.selectedIndex].text;
  birth3 = birth3 == "선택" ? "" : birth3;

  var twin = (twinCheckBox.checked == false) ? 'N' : 'Y';

  var telecom = mobileDatatarget.options[mobileDatatarget.selectedIndex].text;
  telecom = telecom == "선택" ? "" : telecom;

  var params = new Object();
  params.custName = name1;
  params.custPhoneNo = mobileno;
  params.custMail = emailAd;
  params.custAdd1 = addr1;
  params.custAdd2 = addr2;
  params.custRelGbnCd = relati;
  params.pregWeeks = imData;
  params.babyBirth = birth1 + birth2 + birth3;
  params.twinsBabyYn = twin;
  params.frcsCustNo = $('#custId').val();
  params.telecom = telecom; // 사용통신사
  params.evtGbnCd = '2'; // 이벤트구분코드 (1:현대해상 2: SKB)

  if (name1 == null || name1.length <= 0) {
    alert('이름을 입력해주세요.');
    return false;
  }

  if (mobileno == null || mobileno.length <= 0) {
    alert('전화번호를 입력해주세요.');
    return false;
  }

  if (emailAd == null || emailAd.length <= 0) {
    alert('이메일을 입력해주세요.');
    return false;
  }

  if (addr1 == null || addr1.length <= 0) {
    alert('주소를 입력해주세요.');
    return false;
  }

  if (addr2 == null || addr2.length <= 0) {
    alert('상세 주소를 입력해주세요.');
    return false;
  }

  if (relati === "선택") {
    alert('아이와의 관계를 선택해주세요.');
    return false;
  }

  if (telecom == null || telecom == "" || telecom.length <= 0) {
    alert('사용중인 통신사를 선택해주세요.');
    return false;
  }

  if (imData == "" && relText == "엄마") {
    //	alert('임신주수를 선택해주세요.');
    //	return false;
  }

  if (birth1 == "" && relText == "엄마") {
    //	alert('출산예정일 년도를 선택해주세요.');
    //	return false;
  }

  if (birth2 == "" && relText == "엄마") {
    //	alert('출산예정일 월을 선택해주세요.');
    //	return false;
  }

  if (birth3 == "" && relText == "엄마") {
    //	alert('출산예정일 일을 선택해주세요.');
    //	return false;
  }

  if (agreeCheckBox.checked != true) {
    alert("개인정보 수집 및 이용동의를 확인해주세요.");
    return false;
  }
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

function disableForm() {
  $("#imDate").not(":selected").attr("disabled", true);
  $("#birthData1").not(":selected").attr("disabled", true);
  $("#birthData2").not(":selected").attr("disabled", true);
  $("#birthData3").not(":selected").attr("disabled", true);

  $("#imDate option:eq(0)").prop("selected", true);
  $("#birthData1 option:eq(0)").prop("selected", true);
  $("#birthData2 option:eq(0)").prop("selected", true);
  $("#birthData3 option:eq(0)").prop("selected", true);
}

function ableForm() {
  $("#imDate").not(":selected").attr("disabled", false);
  $("#birthData1").not(":selected").attr("disabled", false);
  $("#birthData2").not(":selected").attr("disabled", false);
  $("#birthData3").not(":selected").attr("disabled", false);
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
  $('#emailAd').val(info.custMail);
  $('#addr1').val(info.custAdd1);
  $('#addr2').val(info.custAdd2);

  if (info.custRelGbnCd != undefined && info.custRelGbnCd.length > 0) {
    var index = ++info.custRelGbnCd;
    $("#selRel option:eq(" + index + ")").prop("selected", true);

    if (index != 1) {
      //	$("#imDate").not(":selected").attr("disabled", "disabled");
      //		$("#birthData1").not(":selected").attr("disabled", "disabled");
      //	$("#birthData2").not(":selected").attr("disabled", "disabled");
      //	$("#birthData3").not(":selected").attr("disabled", "disabled");
    }
  }

  if (info.pregWeeks != undefined && info.pregWeeks.length > 0)
    $("#imDate").val(info.pregWeeks).prop("selected", true);

  if (info.babyBirth != undefined && info.babyBirth.length > 0) {
    var year = info.babyBirth.substring(0, 4);
    var mon = info.babyBirth.substring(4, 6);
    var day = info.babyBirth.substring(6, 8);
    $("#birthData1").val(year).prop("selected", true);
    $("#birthData2").val(mon).prop("selected", true);
    $("#birthData3").val(day).prop("selected", true);
  }

  if (info.twinBabyYn != undefined && info.twinBabyYn.length > 0)
    twinCheckBox.checked = true;
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
        if (actFlag == 1) {
          cpnDownload(resultMessage);
        } else {
          alert(resultMessage);
          // location.href = "echoss://dismissPage";
          // $('#applySuccessModal').modal('show');
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

// 이벤트 신청 후 쿠폰 발급
function cpnDownload(msg) {
  showLoading();

  var params = new Object();
  params.frcsCustNo = $('#custId').val();
  params.cpnCd = "V00A003B004M00044S0005CCP001C0000009";

  console.log(params);
  $.ajax({
    url: 'http://222.239.97.157:45100/api/AP204.json',
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
        hideLoading();
        alert(msg);
        location.href = "echoss://dismissPage";
      } else {
        alert(message);
        hideLoading();
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      hideLoading();
      console.log("에러 발생~~ \n" + textStatus + " : " + errorThrown);
    }
  });
}
