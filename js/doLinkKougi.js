$(function () {
  const BASE_NOTIFY_URL = "https://lms.ynu.ac.jp/lms/infrInfl/doIndex;SID=";
  const s_id = location.href.split("SID=")[1];
  let form = main();
  async function main() {
    const rawRes = await fetch(BASE_NOTIFY_URL + s_id);
    const resHtml = await rawRes.text();
    const parser = new DOMParser();
    const infoDocument = parser.parseFromString(resHtml, "text/html");
    console.log(infoDocument.getElementById("list_form"));
    let aaa = infoDocument.getElementById("list_form");
    // return infoDocument.getElementById("list_form");
    $.ajax({
      type: "POST",
      url: " https://lms.ynu.ac.jp/lms/infrInal/index;SID=" + s_id,
      data: $(aaa).serialize(),
      success: function (data) {
        console.log(
          parser
            .parseFromString(data, "text/html")
            .getElementsByClassName("cs_table2")[0]
        );
        // block.html(data);
        /* Callback */
        if (callback != undefined) {
          callback();
        }
      },
      error: function (request) {
        /* 認証エラー */
        if (request.status == 403) {
          location.href = property.pathnames["403"];
        } else if (request.status == 0 || request.status == 200) {
          /* HTMLを受信したが、既に書き換え対象のDIVが（画面切り替え等で）無くなっていた */
        } else {
          /* システムエラー */
          var errorPath = request.getResponseHeader("Error-Path");
          if (errorPath) {
            location.href = errorPath;
          } else {
            location.href = property.pathnames["500"];
          }
        }
      },
    });
  }
});
