// ヘッダーは最初から表示
injectHeader();

// メイン処理
(async () => {
    const cachedData = await getFromStorage();
    console.log(cachedData);
    // storage にデータが格納されている場合
    if (Object.keys(cachedData).length > 10) {
        const homeworks = cachedData.homeworks;
        injectTable(homeworks);
    }
    else {
        let homeworks = [];
        let infoId = '';
        //お知らせのID(提出期限通知の内最新のもの)を取得
        infoId = await getInfoId();
        //提出期限通知のDOMとテキストを取得
        const infoText = await getInfoText(infoId);
        //ここでテキストから宿題の情報に変換するメソッドを設定。
        homeworks = arrangeToHomeworks(infoText);
        console.log(homeworks);
        injectTable(homeworks);
        saveToStorage(homeworks);
    }
})();

class Homework {
    constructor(title, lecName, deadline, anchor) {
        this.title = title;
        this.lecName = lecName;
        this.deadline = deadline;
        this.anchor = anchor;
    }
}

function injectHeader() {
    const upperElement = document.querySelector("#cs_loginInfo");

    // ヘッダーの親要素を追加
    const parent = document.createElement("div");
    parent.id = "homework_list";
    upperElement.after(parent);

    // 「未実施の課題」を表示
    const header = document.createElement("div");
    header.id = "main";
    header.style.marginLeft = "3px";
    header.innerHTML = `<div id="title"> <h2>提出期限課題</h2> </div>`;

    const marginDiv = document.createElement("div");
    marginDiv.className = "margin_div";

    parent.appendChild(header);
    header.after(marginDiv);
}

async function getFromStorage() {
    return new Promise(resolve => {
        chrome.storage.local.get((data) => {resolve(data)});
    });
}

function saveToStorage(homeworks) {
    const unixTime = Date.now() / 1000;
    const data = {
        "homeworks": homeworks,
        "unixTime": unixTime
    };

    chrome.storage.local.set(data, function() {});
}
function injectTable(homeworks) {
    const parent = document.querySelector("#homework_list");
    const newTable = document.createElement("table");
    const tr = document.createElement("tr");
    tr.className = "new_table";

    newTable.appendChild(tr);

    if (homeworks.length == 0) {
        const tr = document.createElement("tr");
        tr.className = "new_table";

        const td = document.createElement("td");
        td.innerText = "課題はありません";

        tr.appendChild(td);
        newTable.appendChild(tr);
    }
    else {
        for (const hw of homeworks) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");

            const td1a = document.createElement("a");

            td1a.innerText = hw.title;
            td1a.setAttribute("href","https://lms.ynu.ac.jp/lms/corsColl/linkKyozaiTitle?kyozaiId=" + hw.anchor + "&kyozaiSyCdHidden=02");
            td2.innerText = hw.lecName;
            td3.innerText = hw.deadline;

            td1.appendChild(td1a);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            tr.className = "new_table";
            newTable.appendChild(tr);
        }
    }

    // const marginDiv = document.createElement("div");
    // marginDiv.className = "margin_div";
    const marginDiv = document.getElementsByClassName("margin_div")[0];
    marginDiv.appendChild(newTable);
    parent.appendChild(marginDiv);

}

async function getInfoId(){
  const homeUrl = "https://lms.ynu.ac.jp/lms/homeHoml";
  const homeResponse = await fetch(homeUrl);
  const homeHtmlString = await homeResponse.text();
  const parser = new DOMParser();
  const homeDocument = parser.parseFromString(homeHtmlString, "text/html");
  // const b = document.getElementById("cs_mainInfo").getElementsByTagName("ul").getAttribute("id");
  const infoAnchorTags = homeDocument.getElementById("cs_mainInfo").getElementsByTagName("ul")[1].getElementsByTagName("a");
  // for(const tag of infoAnchorTags){
  //   if(tag.innerText.includes("レポート提出期限通知")){
  //     const onclick = tag.getAttributeNode("onclick");
  //         // "formSubmit(<講義ID>)" から<講義ID> のみを抽出
  //         var infoId = onclick.value.match(/'([^"]+)'/)[1].slice(0,16);
  //         // console.log(infoId);
  //         const newInfoId = infoId;
  //         return newInfoId;
  //   }
  // }
  return 'INF0000007120924';
}
async function getInfoText(infoId){
  if(!infoId){
    return;
  }else{
          const infoUrl = "https://lms.ynu.ac.jp/lms/infrInfr/index?infId=" + infoId + "&infType=03";
          const infoResponse = await fetch(infoUrl);
          const infoHtmlString = await infoResponse.text();
          const parser = new DOMParser();
          const infoDocument = parser.parseFromString(infoHtmlString, "text/html");
          const infoTrText = infoDocument.getElementById("cs_centerinVox").getElementsByClassName("cs_table3a")[0].getElementsByTagName("tr")[4].innerHTML;
          var div = document.createElement('div');
          div.style.display = 'none';
          div.innerHTML = infoTrText; //html要素に変換
          div.id = 'infoTrText';
          document.body.appendChild(div); //bodyに追加
          const infoBoldText = document.getElementById("infoTrText").getElementsByTagName("b")[0].innerText;
          const infoBoldHtml = document.getElementById("infoTrText").getElementsByTagName("b")[0].innerHTML;
          // console.log(infoBoldText);
          document.body.removeChild(div); //bodyから削除
          const infoText = [infoBoldText,infoBoldHtml];
          return infoText;
        }
}
function arrangeToHomeworks(infoText){
  const homeworks = [];
  const homeworksInfo = infoText[0].split('-');
  const parser = new DOMParser();
  const homeworkInfoDocument = parser.parseFromString(infoText[1], "text/html");
  const homeworksAnchor = homeworkInfoDocument.getElementsByTagName("a");
  for(i=1;i<homeworksInfo.length;i++){
    const homeworkInfo = homeworksInfo[i].split(/ > |202/);
    const title = homeworkInfo[2].slice(0,-1);
    const lecName = homeworkInfo[0];
    const deadline = '202' + homeworkInfo[3].slice(0,-1);

    const onclick = homeworksAnchor[i - 1].getAttributeNode("onclick");
    const anchor = onclick.value.match(/'([^"]+)'/)[1].slice(0,16);

    const homework = new Homework(title, lecName, deadline, anchor);
    homeworks.push(homework);
  }
  return homeworks;
}
