const settingsContainer = document.getElementById("settings");
function languageSettings() {
  const setting = document.createElement("div");
  const select = document.createElement("select");
  const optionEn = document.createElement("option");
  const optionHe = document.createElement("option");
  const optionRu = document.createElement("option");

  setting.className = "setting-container select-elm";
  select.className = "setting-select";
  select.id = "langSelection";

  optionEn.setAttribute("value", "en");
  optionHe.setAttribute("value", "he");
  optionRu.setAttribute("value", "ru");
  if(lang === "en") {
    optionEn.innerHTML = "English";
    optionHe.innerHTML = "עברית (Hebrew)";
    optionRu.innerHTML = "Русский (Russian)";
  }else
  if(lang === "he") {
    optionEn.innerHTML = "English (אנגלית)";
    optionHe.innerHTML = "עברית";
    optionRu.innerHTML = "Русский (רוסית)";
  }else
  if(lang === "ru") {
    optionEn.innerHTML = "English (Английский)";
    optionHe.innerHTML = "עברית (Иврит)";
    optionRu.innerHTML = "Русский";
  }

  settingsContainer.appendChild(setting);
  setting.appendChild(select);
  select.appendChild(optionEn);
  select.appendChild(optionHe);
  select.appendChild(optionRu);
  select.addEventListener("change", () => {
    checkSettingsChanges();
  });
  select.value = localStorage.getItem("lang");
};
languageSettings();

function checkSettingsChanges() {
  if(localStorage.getItem("lang") === document.getElementById("langSelection").value) {
    a0001.classList.remove("shown");
  }else{
    a0001.classList.add("shown");
  }
};
document.getElementById("applySettings").addEventListener("click", () => {
  localStorage.setItem("lang", document.getElementById("langSelection").value)
  window.location.reload();
});