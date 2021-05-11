var SVR_URL = 'https://iandna.biz';

function apiSend(url, params, sucessCb, failCb) {
  var errPath = new Error().stack;
  $.ajax({
    type: "POST",
    url: SVR_URL + url,
    data: params,
    async : true,
    timeout : 30000,
    cache: false,
    crossDomain: true,
    success: function (data) {
      var code = data.resCd;
      var message = data.resMsg;
      if (code == "0000") {
        sucessCb(data.result);
      } else {
        //saveErrorMSg(params, message);
        failCb(message);
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      //saveErrorMSg(params, textStatus, errPath);
      console.log("apiSend:: ", url, textStatus);
      // msgAlert('알수없는 에러가 발생하였습니다.\n' + '잠시후 다시 시도해주시기 바랍니다.');
    }
  });
}
