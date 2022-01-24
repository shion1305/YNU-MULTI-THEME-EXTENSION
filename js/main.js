omit();
function omit() {
  const elements = document.getElementsByTagName("a");
  for(const elt of elements) {
    if (elt.innerText.includes("[")) {
      elt.innerText = elt.innerText.split("[")[0];
    }
    if (elt.innerText.includes("【連絡専用】")) {
      elt.innerText = elt.innerText.split("【連絡専用】")[1];
    }
    if (elt.innerText.includes("実施済み")) {
      elt.innerText = "実施";
    }
  }
}