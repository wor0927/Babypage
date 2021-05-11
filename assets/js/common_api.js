/*
  since  : 2020-08-14 오후 1:41
  func   : 브랜드 팔로우/팔로잉
  des    : textObject는 페이지에서 팔로우 숫자를 표시해줄 경우에만 태그를 넣어준다
  param  : btnObject  : 팔로우 버튼객체,
           brandCode  : 브랜드 코드 (PK)
           frcsCustNo : id
           textObject : 팔로우 숫자 텍스트 오브젝트
*/
function followBrand(btnObject, brandCode, frcsCustNo, textObject) {
  event.stopPropagation();

  var nowCnt = parseInt($(textObject).text());
  var nowText = $(btnObject).text();
  var stCode, color;
  if (nowText.indexOf("팔로우") > 0 || nowText === "팔로우") {
    color = "#c8c8c8";
    nowText = "팔로잉";
    stCode = 1;
    nowCnt = nowCnt + 1;
  } else {
    color = "#68C0B5";
    nowText = "팔로우";
    stCode = 0;
    nowCnt = ((nowCnt - 1) <= 0) ? 0 : nowCnt - 1;
  }

  apiSend('/shop/brandFollow.json', {
    frcsCustNo: frcsCustNo,
    brand_code: brandCode,
    st_cd: stCode
  }, function (data) {

    $(btnObject).text(nowText);
    $(btnObject).css("background-color", color);

    if (textObject != undefined)
      $(textObject).text(nowCnt);
  }, function (msg) {
    console.log('브랜드팔로우에 실패하였습니다' + msg);
    msgAlert('팔로우에 실패하였습니다.\n 잠시후 다시 시도해 주세요.' + msg);
  });

}

/*
since  : 2020-08-14 오후 3:47
func   : 유저 팔로우/팔로잉
des    : textObject는 페이지에서 팔로우 숫자를 표시해줄 경우에만 태그를 넣어준다
param  : btnObject  : 팔로우 버튼객체,
         fromId     : from user id
         frcsCustNo : target user id
         textObject : 팔로우 숫자 텍스트 오브젝트
*/
function followUser(btnObject, fromId, toId, textObject) {
  event.stopPropagation();

  var nowCnt = parseInt($(textObject).text());
  var nowText = $(btnObject).text();
  var stCode, color;

  if (nowText.indexOf('팔로우') > 0 || nowText === "팔로우") {
    color = "#c8c8c8";
    nowText = "팔로잉";
    stCode = 1;
    nowCnt = nowCnt + 1;
  } else {
    color = "#68C0B5";
    nowText = "팔로우";
    stCode = 0;
    nowCnt = ((nowCnt - 1) <= 0) ? 0 : nowCnt - 1;
  }

  apiSend('/customers/follow.json', {
    frcsCustNo: fromId,
    target_id: toId,
    st_cd: stCode
  }, function (data) {
    var allTarget = '.' + toId;
    $(allTarget).text(nowText);
    $(allTarget).css("background-color", color);

    //$(btnObject).text(nowText);
    // $(btnObject).css("background-color", color);

    if (textObject != undefined)
      $(textObject).text(nowCnt);

    // window.location.replace(window.location);
  }, function (msg) {
    console.log('팔로우에 실패하였습니다' + msg);
    msgAlert('팔로우에 실패하였습니다.\n 잠시후 다시 시도해 주세요.' + msg);
  });
}


/*
since  : 2020-10-07
func   : 리뷰 좋아요
des    : textObject는 페이지에서 팔로우 숫자를 표시해줄 경우에만 태그를 넣어준다
param  : imgObject  : 이미지 버튼객체
         seqNo      : 리뷰 seq_no
         frcsCustNo : id
         textObject : like 숫자 텍스트 오브젝트
*/
function reviewLike(imgObject, seqNo, frcsCustNo, textObject) {
  event.stopPropagation();

  var nowCnt = parseInt($(textObject).text());
  var stCode = '';
  var likeStatus = $(imgObject).attr('alt');

  if (likeStatus == "unlike") {
    likeStatus = "like";
    stCode = 1;
    nowCnt = nowCnt + 1;
  } else {
    likeStatus = "unlike";
    stCode = 0;
    nowCnt = ((nowCnt - 1) <= 0) ? 0 : nowCnt - 1;
  }

  apiSend('/review/like.json', {
    frcsCustNo: frcsCustNo,
    seq_no: seqNo,
    st_cd: stCode
  }, function (data) {
    $(imgObject).attr('alt', likeStatus);

    if (likeStatus == "unlike") {
      $(imgObject).attr('src', '/resources/assets/img/review/like_icon_gray.png');
    } else {
      $(imgObject).attr('src', '/resources/assets/img/review/like_icon_green.png');
    }

    if (textObject != undefined)
      $(textObject).text(nowCnt);
  }, function (msg) {
    console.log('리뷰 좋아요에 실패하였습니다' + msg);
    msgAlert('리뷰 좋아요에 실패하였습니다.\n 잠시후 다시 시도해 주세요.' + msg);
  });
}

/*
sin