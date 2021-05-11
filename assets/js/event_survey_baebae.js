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

  var genderarget = document.getElementById("selBabyGen"); // 자녀 성별
  // var birthData1target = document.getElementById("birthData1"); // 자녀 생년월일
  // var birthData2target = document.getElementById("birthData2");
  // var birthData3target = document.getElementById("birthData3");

  var name1 = $('#name').val();
  var mobileno = $('#mobileno').val();
  var addr1 = $('#addr1').val();
  var addr2 = $('#addr2').val();
  var babyName = $('#babyName').val();

  var babyGen = genderarget.options[genderarget.selectedIndex].text;
  babyGen = babyGen == "선택" ? "" : babyGen;

  var babyBirth = $('#datepicker01').val();

  // var birth1 = birthData1target.options[birthData1target.selectedIndex].text;
  // birth1 = birth1 == "선택" ? "" : birth1;
  //
  // var birth2 = birthData2target.options[birthData2target.selectedIndex].text;
  // birth2 = birth2 == "선택" ? "" : birth2;
  //
  // var birth3 = birthData3target.options[birthData3target.selectedIndex].text;
  // birth3 = birth3 == "선택" ? "" : birth3;


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

  if (babyName == null || babyName.length <= 0) {
    alert('자녀의 이름을 입력해주세요.');
    return false;
  }

  if (babyGen == null || babyGen.length <= 0) {
    alert('자녀의 성별을 선택해주세요.');
    return false;
  }

  if (babyBirth == null || babyBirth.length <= 0) {
    alert('자녀의 생년월일을 입력해주세요.');
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
  params.babyName = babyName;
  params.babyGender = babyGen;
  // params.babyBirth = birth1 + birth2 + birth3;
  params.babyBirth = babyBirth;
  params.frcsCustNo = $('#custId').val();
  params.evtGbnCd = '3'; // 이벤트구분코드 (1:현대해상 2: SKB 3:핀덴베베)

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
