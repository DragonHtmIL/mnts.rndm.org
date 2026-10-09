let icReDir = "";
function setDefaultIcon(gameId) {
  mainDir = "index_data/games/game_" + gameId + "/icons/";
  icReDir = mainDir;
  localStorage.setItem("icDir", icReDir);
  loadIcons();
};
const dimensions = [
  "16",
  "32",
  "48",
  "76",
  "96",
  "120",
  "128",
  "144",
  "152",
  "167",
  "180",
  "192",
  "196",
  "228",
  "256",
  "300",
  "384",
  "512"
];
function loadIcons() {
  const direction = localStorage.getItem("icDir") || icReDir;
  const baseName = "icon_";
  const format = ".webp"
  for (let i = 0; i < dimensions.length; i++) {
    const favicons = document.getElementById('icon' + dimensions[i]);
    favicons.href = direction + baseName + dimensions[i] + format;
    favicons.rel = 'shortcut icon';
    favicons.sizes = dimensions[i] + "x" + dimensions[i];
    favicons.type = "image/webp";
  }
};
loadIcons();