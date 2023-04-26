let themeModeNum = 0;
const themeList = [
  {
    title: "デフォルト",
    color: {
      primary: "#005bac",
      secondary: "#e4f7ff",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "スカイ",
    color: {
      primary: "#58b2dc",
      secondary: "#e4f7fe",
      background: "#fffffe",
      text: "#2a2a2a",
      border: "#dddddd",
      primaryText: "#ffffff",
    },
  },
  {
    title: "ダーク",
    color: {
      primary: "#ff8906",
      secondary: "#6f6e77",
      background: "#4f4e57",
      text: "#fffffe",
      border: "#444444",
      primaryText: "#fffffe",
    },
  },
  {
    title: "グリーン",
    color: {
      primary: "#f9bc60",
      secondary: "#206663",
      background: "#004643",
      text: "#abd1c6",
      border: "#323232",
      primaryText: "#001e1d",
    },
  },
  {
    title: "パステル",
    color: {
      primary: "#b4d1d1",
      secondary: "#ffe7e5",
      background: "#fafafa",
      text: "#676766",
      border: "#dddddd",
      primaryText: "#fafafa",
    },
  },
  {
    title: "ピンク",
    color: {
      primary: "#f596aa",
      secondary: "#fedfe1",
      background: "#fef6f4",
      text: "#172c66",
      border: "#dddddd",
      primaryText: "#ffffff",
    },
  },
  {
    title: "イエロー",
    color: {
      primary: "#ffd803",
      secondary: "#e3f6f5",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#ffffff",
    },
  },
  {
    title: "オレンジ",
    color: {
      primary: "#ff8e3c",
      secondary: "#ffeebc",
      background: "#eff0f3",
      text: "#1b2d45",
      border: "#dddddd",
      primaryText: "#eff0f3",
    },
  },
  {
    title: "ライムグリーン",
    color: {
      primary: "#00ebc7",
      secondary: "#d4f1f1",
      background: "#fffffe",
      text: "#2a2a2a",
      border: "#ddd",
      primaryText: "#ffffff",
    },
  },
  {
    title: "レッド",
    color: {
      primary: "#fe4930",
      secondary: "#fee8e5",
      background: "#fffffe",
      text: "#2a2a2a",
      border: "#dddddd",
      primaryText: "#ffffff",
    },
  },
  {
    title: "シオン",
    color: {
      primary: "#8f77b5",
      secondary: "#ffe7f5",
      background: "#fcfcfc",
      text: "#2a2a2a",
      border: "#dddddd",
      primaryText: "#fcfcfc",
    },
  },
  {
    title: "ライトグリーン",
    color: {
      primary: "#80ff80",
      secondary: "#d4f1f1",
      background: "#fffffe",
      text: "#2a2a2a",
      border: "#dddddd",
      primaryText: "#ffffff",
    },
  },
  {
    title: "ホワイト",
    color: {
      primary: "#e8e8e8",
      secondary: "#fcfaf2",
      background: "#fffffb",
      text: "#2a2a2a",
      border: "#eeeeee",
      primaryText: "#2a2a2a",
    },
  },
  {
    title: "ブラック",
    color: {
      primary: "#4c4c4c",
      secondary: "#f4f2ea",
      background: "#fffffb",
      text: "#2a2a2a",
      border: "#eeeeee",
      primaryText: "#fffffb",
    },
  },
  {
    title: "ブラウン",
    color: {
      primary: "#43341b",
      secondary: "#f4f2ea",
      background: "#fffffb",
      text: "#2a2a2a",
      border: "#eeeeee",
      primaryText: "#fffffb",
    },
  },
  {
    title: "ライトブラウン",
    color: {
      primary: "#855b32",
      secondary: "#f4f2ea",
      background: "#fffffb",
      text: "#2a2a2a",
      border: "#eeeeee",
      primaryText: "#fffffb",
    },
  },
  {
    title: "経営学部",
    color: {
      primary: "#c99a06",
      secondary: "#fef8e6",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "教育学部・教育学研究科",
    color: {
      primary: "#72b12d",
      secondary: "#f2f9ea",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe;",
    },
  },
  {
    title: "経済学部",
    color: {
      primary: "#c22e6b",
      secondary: "#faeaf0",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "理工学部",
    color: {
      primary: "#00aaae",
      secondary: "#e5feff",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "都市科学部",
    color: {
      primary: "#c5c4ff",
      secondary: "#f4f4ff",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "国際社会科学研究科",
    color: {
      primary: "#e27102",
      secondary: "#fef1e5",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "理工学府・研究院",
    color: {
      primary: "#0085ce",
      secondary: "#e5f6ff",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "環境情報学府・研究院",
    color: {
      primary: "#009951",
      secondary: "#e5fff2",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "都市イノベーション学府・研究院",
    color: {
      primary: "#22304f",
      secondary: "#edf0f7",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "先端科学高等研究院",
    color: {
      primary: "#e60012",
      secondary: "#ffe5e7",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "附属図書館",
    color: {
      primary: "#80609b",
      secondary: "#f2eff5",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
  {
    title: "全学教育研究施設",
    color: {
      primary: "#659eb2",
      secondary: "#eef4f6",
      background: "#fffffe",
      text: "#2d334a",
      border: "#dddddd",
      primaryText: "#fffffe",
    },
  },
];
main();
function main() {
  const nowUrl = location.href;
  if (pageIsHome(nowUrl)) {
    toOldLms();
  } else if (pageIsLogin(nowUrl)) {
  } else {
    changeHeaderForm();
  }
  changeTheme();
}
function pageIsHome(nowUrl) {
  const homeUrls = [
    "https://lms.ynu.ac.jp/lms/homeHoml/doIndex",
    "https://lms.ynu.ac.jp/lms/homeHoml/doFindSession",
    "https://lms.ynu.ac.jp/lms/tpicTpil/doBack",
    "https://lms.ynu.ac.jp/lms/tpicTpic/doBack",
    "https://lms.ynu.ac.jp/lms/infrInfr/doBack",
    "https://lms.ynu.ac.jp/lms/infrInfr/doBack",
    "https://lms.ynu.ac.jp/lms/infrInfl/doBack",
  ];
  return (
    homeUrls.some((url) => url === nowUrl.split(";")[0]) &&
    document.getElementsByClassName("csbList")[0]
  );
}
function pageIsLogin(nowUrl) {
  const loginUrls = [
    "https://lms.ynu.ac.jp/lms/error/notLogin#",
    "https://lms.ynu.ac.jp/lms/lginLgir/",
  ];
  return loginUrls.some((url) => url === nowUrl.split(";")[0]);
}

// toOldLms

function toOldLms() {
  searchBarUnclickable();
  moveNewsArea();
  changeToOldLmsTable();
  createChangeModal();
}
function searchBarUnclickable() {
  let csbList = document.getElementsByClassName("csbList")[0];
  csbList.classList.remove("clickable");
  let csbStr = document.getElementsByClassName("csbStr")[0];
  csbStr.classList.remove("clickable");
}

function moveNewsArea() {
  let newsArea = document.getElementsByClassName("newsArea")[0];
  let form = document.getElementById("homehomlInfo");
  form.appendChild(newsArea);
}

function changeToOldLmsTable() {
  const tableInfo = getClassData();
  createTable(tableInfo);
  removeOriginTable();
}

function getClassData() {
  let tableInfo = [];
  const dayOfWeekTags = document.getElementsByClassName("cpLabel");
  for (dayOfWeekTag of dayOfWeekTags) {
    let tableRow = {};
    if (dayOfWeekTag.innerText) {
      tableRow.dayOfWeek = dayOfWeekTag.innerText;
      tableInfo.push(tableRow);
    }
  }
  const dayOfWeekClasses = document.getElementsByClassName("courseCardArea");
  for (i = 0; i < dayOfWeekClasses.length; i++) {
    const periods =
      dayOfWeekClasses[i].getElementsByClassName("courseCardInfo");
    tableInfo[i].periods = periods;
    const classes =
      dayOfWeekClasses[i].getElementsByClassName("courseCardName");
    tableInfo[i].classes = classes;
    let teacherNameTags =
      dayOfWeekClasses[i].getElementsByClassName("courseCardUser");
    let teacherNames = [];
    for (j = 0; j < teacherNameTags.length; j++) {
      teacherNames.push(teacherNameTags[j].innerText.split("[")[0]);
    }
    tableInfo[i].teacherNames = teacherNames;
  }
  if (nowIsSecondGradeAutomnSemester) {
    tableInfo = modifyTableForSecondGradeAutumnSemester(tableInfo);
  }
  return tableInfo;
}

function nowIsSecondGradeAutomnSemester() {
  return new Date() < new Date(2023, 2, 31);
}

function modifyTableForSecondGradeAutumnSemester(tableInfo) {
  const otherTableInfo = tableInfo.slice(-1)[0];
  if (
    otherTableInfo.classes[0].innerText.includes("基礎ゼミナール") &&
    teacherNameIs(otherTableInfo.teacherNames[0])
  ) {
    otherTableInfo.periods[0].innerText = "第２限";
    for (const oneTable of tableInfo) {
      if (oneTable.dayOfWeek === " 水曜日") {
        oneTable.classes = [otherTableInfo.classes[0], ...oneTable.classes];
        oneTable.periods = [otherTableInfo.periods[0], ...oneTable.periods];
        oneTable.teacherNames.unshift(otherTableInfo.teacherNames[0]);
      }
    }
    otherTableInfo.classes = Array.from(otherTableInfo.classes).slice(1);
    otherTableInfo.periods = Array.from(otherTableInfo.periods).slice(1);
    otherTableInfo.teacherNames = otherTableInfo.teacherNames.slice(1);
  }
  return tableInfo;
}

function teacherNameIs(target) {
  const teacherName = ["高井", "竹内"];
  return teacherName.some((el) => target.includes(el));
}

function createTable(tableInfo) {
  let classTable = document.createElement("table");
  classTable.classList.add("classTable");
  classTable.setAttribute("cellspacing", 0);
  for (const dayOfWeekInfo of tableInfo) {
    for (let i = 0; i < dayOfWeekInfo.classes.length; i++) {
      let tr = document.createElement("tr");
      if (i === 0) {
        let th = document.createElement("th");
        if (dayOfWeekInfo.dayOfWeek.substr(3, 1) === "他") {
          th.innerText = dayOfWeekInfo.dayOfWeek.substr(3, 1);
        } else {
          th.innerText = dayOfWeekInfo.dayOfWeek.substr(1, 1);
        }
        th.setAttribute("rowspan", dayOfWeekInfo.classes.length);
        tr.appendChild(th);
      }

      let periodTd = document.createElement("td");
      periodTd.classList.add("periodTd");
      if (i === dayOfWeekInfo.classes.length - 1) {
        periodTd.classList.add("border-bottom");
      }
      periodTd.innerText =
        dayOfWeekInfo.periods[i].innerText.split(/春|秋|卒|\n通/g)[0];
      tr.appendChild(periodTd);

      let classNameTd = document.createElement("td");
      classNameTd.classList.add("classNameTd");
      if (i === dayOfWeekInfo.classes.length - 1) {
        classNameTd.classList.add("border-bottom");
      }
      classNameTd.innerText = omit(dayOfWeekInfo.classes[i].innerText);
      tr.appendChild(classNameTd);
      if (dayOfWeekInfo.classes[i].childNodes[1]) {
        tr.appendChild(dayOfWeekInfo.classes[i].childNodes[1]);
      } else {
        let cannotUseLink = document.createElement("a");
        tr.appendChild(cannotUseLink);
        tr.childNodes[tr.childNodes.length - 2].innerText += "(利用不可)";
      }

      let teacherNameTd = document.createElement("td");
      if (i === dayOfWeekInfo.classes.length - 1) {
        teacherNameTd.classList.add("border-bottom");
      }
      teacherNameTd.innerText = dayOfWeekInfo.teacherNames[i];
      tr.appendChild(teacherNameTd);

      classTable.appendChild(tr);
    }
  }
  let searchBox = document.getElementsByClassName("courseSearchArea");
  searchBox[0].after(classTable);
  modifyAnchorWidth();
  window.addEventListener("resize", modifyAnchorWidth);
}
function omit(className) {
  if (/\[.*?\]/g.test(className)) {
    className = className.replace(/\[.*?\]/g, "");
  }
  if (/(\(|（).*?(）|\))/g.test(className)) {
    className = className.replace(/(\(|（).*?(）|\))/g, "");
  }
  if (className.includes("[")) {
    className = className.split("[")[0];
  }
  if (className.includes("【連絡専用】")) {
    className = className.split("【連絡専用】")[1];
  }
  if (className.includes("実施済み")) {
    className = "実施";
  }
  return className;
}
function removeOriginTable() {
  let home = document.getElementsByClassName("weeklyCourseArea")[0];
  home.remove();
}
function modifyAnchorWidth() {
  let tr = document
    .getElementsByClassName("classTable")[0]
    .getElementsByTagName("tr")[0];
  let th = document
    .getElementsByClassName("classTable")[0]
    .getElementsByTagName("th")[0];
  let trWidth = window
    .getComputedStyle(tr)
    .getPropertyValue("width")
    .slice(0, -2);
  let thWidth = window
    .getComputedStyle(th)
    .getPropertyValue("width")
    .slice(0, -2);
  let classTabeleAnchor = document
    .getElementsByClassName("classTable")[0]
    .getElementsByTagName("a");
  let trPadding = 30;
  let thBorder = 1;
  for (let anchor of classTabeleAnchor) {
    anchor.style.width = trWidth - thWidth - trPadding - thBorder + "px";
  }
}

function changeHeaderForm() {
  moveAttendButton();
  createChangeModal();
}
function moveAttendButton() {
  let attendButton = document.getElementsByClassName("courseControls")[0];
  let topHeaderUl = document.getElementsByClassName("breadCrumb")[0];
  if (attendButton) {
    topHeaderUl.after(attendButton);
  }
}
function createChangeModal() {
  let modalDiv = document.createElement("div");
  modalDiv.id = "modalDiv";
  modalDiv.classList.add("closed");

  let buttonDiv = document.createElement("div");
  buttonDiv.id = "buttonDiv";
  createThemeH2(buttonDiv);
  createThemeButtonDiv(buttonDiv);
  modalDiv.appendChild(buttonDiv);

  const originalThemeDiv = createOriginalThemeDiv();
  modalDiv.appendChild(originalThemeDiv);
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(modalDiv);

  let overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("closed");
  overlay.onclick = () => {
    closeModal(modalDiv, overlay);
  };
  body.appendChild(overlay);
}
function closeModal(modalDiv, overlay) {
  modalDiv.classList.add("closed");
  overlay.classList.add("closed");
}
function createThemeH2(buttonDiv) {
  let themeListTitle = document.createElement("h2");
  themeListTitle.innerText = "既存テーマ一覧";
  buttonDiv.appendChild(themeListTitle);
}
function createThemeButtonDiv(buttonDiv) {
  let themeButtonDiv = document.createElement("div");
  themeButtonDiv.id = "themeButtonDiv";
  for (const theme of themeList) {
    let themeButton = document.createElement("button");
    themeButton.innerText = theme.title;
    themeButton.classList.add("themeButton");
    themeButton.onclick = () => {
      setTheme(theme.color);
    };
    themeButtonDiv.appendChild(themeButton);
  }
  buttonDiv.appendChild(themeButtonDiv);
}
function createOriginalThemeDiv() {
  let body = document.getElementsByTagName("body")[0];
  let originalThemeDiv = document.createElement("div");
  originalThemeDiv.id = "originalThemeDiv";
  originalThemeDiv.innerHTML =
    '<h2>オリジナルテーマ設定</h2><h3></h3><div id="originalThemeInputs"><div><label for="primaryInput">メイン色</label><input id="primaryInput" type="color"></div><div><label for="secondaryInput">サブ色</label><input id="secondaryInput" type="color"></div><div><label for="backgroundInput">背景色</label><input id="backgroundInput" type="color"></div><div><label for="textInput">基本文字色</label><input id="textInput" type="color"></div><div><label for="borderInput">枠線色</label><input id="borderInput" type="color"></div><div><label for="primaryTextInput">メイン用文字色</label><input id="primaryTextInput" type="color"></div></div>';
  let setOriginalThemeButton = document.createElement("button");
  setOriginalThemeButton.innerText = "テーマを変更する";
  setOriginalThemeButton.onclick = () => {
    setOriginalTheme();
    closeModal(
      document.getElementById("modalDiv"),
      document.getElementById("overlay")
    );
  };
  originalThemeDiv.appendChild(setOriginalThemeButton);
  return originalThemeDiv;
}
function setOriginalTheme() {
  let body = document.getElementsByTagName("body")[0];
  let primary = document.getElementById("primaryInput");
  let secondary = document.getElementById("secondaryInput");
  let background = document.getElementById("backgroundInput");
  let text = document.getElementById("textInput");
  let border = document.getElementById("borderInput");
  let primaryText = document.getElementById("primaryTextInput");
  body.style.setProperty("--primary", primary.value);
  body.style.setProperty("--secondary", secondary.value);
  body.style.setProperty("--background", background.value);
  body.style.setProperty("--text", text.value);
  body.style.setProperty("--border", border.value);
  body.style.setProperty("--primaryText", primaryText.value);
  localStorage.setItem("primary", primary.value);
  localStorage.setItem("secondary", secondary.value);
  localStorage.setItem("background", background.value);
  localStorage.setItem("text", text.value);
  localStorage.setItem("border", border.value);
  localStorage.setItem("primaryText", primaryText.value);
}

// changeTheme

function changeTheme() {
  setSelectedTheme();
  createYNULogo();

  const nowUrl = location.href;
  if (
    nowUrl.substr(0, 31) !== "https://lms.ynu.ac.jp/lms/error" &&
    nowUrl.substr(0, 34) !== "https://lms.ynu.ac.jp/lms/lginLgir"
  ) {
    createOpenThemeModalButton();
  }
}
function setSelectedTheme() {
  let body = document.getElementsByTagName("body")[0];
  body.style.setProperty(
    "--primary",
    localStorage.getItem("primary") || "#005bac"
  );
  body.style.setProperty(
    "--secondary",
    localStorage.getItem("secondary") || "#e4f7ff"
  );
  body.style.setProperty(
    "--background",
    localStorage.getItem("background") || "#fffffe"
  );
  body.style.setProperty("--text", localStorage.getItem("text") || "#2d334a");
  body.style.setProperty(
    "--border",
    localStorage.getItem("border") || "#dddddd"
  );
  body.style.setProperty(
    "--primaryText",
    localStorage.getItem("primaryText") || "#fffffe"
  );
  const nowUrl = location.href;
  if (!pageIsLogin(nowUrl)) {
    setColorToInputValue();
  }
}
function createOpenThemeModalButton() {
  let headerSettingTab = document.getElementById("addKojinComment");
  let buttonLi = document.createElement("li");
  let openThemeModalButton = document.createElement("button");
  openThemeModalButton.type = "button";
  openThemeModalButton.innerText = "テーマ設定";
  openThemeModalButton.onclick = () => {
    openThemeModal();
  };
  buttonLi.appendChild(openThemeModalButton);
  headerSettingTab.appendChild(buttonLi);
}
function openThemeModal() {
  let modalDiv = document.getElementById("modalDiv");
  modalDiv.classList.remove("closed");
  let overlay = document.getElementById("overlay");
  overlay.classList.remove("closed");
}
function createYNULogo() {
  let LogoAnchor =
    document.getElementsByClassName("titleLogo")[0].childNodes[1];
  LogoAnchor.classList.add("flex");
  LogoAnchor.innerHTML =
    '<h2><span class="primary">Y</span>OKOHAMA National University</h2>';
}
function setTheme(color) {
  let body = document.getElementsByTagName("body")[0];
  body.style.setProperty("--primary", color.primary);
  body.style.setProperty("--secondary", color.secondary);
  body.style.setProperty("--background", color.background);
  body.style.setProperty("--text", color.text);
  body.style.setProperty("--border", color.border);
  body.style.setProperty("--primaryText", color.primaryText);
  localStorage.setItem("primary", color.primary);
  localStorage.setItem("secondary", color.secondary);
  localStorage.setItem("background", color.background);
  localStorage.setItem("text", color.text);
  localStorage.setItem("border", color.border);
  localStorage.setItem("primaryText", color.primaryText);
  setColorToInputValue();
}
function setColorToInputValue() {
  let primary = document.getElementById("primaryInput");
  let secondary = document.getElementById("secondaryInput");
  let background = document.getElementById("backgroundInput");
  let text = document.getElementById("textInput");
  let border = document.getElementById("borderInput");
  let primaryText = document.getElementById("primaryTextInput");
  primary.value = localStorage.getItem("primary");
  secondary.value = localStorage.getItem("secondary");
  background.value = localStorage.getItem("background");
  text.value = localStorage.getItem("text");
  border.value = localStorage.getItem("border");
  primaryText.value = localStorage.getItem("primaryText");
}
