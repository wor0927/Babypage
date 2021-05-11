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

function requstEvent(type) {

  var target = document.getElementById("selRel");
  var imDataTarget = document.getElementById("imDate");
  var birthData1target = document.getElementById("birthData1");
  var birthData2target = document.getElementById("birthData2");
  var birthData3target = document.getElementById("birthData3");

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

  var params = new Object();
  params.cust_name = name1;
  params.cust_phone_no = mobileno;
  params.cust_mail = emailAd;
  params.cust_add1 = addr1;
  params.cust_add2 = addr2;
  params.cust_rel_gbn_cd = relati;
  params.preg_weeks = imData;
  params.baby_birth = birth1 + birth2 + birth3;
  params.twins_baby_yn = twin;
  params.frcsCustNo = $('#custId').val();
  params.evt_gbn_cd = type; // '1'; // 이벤트구분코드 (1:현대해상 2: SKB , 3: 핀덴베베)

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

function requstFroebelEvent() {

    var birthData1target = document.getElementById("birthData1");
    var birthData2target = document.getElementById("birthData2");
    var birthData3target = document.getElementById("birthData3");

    var name1 = $('#name').val();
    var mobileno = $('#mobileno').val();
    var emailAd = $('#emailAd').val();
    var addr1 = $('#addr1').val();
    var addr2 = $('#addr2').val();
    var babyName = $('#babyName').val();

    var birth1 = birthData1target.options[birthData1target.selectedIndex].text;
    birth1 = birth1 == "선택" ? "" : birth1;

    var birth2 = birthData2target.options[birthData2target.selectedIndex].value;
    birth2 = birth2 == "선택" ? "" : birth2;

    var birth3 = birthData3target.options[birthData3target.selectedIndex].value;
    birth3 = birth3 == "선택" ? "" : birth3;

    var params = new Object();

    params.cust_name = name1;
    params.cust_phone_no = mobileno;
    params.cust_mail = emailAd;
    params.cust_add1 = addr1;
    params.cust_add2 = addr2;
    params.baby_name = babyName;
    params.baby_birth = birth1 + birth2 + birth3;
    params.frcsCustNo = $('#custId').val();
    params.evt_gbn_cd = '6';

    /*
    params.custName = name1;
    params.custPhoneNo = mobileno;
    params.custAdd1 = emailAd;
    params.custAdd2 = addr1;
    params.mkMallId = addr2;
    params.snsUrl = babyName;
    params.ans1 = birth1 + birth2 + birth3;
    params.ans2 = '';
    params.ans3 = '';
    params.ans4 = '';
    params.ans5 = '';
    params.frcsCustNo = $('#custId').val();
    params.evtGbnCd = '4';*/

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

    if (babyName == null || babyName.length <= 0) {
      alert('아이 이름을 입력해주세요.');
      return false;
    }

    if (birth1 == "") {
      alert('아이 생일 년도를 선택해주세요.');
      return false;
    }

    if (birth2 == "") {
      alert('아이 생일 월을 선택해주세요.');
      return false;
    }

    if (birth3 == "" && relText == "엄마") {
      alert('아이 생일 일자를 선택해주세요.');
      return false;
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
    url: 'https://iandna.biz/customers/getMyInfo.json',
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
  /*	info.name ="이찬환";
		info.phone ="01049148330";
		info.email ="email";
		info.add1 ="add1";
		info.add2 ="add2";
		info.rel ="";
		info.pccData ="";
		info.birtDate ="";*/

  $('#name').val(info.name);
  $('#mobileno').val(info.phone_no);
  $('#emailAd').val(info.email);
  $('#addr1').val(info.address1);
  $('#addr2').val(info.address2);

  if (info.rel_gbn_cd != undefined && info.rel_gbn_cd.length > 0) {
    var index = ++info.rel_gbn_cd;
    $("#selRel option:eq(" + index + ")").prop("selected", true);

    if (index != 1) {
      //	$("#imDate").not(":selected").attr("disabled", "disabled");
      //		$("#birthData1").not(":selected").attr("disabled", "disabled");
      //	$("#birthData2").not(":selected").attr("disabled", "disabled");
      //	$("#birthData3").not(":selected").attr("disabled", "disabled");
    }
  }

  if (info.preg_weeks != undefined && info.preg_weeks.length > 0)
    $("#imDate").val(info.preg_weeks).prop("selected", true);

  if (info.baby_birth1 != undefined && info.baby_birth1.length > 0) {
    // var year = info.baby_birth1.substring(0, 4);
    // var mon = info.baby_birth1.substring(4, 6);
    // var day = info.baby_birth1.substring(6, 8);
    // $("#birthData1").val(year).prop("selected", true);
    // $("#birthData2").val(mon).prop("selected", true);
    // $("#birthData3").val(day).prop("selected", true);
  }

  if (info.twin_baby_yn != undefined && info.twin_baby_yn.length > 0)
    twinCheckBox.checked = true;
}

function applyEvent(params) {
  console.log(params);
  $.ajax({
    url: 'https://iandna.biz/event/join.json',
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
        var actFlag = result.act_flag;
        // alert('이벤트 신청이 완료되었습니다. 상담 통화 후 모바일 쿠폰이 발송됩니다.');
        if (actFlag == 1) { // 설문참여 완료
          alert('이벤트 참여가 완료되었습니다.');
          $("#evt_submit").attr("disabled", true).attr("style", "background-color: gray !important").text("참여 완료");
          //window.close();
          //location.href = "ivory://dismissPage";
        } else {
          alert(resultMessage);
          $("#evt_submit").attr("disabled", true).attr("style", "background-color: gray !important").text("참여 완료");
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
