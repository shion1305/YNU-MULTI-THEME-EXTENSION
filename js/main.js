omit();
showNextLecture();
showTodayLecture();
function omit() {
  const elements = document.getElementsByClassName("courseCardName");
  for(const elt of elements) {
    const lectureLinkHTML = elt.childNodes[1];
    let lectureName = elt.childNodes[2].textContent; 
  
    if (lectureName.includes("[")) {
      elt.childNodes[2].textContent = lectureName.split("[")[0];
    }
    if (lectureName.includes("(")) {
      elt.childNodes[2].textContent = elt.innerText.split("(")[0];
    }
    if (lectureName.includes("【連絡専用】")) {
      elt.childNodes[2].textContent = elt.innerText.split("【連絡専用】")[1];
    }
    if (lectureName.includes("実施済み")) {
      elt.childNodes[2].textContent = "実施";
    }
  }
}

function showTodayLecture() {
  const dayBoxes = document.getElementsByClassName("dayBox");
  const unix_time = new Date();
  const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][unix_time.getDay()] + "曜日";

  for(const dayBox of dayBoxes) {
    if(dayBox.childNodes[1] && dayBox.childNodes[1].innerText.slice(-3) == dayOfWeek) {
      dayBox.childNodes[1].innerText = " 今日の講義 (" + dayBox.childNodes[1].innerText + " )";
      dayBoxes[0].before(dayBox);
    }
  }
}
function showNextLecture() {
  const dayBoxes = document.getElementsByClassName("dayBox");
  const unix_time = new Date();
  unix_time.setDate( unix_time.getDate() + 1)
  const dayOfWeek = ['月', '月', '火', '水', '木', '金', '月'][unix_time.getDay()] + "曜日";

  for(const dayBox of dayBoxes) {
    if(dayBox.childNodes[1] && dayBox.childNodes[1].innerText.slice(-3) == dayOfWeek) {
      dayBox.childNodes[1].innerText = " 次回の講義 (" + dayBox.childNodes[1].innerText + " )";
      dayBoxes[0].before(dayBox);
    }
  }
}

