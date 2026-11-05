let avaiblesList0000000002 = [];
let partnerState = "like";
const l0000000002name = "Dungeon&Girls";
const s0000000002name = "D&G";
const texts_en_0000000002 = [
  "Selected is: ",
  "Reselect",
  "Search for partners and characters",
  "Select partners for random selection...",
  "Select characters for random selection..."
];
const texts_ru_0000000002 = [
  "Выбрано: ",
  "Повторно выбрать",
  "Поиск партнеров и персонажей",
  "Выберите партнеров для случайного выбора...",
  "Выберите персонажей для случайного выбора..."
];
const texts_he_0000000002 = [
  "הנבחר הוא: ",
  "בחר מחדש",
  "חיפוש שותפים ודמויות",
  "בחרו שותפים לבחירה אקראית...",
  "בחרו דמויות לבחירה אקראית..."
];
const list_en_0000000002 = [
  "Fairy",
  "Slime",
  "Skeleton",
  "Zombie",
  "Rabbit",
  "Scorpion",
  "Will o' Wisp",
  "Yeti",
  "Ghost",
  "Harpy",
  "Doll",
  "Cockatrice",
  "Gargoyle",
  "Lamia",
  "Golem",
  "Chimera",
  "Elemental",
  "Wyvern",
  "Minotaur",
  "Mimic",
  "Dark Elf",
  "Seiren",
  "Succubus",
  "Medusa",
  "Cyclops",
  "Demon",
  "Death Knight",
  "Seraph",
  "Sabori",
  "Kyonshi",
  "Killer Bee",
  "Snow Princess"
];
const list_en_0000000002_non_plus = [
  "Vampire",
  "Phoenix",
  "Dragon",
  "Valkyrie",
];
const list_en_0000000002_plus = list_en_0000000002;
const list_ru_0000000002 = [
  "Фея",
  "Мерзость",
  "Скелет",
  "Зомби",
  "Кролик",
  "Скорпион",
  "Блуждающий огонек",
  "Йети",
  "Призрак",
  "Гарпия",
  "Кукла",
  "Василиск",
  "Горгулья",
  "Ламия",
  "Голем",
  "Химера",
  "Элементаль",
  "Виверна",
  "Минотавр",
  "Мираж",
  "Темный эльф",
  "Сирена",
  "Суккуб",
  "Медуза",
  "Циклоп",
  "Демон",
  "Рыцарь смерти",
  "Серафима",
  "Сабори",
  "Кионши",
  "Пчела-убийца",
  "Снежная принцесса"
];
const list_ru_0000000002_non_plus = [
  "Вампир",
  "Феникс",
  "Дракон",
  "Валькирия"
];
const list_en_0000000002_main_characters = [
  "Dungeon Explorer",
  "Treasure Hunter",
  "Holy Guardian",
  "Sword Dancer"
];
const list_ru_0000000002_main_characters = [
  "Следопыт",
  "Искательница сокровищ",
  "Святая хранительница",
  "Танцовщица с мечом"
];

const list_ru_0000000002_plus = list_en_0000000002_plus.map(name => {
  const regularIndex = list_en_0000000002.indexOf(name);
  return regularIndex >= 0
    ? list_ru_0000000002[regularIndex]
    : list_ru_0000000002_non_plus[list_en_0000000002_non_plus.indexOf(name)];
});
const partnerOptions0000000002 = [];
for (let i = 0; i < list_en_0000000002_main_characters.length; i++) {
  partnerOptions0000000002.push({
    id: "main:" + list_en_0000000002_main_characters[i],
    name: list_en_0000000002_main_characters[i],
    localizedName: list_ru_0000000002_main_characters[i],
    isPlus: false,
    isMainCharacter: true
  });
}
for (let i = 0; i < list_en_0000000002.length; i++) {
  partnerOptions0000000002.push({
    id: list_en_0000000002[i],
    name: list_en_0000000002[i],
    localizedName: list_ru_0000000002[i],
    isPlus: false
  });
  if (list_en_0000000002_plus.includes(list_en_0000000002[i])) {
    const plusIndex = list_en_0000000002_plus.indexOf(list_en_0000000002[i]);
    partnerOptions0000000002.push({
      id: list_en_0000000002[i] + "+",
      name: list_en_0000000002[i],
      localizedName: list_ru_0000000002_plus[plusIndex],
      isPlus: true
    });
  }
}
for (let i = 0; i < list_en_0000000002_non_plus.length; i++) {
  partnerOptions0000000002.push({
    id: list_en_0000000002_non_plus[i],
    name: list_en_0000000002_non_plus[i],
    localizedName: list_ru_0000000002_non_plus[i],
    isPlus: false
  });
}
const g0000000002NameTab = document.getElementById("gameTab0000000002");
const g0000000002NameTitle = document.getElementById("gameTitle0000000002");
const g0000000002Container = document.getElementById("gameContainer0000000002");
if(modalDirection === "right") {
  g0000000002NameTab.innerHTML = s0000000002name;
}else{
  g0000000002NameTab.innerHTML = l0000000002name;
}
g0000000002NameTitle.innerHTML = l0000000002name;

function createCards0000000002() {
  const card0 = document.createElement("button");
  const card1 = document.createElement("button");
  const name0 = document.createElement("div");
  const name1 = document.createElement("div");
  const icon0 = document.createElement("img");
  const icon1 = document.createElement("img");
  const reSelect = document.createElement("button");
  const spliter = document.createElement("hr");
  card0.className = "char-card-s";
  card1.className = "char-card-s";
  reSelect.className = "reselect-button";
  if(modalDirection === "right") {
    reSelect.classList.add("def");
  }else{
    reSelect.classList.add("abs");
  }
  if(lang === "en") {
    reSelect.innerHTML = texts_en_0000000002[1];
  }else
  if(lang === "ru") {
    reSelect.innerHTML = texts_ru_0000000002[1];
  }else
  if(lang === "he") {
    reSelect.innerHTML = texts_he_0000000002[1];
  }
  name0.className = "char-name";
  name1.className = "char-name";
  icon0.className = "char-icon";
  icon1.className = "char-icon";
  card0.id = "char0000000002card0";
  card1.id = "char0000000002card1";
  name0.id = "char0000000002name0";
  name1.id = "char0000000002name1";
  icon0.id = "char0000000002icon0";
  icon1.id = "char0000000002icon1";
  icon0.src = "index_data/textures/non_selected.webp";
  icon1.src = "index_data/textures/non_selected.webp";
  if(lang === "he") {
    name0.style.direction = "rtl";
    name1.style.direction = "rtl";
  }
  g0000000002Container.appendChild(reSelect);
  g0000000002Container.appendChild(card0);
  g0000000002Container.appendChild(spliter);
  g0000000002Container.appendChild(card1);
  card0.appendChild(icon0);
  card1.appendChild(icon1);
  card0.appendChild(name0);
  card1.appendChild(name1);

  card0.addEventListener('click', () => {
    randomize0000000002c0();
  });
  card1.addEventListener('click', () => {
    randomize0000000002c1();
  });
  reSelect.addEventListener('click', () => {
    randomize0000000002c0();
    randomize0000000002c1();
  });
};
createCards0000000002();
function setMainCharacterIcon0000000002(icon, characterName) {
  const path = "index_data/games/game_0000000002/main_characters/" + characterName + ".png";
  icon.dataset.mainCharacterName = characterName;
  if (icon.tagName === "IMG") {
    icon.src = path;
  } else {
    icon.style.backgroundImage = "url('" + path + "')";
  }
}

function setPartnerIcon0000000002(icon, partnerName) {
  const isPlus = partnerName.endsWith("+");
  const baseName = isPlus ? partnerName.slice(0, -1) : partnerName;
  const pType = isPlus ? "plus" : "normal";
  const displayName = baseName === "Will o' Wisp" ? "Will O Wisp" : baseName;
  const path = "index_data/games/game_0000000002/partners/" + partnerState + "_" + pType + "/" + displayName + ".png";

  const requestId = Number(icon.dataset.requestId || 0) + 1;
  icon.dataset.requestId = requestId;
  icon.dataset.partnerName = baseName;
  icon.dataset.partnerId = partnerName;

  if (icon.tagName === "IMG") {
    icon.src = path;
  } else {
    icon.style.backgroundImage = "url('" + path + "')";
  }
}

function avaibles0000000002() {
  const avaiblesList = document.createElement("div");
  const avaiblesSearch = document.createElement("input");
  if(modalDirection === "right") {
    avaiblesList.className = "list-ch-s";
  }else{
    avaiblesList.className = "list-ch-l";
  }
  avaiblesSearch.className = "search-ch";
  avaiblesSearch.id = "searchAvibles0000000002";
  avaiblesSearch.type = "search";
  avaiblesSearch.setAttribute("for", "search-character");
  avaiblesSearch.setAttribute("name", "character");
  if(lang === "en") {
    avaiblesSearch.placeholder = texts_en_0000000002[2];
  }else
  if(lang === "ru") {
    avaiblesSearch.placeholder = texts_ru_0000000002[2];
  }else
  if(lang === "he") {
    avaiblesSearch.placeholder = texts_he_0000000002[2];
  }
  g0000000002Container.appendChild(avaiblesSearch);
  g0000000002Container.appendChild(avaiblesList);
  let partnerDividerAdded = false;
  for (let u = 0; u < partnerOptions0000000002.length; u++) {
    const option = partnerOptions0000000002[u];
    if (!option.isMainCharacter && !partnerDividerAdded) {
      const partnerDivider = document.createElement("hr");
      partnerDivider.style.gridColumn = "1 / -1";
      avaiblesList.appendChild(partnerDivider);
      partnerDividerAdded = true;
    }
    const chList = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const cIcon = document.createElement("div");
    chList.className = "checkbox-container cc-0000000002";
    checkbox.type = "checkbox";
    checkbox.id = "chChar0000000002un" + [u];
    label.className = "checkbox-label cl-0000000002";
    if(lang === "ru") {
      label.textContent = option.localizedName + (option.isPlus ? "+" : "");
    }else{
      label.textContent = option.name + (option.isPlus ? "+" : "");
    }
    label.setAttribute("for", "chChar0000000002un" + [u]);
    cIcon.className = "icon";
    if (option.isMainCharacter) {
      setMainCharacterIcon0000000002(cIcon, option.name);
    } else {
      setPartnerIcon0000000002(cIcon, option.id);
    }
    avaiblesList.appendChild(chList);
    chList.appendChild(checkbox);
    chList.appendChild(cIcon);
    chList.appendChild(label);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        avaiblesList0000000002.push(option.id);
      } else {
        avaiblesList0000000002 = avaiblesList0000000002.filter(name => name !== option.id);
      }
      localStorage.setItem("avaibleChars0000000002", JSON.stringify(avaiblesList0000000002));
    });
    avaiblesSearch.addEventListener('input', () => {
      var input, filter, containers, label, i, txtValue;
      input = document.getElementById("searchAvibles0000000002");
      filter = input.value.toUpperCase();
      containers = document.querySelectorAll(".cc-0000000002");
      for (i = 0; i < containers.length; i++) {
        label = containers[i].querySelector(".cl-0000000002");
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            containers[i].style.display = "";
        } else {
            containers[i].style.display = "none";
        }
      }
    });
  }
};
function checkPstate() {
  const chckbx = document.getElementById("pState");
  partnerState = chckbx && chckbx.checked ? "love" : "like";
  if (chckbx) {
    chckbx.addEventListener("change", () => {
      partnerState = chckbx.checked ? "love" : "like";
      const icons = document.querySelectorAll(".cc-0000000002 .icon, .char-icon[data-partner-id]");
      icons.forEach(icon => {
        const partnerId = icon.dataset.partnerId;
        if (partnerId) {
          setPartnerIcon0000000002(icon, partnerId);
        }
      });
    });
  }
};
checkPstate();
avaibles0000000002();
function checkAvaibledChars0000000002() {
  const savedChars = localStorage.getItem("avaibleChars0000000002");
  if (savedChars === null) {
    return;
  }
  const savedPartnerIds = JSON.parse(savedChars);
  const validPartnerIds = partnerOptions0000000002.map(option => option.id);
  avaiblesList0000000002 = savedPartnerIds.filter(name => validPartnerIds.includes(name));
  const checkboxes = document.querySelectorAll(".cc-0000000002 input[type='checkbox']");
  for (let u = 0; u < checkboxes.length; u++) {
    if (avaiblesList0000000002.includes(partnerOptions0000000002[u].id)) {
      checkboxes[u].checked = true;
    }
  }
};
checkAvaibledChars0000000002();
randomize0000000002c0();
randomize0000000002c1();
function randomize0000000002(isMainCharacter) {
  const cardIndex = isMainCharacter ? 1 : 0;
  const card = document.getElementById("char0000000002card" + cardIndex);
  const name = document.getElementById("char0000000002name" + cardIndex);
  const icon = document.getElementById("char0000000002icon" + cardIndex);
  const eligibleOptions = partnerOptions0000000002.filter(option =>
    Boolean(option.isMainCharacter) === isMainCharacter && avaiblesList0000000002.includes(option.id)
  );
  if (eligibleOptions.length === 0) {
    const messages = lang === "ru"
      ? texts_ru_0000000002
      : lang === "he"
        ? texts_he_0000000002
        : texts_en_0000000002;
    icon.dataset.requestId = Number(icon.dataset.requestId || 0) + 1;
    delete icon.dataset.partnerId;
    delete icon.dataset.partnerName;
    delete icon.dataset.mainCharacterName;
    name.textContent = messages[isMainCharacter ? 4 : 3];
    icon.src = "index_data/textures/non_selected.webp";
    card.disabled = false;
    return;
  }
  if (card.disabled) return;

  const selectedOption = eligibleOptions[Math.floor(Math.random() * eligibleOptions.length)];
  const selectedName = (lang === "ru" ? selectedOption.localizedName : selectedOption.name)
    + (selectedOption.isPlus ? "+" : "");
  const texts = lang === "ru" ? texts_ru_0000000002 : lang === "he" ? texts_he_0000000002 : texts_en_0000000002;
  const requestId = Number(icon.dataset.requestId || 0) + 1;
  icon.dataset.requestId = requestId;
  card.disabled = true;
  name.innerHTML = texts[0] + "...";
  icon.src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";

  setTimeout(function() {
    if (icon.dataset.requestId !== String(requestId)) {
      return;
    }
    name.innerHTML = texts[0] + selectedName;
    name.innerHTML += `<div class="hint-text-card">> ` + texts[1] + ` <</div>`;
    card.disabled = false;
    if (selectedOption.isMainCharacter) {
      setMainCharacterIcon0000000002(icon, selectedOption.name);
    } else {
      setPartnerIcon0000000002(icon, selectedOption.id);
    }
  }, 1500);
}

function randomize0000000002c0() {
  randomize0000000002(false);
}

function randomize0000000002c1() {
  randomize0000000002(true);
}