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
  var familyInfo = $('#familyInfo').val();
  var pictype = getCheckPicType();

  console.log("pictype = ", pictype);

  var getLocation = document.getElementById("selLocation"); // 원하는 지점
  var location = getLocation.options[getLocation.selectedIndex].text;
  location = location == "선택" ? "" : location;

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

  if (addr2 == null || addr2.length <= 0) {
    alert('상세 주소를 입력해주세요.');
    return false;
  }

  if (familyInfo == null || familyInfo.length <= 0) {
    alert('신청인원과 구성원의 나이를 입력해주세요.');
    return false;
  }

  if (pictype == null || pictype.length <= 0) {
    alert('원하시는 촬영상품을 선택해주세요.');
    return false;
  }

  if (location == null || location.length <= 0) {
    alert('원하시는 촬영지점을 선택해주세요.');
    return false;
  }

  if (agreeCheckBox.checked != true) {
    alert("개인정보 수집 및 이용동의를 확인해주세요.");
    return false;
  }

  var params = new Object();
  params.custName = name1;
  params.custPhoneNo = mobileno;
  params.custAdd1 = addr1;
  params.custAdd2 = addr2;
  params.familyInfo = familyInfo;
  params.picGbnCd = pictype;
  params.location = location;
  params.frcsCustNo = $('#custId').val();
  params.evtGbnCd = '5'; // 이벤트구분코드 (1:현대해상 2: SKB 3:핀덴베베 5:컬러스포토)

  applyEvent(params);
}

function getCheckPicType() {
  var getPicType = "";
  $("input:checkbox[name='check_picType']").each(function() {
    if ($(this).is(":checked") == true) {
      getPicType += "1^";
    } else {
      getPicType += "0^";
    }
  });

  if (getPicType != "" && getPicType.length > 0) {
    getPicType = getPicType.substring(0, getPicType.length - 1);
  }

  return getPicType;
}

function getMyInfo(custId) {

  var params = new Object();
  params.frcsCustNo = custId;

  $.ajax({
    url: 'https://nybb.xyz:45110/api/AP012.json',
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
    url: 'https://nybb.xyz:45110/api/AP405.json',
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
