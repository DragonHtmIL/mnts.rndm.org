let avaiblesList0000000001 = [];

const l0000000001name = "Genshin Impact";
const s0000000001name = "Genshin";
const texts_en_0000000001 = [
  "Selected is: ",
  "Reselect",
  "Search for Characters",
  "MultiPlayer",
  "Select an characters for random select..."
];
const texts_ru_0000000001 = [
  "Выбрано: ",
  "Повторно выбрать",
  "Поиск персонажей",
  "Многопользовательский режим",
  "Выберите персонажи для случайного выбора..."
];
const texts_he_0000000001 = [
  "הנבחר הוא: ",
  "בחר מחדש",
  "חיפוש דמויות",
  "מרובה משתתפים",
  "בחרו דמויות לבחירה אקראית..."
];
const list_en_0000000001 = [
  "Alyosha",
  "Citlali",
  "Columbina",
  "Durin",
  "Escoffier",
  "Flins",
  "Furina",
  "Ineffa",
  "Lauma",
  "Linnea",
  "Mavuika",
  "Nefer",
  "Nicole",
  "Odette",
  "Sandrone",
  "Sucrose",
  "Xilonen",
  "Yae%20Miko",
  "Zibai",
  "Arlecchino",
  "Bennett",
  "Chasca",
  "Diona",
  "Fischl",
  "Illuga",
  "Kazuha",
  "Kuki%20Shinobu",
  "Lohen",
  "Neuvillette",
  "Qiqi",
  "Skirk",
  "Traveler%20(Cryo)",
  "Varesa",
  "Varka",
  "Wriothesley",
  "Yelan",
  "Aino",
  "Chevreuse",
  "Chiori",
  "Clorinde",
  "Kinich",
  "Iansan",
  "Faruzan",
  "Cyno",
  "Mona",
  "Nahida",
  "Nilou",
  "Ororon",
  "Wanderer",
  "Venti",
  "Shenhe",
  "Raiden",
  "Yumemizuki%20Mizuki",
  "Zhongli",
  "Albedo",
  "Alhaitham",
  "Ayaka",
  "Ayato",
  "Baizhu",
  "Beidou",
  "Charlotte",
  "Childe",
  "Emilie",
  "Ganyu",
  "Hu%20Tao",
  "Klee",
  "Kokomi",
  "Lan%20Yan",
  "Lyney",
  "Mualani",
  "Navia",
  "Prune",
  "Sigewinne",
  "Traveler%20(Dendro)",
  "Xiangling",
  "Xianyun",
  "Xiao",
  "Xingqiu",
  "Yoimiya",
  "Aloy",
  "Amber",
  "Barbara",
  "Candace",
  "Chongyun",
  "Collei",
  "Dahlia",
  "Dehya",
  "Diluc",
  "Dori",
  "Eula",
  "Freminet",
  "Gaming",
  "Gorou",
  "Heizou",
  "Ifa",
  "Itto",
  "Jahoda",
  "Jean",
  "Kachina",
  "Kaeya",
  "Kaveh",
  "Keqing",
  "Kirara",
  "Layla",
  "Lisa",
  "Lynette",
  "Mika",
  "Ningguang",
  "Noelle",
  "Razor",
  "Rosaria",
  "Sara",
  "Sayu",
  "Sethos",
  "Thoma",
  "Tighnari",
  "Traveler%20(Anemo)",
  "Traveler%20(Electro)",
  "Traveler%20(Geo)",
  "Traveler%20(Hydro)",
  "Xinyan",
  "Yanfei",
  "Yaoyao",
  "Yun%20Jin"
];

const g0000000001NameTab = document.getElementById("gameTab0000000001");
const g0000000001NameTitle = document.getElementById("gameTitle0000000001");
const g0000000001Container = document.getElementById("gameContainer0000000001");
if(modalDirection === "right") {
  g0000000001NameTab.innerHTML = s0000000001name;
}else{
  g0000000001NameTab.innerHTML = l0000000001name;
}
g0000000001NameTitle.innerHTML = l0000000001name;

function createCards0000000001() {
  const card0 = document.createElement("button");
  const name0 = document.createElement("div");
  const icon0 = document.createElement("img");
  const card1 = document.createElement("button");
  const name1 = document.createElement("div");
  const icon1 = document.createElement("img");
  const card2 = document.createElement("button");
  const name2 = document.createElement("div");
  const icon2 = document.createElement("img");
  const card3 = document.createElement("button");
  const name3 = document.createElement("div");
  const icon3 = document.createElement("img");
  const reSelect = document.createElement("button");
  if(modalDirection === "right") {
    card0.className = "char-card-s";
    card1.className = "char-card-s";
    card2.className = "char-card-s";
    card3.className = "char-card-s";
  }else{
    card0.className = "char-card-l";
    card1.className = "char-card-l";
    card2.className = "char-card-l";
    card3.className = "char-card-l";
  }
  reSelect.className = "reselect-button";
  if(lang === "en") {
    reSelect.innerHTML = texts_en_0000000001[1];
  }else
  if(lang === "ru") {
    reSelect.innerHTML = texts_ru_0000000001[1];
  }else
  if(lang === "he") {
    reSelect.innerHTML = texts_he_0000000001[1];
  }
  name0.className = "char-name";
  icon0.className = "char-icon";
  name1.className = "char-name";
  icon1.className = "char-icon";
  name2.className = "char-name";
  icon2.className = "char-icon";
  name3.className = "char-name";
  icon3.className = "char-icon";
  card0.id = "char0000000001card0";
  name0.id = "char0000000001name0";
  icon0.id = "char0000000001icon0";
  card1.id = "char0000000001card1";
  name1.id = "char0000000001name1";
  icon1.id = "char0000000001icon1";
  card2.id = "char0000000001card2";
  name2.id = "char0000000001name2";
  icon2.id = "char0000000001icon2";
  card3.id = "char0000000001card3";
  name3.id = "char0000000001name3";
  icon3.id = "char0000000001icon3";
  g0000000001Container.appendChild(card0);
  card0.appendChild(icon0);
  card0.appendChild(name0);
  g0000000001Container.appendChild(card1);
  card1.appendChild(icon1);
  card1.appendChild(name1);
  g0000000001Container.appendChild(card2);
  card2.appendChild(icon2);
  card2.appendChild(name2);
  g0000000001Container.appendChild(card3);
  card3.appendChild(icon3);
  card3.appendChild(name3);
  g0000000001Container.appendChild(reSelect);

  card0.addEventListener('click', () => {
    randomize0000000001c0();
  });
  card1.addEventListener('click', () => {
    randomize0000000001c1();
  });
  card2.addEventListener('click', () => {
    randomize0000000001c2();
  });
  card3.addEventListener('click', () => {
    randomize0000000001c3();
  });
  reSelect.addEventListener('click', () => {
    randomize0000000001c0();
    randomize0000000001c1();
    randomize0000000001c2();
  });
};
createCards0000000001();
function isMultiPlayer() {
  const isMultiPlayerContainer = document.createElement("div");
  const isMultiPlayer = document.createElement("input");
  const isMultiPlayerlabel = document.createElement("label");
  isMultiPlayerContainer.className = "checkbox-container cc-cont-out";
  isMultiPlayer.type = "checkbox";
  isMultiPlayer.id = "mpCh";
  isMultiPlayerlabel.setAttribute("for", "mpCh");
  isMultiPlayerlabel.className = "checkbox-label";
  if(lang === "en") {
    isMultiPlayerlabel.innerHTML = texts_en_0000000001[3];
  }else
  if(lang === "ru") {
    isMultiPlayerlabel.innerHTML = texts_ru_0000000001[3];
  }else
  if(lang === "he") {
    isMultiPlayerlabel.innerHTML = texts_he_0000000001[3];
  };
  if(localStorage.getItem("mpEnbled") === "true") {
    isMultiPlayer.checked = true;
    avaiblesList0000000001.push(list_en_0000000001.length);
  };
  isMultiPlayer.addEventListener("change", () => {
    localStorage.setItem("mpEnbled", isMultiPlayer.checked);
    window.location.reload();
  });
  g0000000001Container.appendChild(isMultiPlayerContainer);
  isMultiPlayerContainer.appendChild(isMultiPlayer);
  isMultiPlayerContainer.appendChild(isMultiPlayerlabel);
};
isMultiPlayer();
function avaibles0000000001() {
  const avaiblesList = document.createElement("div");
  const avaiblesSearch = document.createElement("input");
  if(modalDirection === "right") {
    avaiblesList.className = "list-ch-s";
  }else{
    avaiblesList.className = "list-ch-l";
  }
  avaiblesList.id = "avaibleLst0000000001";
  avaiblesSearch.className = "search-ch";
  avaiblesSearch.id = "searchAvibles0000000001";
  avaiblesSearch.type = "search";
  avaiblesSearch.setAttribute("for", "search-character");
  avaiblesSearch.setAttribute("name", "character");
  if(lang === "en") {
    avaiblesSearch.placeholder = texts_en_0000000001[2];
  }else
  if(lang === "ru") {
    avaiblesSearch.placeholder = texts_ru_0000000001[2];
  }else
  if(lang === "he") {
    avaiblesSearch.placeholder = texts_he_0000000001[2];
  };
  if(localStorage.getItem("mpEnbled") === "true") {
    return;
  };
  g0000000001Container.appendChild(avaiblesSearch);
  g0000000001Container.appendChild(avaiblesList);
  for (let u = 0; u < list_en_0000000001.length; u++) {
    const chList = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    chList.className = "checkbox-container cc-0000000001";
    checkbox.type = "checkbox";
    checkbox.id = "chChar0000000001un" + [u];
    label.className = "checkbox-label cl-0000000001";
    label.textContent = decodeURIComponent(list_en_0000000001[u]);
    label.setAttribute("for", "chChar0000000001un" + [u]);
    avaiblesList.appendChild(chList);
    chList.appendChild(checkbox);
    chList.appendChild(label);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        avaiblesList0000000001.push(list_en_0000000001[u]);
      } else {
        avaiblesList0000000001 = avaiblesList0000000001.filter(name => name !== list_en_0000000001[u]);
      }
      localStorage.setItem("avaibleChars0000000001", JSON.stringify(avaiblesList0000000001));
    });
    avaiblesSearch.addEventListener('input', () => {
      var input, filter, containers, label, i, txtValue;
      input = document.getElementById("searchAvibles0000000001");
      filter = input.value.toUpperCase();
      containers = document.querySelectorAll(".cc-0000000001");
      for (i = 0; i < containers.length; i++) {
        label = containers[i].querySelector(".cl-0000000001");
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
avaibles0000000001();
function checkAvaibledChars0000000001() {
  const savedChars = localStorage.getItem("avaibleChars0000000001");
  if (savedChars === null) {
    return;
  }
  avaiblesList0000000001 = JSON.parse(savedChars);
  const checkboxes = document.querySelectorAll(".cc-0000000001 input[type='checkbox']");
  for (let u = 0; u < checkboxes.length; u++) {
    if (avaiblesList0000000001.includes(list_en_0000000001[u])) {
      checkboxes[u].checked = true;
    }
  }
}
checkAvaibledChars0000000001();
randomize0000000001c0();
randomize0000000001c1();
randomize0000000001c2();
randomize0000000001c3();

function showNoAvailableCharacters0000000001(cardIndex) {
  const messages = lang === "ru"
    ? texts_ru_0000000001
    : lang === "he"
      ? texts_he_0000000001
      : texts_en_0000000001;
  document.getElementById("char0000000001name" + cardIndex).textContent = messages[4];
  document.getElementById("char0000000001card" + cardIndex).disabled = false;
}

function randomize0000000001c0() {
  document.getElementById("char0000000001card0").disabled = true;
  let arrayUsed;
  if(localStorage.getItem("mpEnbled") === "false") {
    arrayUsed = avaiblesList0000000001[Math.floor(Math.random() * avaiblesList0000000001.length)];
  }else{
    arrayUsed = list_en_0000000001[Math.floor(Math.random() * list_en_0000000001.length)];
  };
  if (arrayUsed === undefined) {
    showNoAvailableCharacters0000000001(0);
    return;
  }
  const charSelected = arrayUsed;
  const displayedCharacter = decodeURIComponent(charSelected);
  if(lang === "en") {
    document.getElementById("char0000000001name0").innerHTML = texts_en_0000000001[0] + "...";
  }else
  if(lang === "ru") {
    document.getElementById("char0000000001name0").innerHTML = texts_ru_0000000001[0] + "...";
  }else
  if(lang === "he") {
    document.getElementById("char0000000001name0").innerHTML = texts_he_0000000001[0] + "...";
  }
  document.getElementById("char0000000001icon0").src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";
  setTimeout(function() {
    if(lang === "en") {
      document.getElementById("char0000000001name0").innerHTML = texts_en_0000000001[0] + displayedCharacter;
    }else
    if(lang === "ru") {
      document.getElementById("char0000000001name0").innerHTML = texts_ru_0000000001[0] + displayedCharacter;
    }else
    if(lang === "he") {
      document.getElementById("char0000000001name0").innerHTML = texts_he_0000000001[0] + displayedCharacter;
    }
    document.getElementById("char0000000001card0").disabled = false;
    document.getElementById("char0000000001icon0").src = "https://sunderarmor.com/GENSHIN/Characters/1/" + charSelected + ".png";
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name0").innerHTML === document.getElementById("char0000000001name1").innerHTML) {return randomize0000000001c0();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name0").innerHTML === document.getElementById("char0000000001name2").innerHTML) {return randomize0000000001c0();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name0").innerHTML === document.getElementById("char0000000001name3").innerHTML) {return randomize0000000001c0();}
  },1500);
};

function randomize0000000001c1() {
  document.getElementById("char0000000001card1").disabled = true;
  let arrayUsed;
  if(localStorage.getItem("mpEnbled") === "false") {
    arrayUsed = avaiblesList0000000001[Math.floor(Math.random() * avaiblesList0000000001.length)];
  }else{
    arrayUsed = list_en_0000000001[Math.floor(Math.random() * list_en_0000000001.length)];
  };
  if (arrayUsed === undefined) {
    showNoAvailableCharacters0000000001(1);
    return;
  }
  const charSelected = arrayUsed;
  const displayedCharacter = decodeURIComponent(charSelected);
  if(lang === "en") {
    document.getElementById("char0000000001name1").innerHTML = texts_en_0000000001[0] + "...";
  }else
  if(lang === "ru") {
    document.getElementById("char0000000001name1").innerHTML = texts_ru_0000000001[0] + "...";
  }else
  if(lang === "he") {
    document.getElementById("char0000000001name1").innerHTML = texts_he_0000000001[0] + "...";
  }
  document.getElementById("char0000000001icon1").src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";
  setTimeout(function() {
    if(lang === "en") {
      document.getElementById("char0000000001name1").innerHTML = texts_en_0000000001[0] + displayedCharacter;
    }else
    if(lang === "ru") {
      document.getElementById("char0000000001name1").innerHTML = texts_ru_0000000001[0] + displayedCharacter;
    }else
    if(lang === "he") {
      document.getElementById("char0000000001name1").innerHTML = texts_he_0000000001[0] + displayedCharacter;
    }
    document.getElementById("char0000000001card1").disabled = false;
    document.getElementById("char0000000001icon1").src = "https://sunderarmor.com/GENSHIN/Characters/1/" + charSelected + ".png";
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name1").innerHTML === document.getElementById("char0000000001name0").innerHTML) {return randomize0000000001c1();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name1").innerHTML === document.getElementById("char0000000001name2").innerHTML) {return randomize0000000001c1();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name1").innerHTML === document.getElementById("char0000000001name3").innerHTML) {return randomize0000000001c1();}
  },1500);
};

function randomize0000000001c2() {
  document.getElementById("char0000000001card2").disabled = true;
  let arrayUsed;
  if(localStorage.getItem("mpEnbled") === "false") {
    arrayUsed = avaiblesList0000000001[Math.floor(Math.random() * avaiblesList0000000001.length)];
  }else{
    arrayUsed = list_en_0000000001[Math.floor(Math.random() * list_en_0000000001.length)];
  };
  if (arrayUsed === undefined) {
    showNoAvailableCharacters0000000001(2);
    return;
  }
  const charSelected = arrayUsed;
  const displayedCharacter = decodeURIComponent(charSelected);
  if(lang === "en") {
    document.getElementById("char0000000001name2").innerHTML = texts_en_0000000001[0] + "...";
  }else
  if(lang === "ru") {
    document.getElementById("char0000000001name2").innerHTML = texts_ru_0000000001[0] + "...";
  }else
  if(lang === "he") {
    document.getElementById("char0000000001name2").innerHTML = texts_he_0000000001[0] + "...";
  }
  document.getElementById("char0000000001icon2").src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";
  setTimeout(function() {
    if(lang === "en") {
      document.getElementById("char0000000001name2").innerHTML = texts_en_0000000001[0] + displayedCharacter;
    }else
    if(lang === "ru") {
      document.getElementById("char0000000001name2").innerHTML = texts_ru_0000000001[0] + displayedCharacter;
    }else
    if(lang === "he") {
      document.getElementById("char0000000001name2").innerHTML = texts_he_0000000001[0] + displayedCharacter;
    }
    document.getElementById("char0000000001card2").disabled = false;
    document.getElementById("char0000000001icon2").src = "https://sunderarmor.com/GENSHIN/Characters/1/" + charSelected + ".png";
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name2").innerHTML === document.getElementById("char0000000001name1").innerHTML) {return randomize0000000001c2();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name2").innerHTML === document.getElementById("char0000000001name0").innerHTML) {return randomize0000000001c2();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name2").innerHTML === document.getElementById("char0000000001name3").innerHTML) {return randomize0000000001c2();}
  },1500);
};

function randomize0000000001c3() {
  document.getElementById("char0000000001card3").disabled = true;
  let arrayUsed;
  if(localStorage.getItem("mpEnbled") === "false") {
    arrayUsed = avaiblesList0000000001[Math.floor(Math.random() * avaiblesList0000000001.length)];
  }else{
    arrayUsed = list_en_0000000001[Math.floor(Math.random() * list_en_0000000001.length)];
  };
  if (arrayUsed === undefined) {
    showNoAvailableCharacters0000000001(3);
    return;
  }
  const charSelected = arrayUsed;
  const displayedCharacter = decodeURIComponent(charSelected);
  if(lang === "en") {
    document.getElementById("char0000000001name3").innerHTML = texts_en_0000000001[0] + "...";
  }else
  if(lang === "ru") {
    document.getElementById("char0000000001name3").innerHTML = texts_ru_0000000001[0] + "...";
  }else
  if(lang === "he") {
    document.getElementById("char0000000001name3").innerHTML = texts_he_0000000001[0] + "...";
  }
  document.getElementById("char0000000001icon3").src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";
  setTimeout(function() {
    if(lang === "en") {
      document.getElementById("char0000000001name3").innerHTML = texts_en_0000000001[0] + displayedCharacter;
    }else
    if(lang === "ru") {
      document.getElementById("char0000000001name3").innerHTML = texts_ru_0000000001[0] + displayedCharacter;
    }else
    if(lang === "he") {
      document.getElementById("char0000000001name3").innerHTML = texts_he_0000000001[0] + displayedCharacter;
    }
    document.getElementById("char0000000001card3").disabled = false;
    document.getElementById("char0000000001icon3").src = "https://sunderarmor.com/GENSHIN/Characters/1/" + charSelected + ".png";
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name3").innerHTML === document.getElementById("char0000000001name1").innerHTML) {return randomize0000000001c3();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name3").innerHTML === document.getElementById("char0000000001name2").innerHTML) {return randomize0000000001c3();}
    if(arrayUsed.length >= 3 && document.getElementById("char0000000001name3").innerHTML === document.getElementById("char0000000001name0").innerHTML) {return randomize0000000001c3();}
  },1500);
};