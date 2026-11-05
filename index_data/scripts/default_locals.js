if (lang === null || lang === undefined || lang === '') {
  if (navigator.language === 'ru') {
    localStorage.setItem('lang', 'ru');
  } else if (navigator.language === 'he') {
    localStorage.setItem('lang', 'he');
  } else {
    localStorage.setItem('lang', 'en');
  }
};
if (defaultGame === null || defaultGame === undefined || defaultGame === '') {
  document.getElementById("gameTab0000000002").classList.add("actived");
  document.getElementById("gameContainer0000000002").style.display = "block";
}