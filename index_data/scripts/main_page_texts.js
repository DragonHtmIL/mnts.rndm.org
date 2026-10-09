if(lang === "en") {
  headerTitle.innerHTML = "Randomerator";
  a0000.innerHTML = "Settings";
  a0001.innerHTML = "Apply";
}
else
if(lang === "ru") {
  headerTitle.innerHTML = "Случатор";
  a0000.innerHTML = "Настройки";
  a0001.innerHTML = "Apply";
}
else
if(lang === "he") {
  headerTitle.innerHTML = "מחוללר";
  a0000.innerHTML = "הגדרות";
  a0001.innerHTML = "Apply";

  headerTitle.style.textAlign = "right";
  headerTitle.style.direction = "rtl";
  a0000.style.textAlign = "right";
  a0000.style.direction = "rtl";
}