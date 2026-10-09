const gamesId = [
  "0000000001",
  "0000000000"
];
for (let g = 0; g < gamesId.length; g++) {
  const tab = document.createElement("button");
  const container = document.createElement("div");
  const titleName = document.createElement("h1");
  const descriptions = document.createElement("p");
  const scriptTxt = document.createElement("script");
  const scriptRnd = document.createElement("script");
  const script = document.createElement("script");
  const hr0 = document.createElement("hr");
  tab.id = "gameTab" + gamesId[g];
  container.id = "gameContainer" + gamesId[g];
  container.className = "game-container";
  titleName.id = "gameTitle" + gamesId[g];
  titleName.className = "game-title";
  descriptions.id = "gameDescription" + gamesId[g];
  descriptions.className = "game-descriptopn";
  script.src = "index_data/games/game_" + gamesId[g] + "/main" + gamesId[g] + ".js";
  gmsList.appendChild(tab);
  gmsContainers.appendChild(container);
  container.appendChild(titleName);
  container.appendChild(hr0);
  container.appendChild(descriptions);
  moreScripts.appendChild(scriptTxt);
  moreScripts.appendChild(scriptRnd);
  moreScripts.appendChild(script);
  tab.addEventListener("click", () => {
    if(tab.classList.contains("actived")){return};
    localStorage.setItem("defaultGame", gamesId[g]);
    gmsContainers.querySelectorAll("[id^='gameContainer']").forEach(cntnr => {
      cntnr.style.display = "none";
    });
    gmsList.querySelectorAll("[id^='gameTab']").forEach(tb => {
      tb.classList.remove("actived");
    });
    tab.classList.add("actived");
    container.style.display = "block";
    setDefaultIcon(gamesId[g]);
  });
}