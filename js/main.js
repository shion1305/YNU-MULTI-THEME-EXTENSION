getNoticeInfo();
async function getNoticeInfo(){
  // const lecId = uniqueLecIds[i];
  const url = "https://lms.ynu.ac.jp/lms/homeHoml/linkKougi?kougiId=" + "KOG0000000116175";

  const response = await fetch(url);
  const htmlString = await response.text();
  console.log(htmlString);
}
