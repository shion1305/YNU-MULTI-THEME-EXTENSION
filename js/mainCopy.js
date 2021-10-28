(async () => {
  let infoId = await getInfoId();
  if(!infoId){
    infoId = 0;
  }
  const infoText = await getInfoText(infoId);
  console.log(infoText);
})();
async function getInfoId(){
  const homeUrl = "https://lms.ynu.ac.jp/lms/homeHoml";
  const homeResponse = await fetch(homeUrl);
  const homeHtmlString = await homeResponse.text();
  const parser = new DOMParser();
  const homeDocument = parser.parseFromString(homeHtmlString, "text/html");
  // const b = document.getElementById("cs_mainInfo").getElementsByTagName("ul").getAttribute("id");
  const infoAnchorTags = homeDocument.getElementById("cs_mainInfo").getElementsByTagName("ul")[0].getElementsByTagName("a");
  for(const tag of infoAnchorTags){
    if(tag.innerText.includes("Zoom")){
      const onclick = tag.getAttributeNode("onclick");
          // "formSubmit(<講義ID>)" から<講義ID> のみを抽出
          var infoId = onclick.value.match(/'([^"]+)'/)[1].slice(0,16);
          // console.log(infoId);
          const newInfoId = infoId;
          return newInfoId;
    }
  }
}
async function getInfoText(infoId){
  if(!infoId){
    console.log("データ無いっす。")
  }else{
          const infoUrl = "https://lms.ynu.ac.jp/lms/infrInfr/index?infId=" + infoId + "&infType=02";
          const infoResponse = await fetch(infoUrl);
          const infoHtmlString = await infoResponse.text();
          const parser = new DOMParser();
          const infoDocument = parser.parseFromString(infoHtmlString, "text/html");
          const infoTrText = infoDocument.getElementById("cs_centerinVox").getElementsByClassName("cs_table3a")[0].getElementsByTagName("tr")[5].innerHTML;
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
