let avaiblesList0000000000 = [];

const l0000000000name = "Zenless Zone Zero";
const s0000000000name = "ZZZ";
const texts_en_0000000000 = [
  "Selected is: ",
  "Reselect",
  "Search for Agent"
];
const texts_ru_0000000000 = [
  "Выбрано: ",
  "Повторно выбрать",
  "Поиск агента"
];
const texts_he_0000000000 = [
  "הנבחר הוא: ",
  "בחר מחדש",
  "חיפוש סוכן"
];
const list_en_0000000000 = [
  "Alexandrina Sebastiane",
  "Alice Thymefield",
  "Anby Demara",
  "Anton Ivanov",
  "Aria",
  "Asaba Harumasa",
  "Astra Yao",
  "Banyue",
  "Ben Bigger",
  "Billy Kid",
  "Burnice White",
  "Caesar King",
  "Cissia",
  "Claret Flint",
  "Corin Wickes",
  "Dialyn",
  "Ellen Joe",
  "Evelyn Chevalier",
  "Grace Howard",
  "Hoshimi Miyabi",
  "Hugo Vlad",
  "Jane Doe",
  "Ju Fufu",
  "Koleda Belobog",
  "Komano Manato",
  "Lighter",
  "Lucia Elowen",
  "Luciana de Montefio",
  "Nangong Yu",
  "Nekomiya Mana",
  "Nicole Demara",
  "Norma Hollowell",
  "Orphie Magnusson & Magus",
  "Pan Yinhu",
  "Piper Wheel",
  "Promeia",
  "Pulchra Fellini",
  "Pyrois",
  "Qingyi",
  "Remielle Dan",
  "Roxy Ifrita Pryce",
  "Seed",
  "Seth Lowell",
  "Sigrid de L'Azur",
  "Soldier 0 - Anby",
  "Soldier 11",
  "Soukaku",
  "Starlight - Billy Kid",
  "Sunna",
  "Trigger",
  "Tsukishiro Yanagi",
  "Ukinami Yuzuha",
  "Velina Airgid",
  "Vivian Banshee",
  "Von Lycaon",
  "Ye Shunguang",
  "Yidhari Murphy",
  "Yixuan",
  "Zhao",
  "Zhu Yuan"
];

const g0000000000NameTab = document.getElementById("gameTab0000000000");
const g0000000000NameTitle = document.getElementById("gameTitle0000000000");
const g0000000000Container = document.getElementById("gameContainer0000000000");
if(modalDirection === "right") {
  g0000000000NameTab.innerHTML = s0000000000name;
}else{
  g0000000000NameTab.innerHTML = l0000000000name;
}
g0000000000NameTitle.innerHTML = l0000000000name;

function createCards0000000000() {
  const card0 = document.createElement("button");
  const name0 = document.createElement("div");
  const icon0 = document.createElement("img");
  const card1 = document.createElement("button");
  const name1 = document.createElement("div");
  const icon1 = document.createElement("img");
  const card2 = document.createElement("button");
  const name2 = document.createElement("div");
  const icon2 = document.createElement("img");
  const reSelect = document.createElement("button");
  if(modalDirection === "right") {
    card0.className = "char-card-s";
    card1.className = "char-card-s";
    card2.className = "char-card-s";
  }else{
    card0.className = "char-card-l";
    card1.className = "char-card-l";
    card2.className = "char-card-l";
  }
  reSelect.className = "reselect-button";
  if(lang === "en") {
    reSelect.innerHTML = texts_en_0000000000[1];
  }else
  if(lang === "ru") {
    reSelect.innerHTML = texts_ru_0000000000[1];
  }else
  if(lang === "he") {
    reSelect.innerHTML = texts_he_0000000000[1];
  }
  name0.className = "char-name";
  icon0.className = "char-icon";
  name1.className = "char-name";
  icon1.className = "char-icon";
  name2.className = "char-name";
  icon2.className = "char-icon";
  card0.id = "char0000000000card0";
  name0.id = "char0000000000name0";
  icon0.id = "char0000000000icon0";
  card1.id = "char0000000000card1";
  name1.id = "char0000000000name1";
  icon1.id = "char0000000000icon1";
  card2.id = "char0000000000card2";
  name2.id = "char0000000000name2";
  icon2.id = "char0000000000icon2";
  g0000000000Container.appendChild(card0);
  card0.appendChild(icon0);
  card0.appendChild(name0);
  g0000000000Container.appendChild(card1);
  card1.appendChild(icon1);
  card1.appendChild(name1);
  g0000000000Container.appendChild(card2);
  card2.appendChild(icon2);
  card2.appendChild(name2);
  g0000000000Container.appendChild(reSelect);

  card0.addEventListener('click', () => {
    randomize0000000000c0();
  });
  card1.addEventListener('click', () => {
    randomize0000000000c1();
  });
  card2.addEventListener('click', () => {
    randomize0000000000c2();
  });
  reSelect.addEventListener('click', () => {
    randomize0000000000c0();
    randomize0000000000c1();
    randomize0000000000c2();
  });
};
createCards0000000000();
function avaibles0000000000() {
  const avaiblesList = document.createElement("div");
  const avaiblesSearch = document.createElement("input");
  if(modalDirection === "right") {
    avaiblesList.className = "list-ch-s";
  }else{
    avaiblesList.className = "list-ch-l";
  }
  avaiblesSearch.className = "search-ch";
  avaiblesSearch.id = "searchAvibles0000000000";
  avaiblesSearch.type = "search";
  avaiblesSearch.setAttribute("for", "search-character");
  avaiblesSearch.setAttribute("name", "character");
  if(lang === "en") {
    avaiblesSearch.placeholder = texts_en_0000000000[2];
  }else
  if(lang === "ru") {
    avaiblesSearch.placeholder = texts_ru_0000000000[2];
  }else
  if(lang === "he") {
    avaiblesSearch.placeholder = texts_he_0000000000[2];
  }
  g0000000000Container.appendChild(avaiblesSearch);
  g0000000000Container.appendChild(avaiblesList);
  for (let u = 0; u < list_en_0000000000.length; u++) {
    const chList = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    chList.className = "checkbox-container cc-0000000000";
    checkbox.type = "checkbox";
    checkbox.id = "chChar0000000000un" + [u];
    label.className = "checkbox-label cl-0000000000";
    label.textContent = list_en_0000000000[u];
    label.setAttribute("for", "chChar0000000000un" + [u]);
    avaiblesList.appendChild(chList);
    chList.appendChild(checkbox);
    chList.appendChild(label);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        avaiblesList0000000000.push(list_en_0000000000[u]);
      } else {
        avaiblesList0000000000 = avaiblesList0000000000.filter(name => name !== list_en_0000000000[u]);
      }
      localStorage.setItem("avaibleChars0000000000", JSON.stringify(avaiblesList0000000000));
    });
    avaiblesSearch.addEventListener('input', () => {
      var input, filter, containers, label, i, txtValue;
      input = document.getElementById("searchAvibles0000000000");
      filter = input.value.toUpperCase();
      containers = document.querySelectorAll(".cc-0000000000");
      for (i = 0; i < containers.length; i++) {
        label = containers[i].querySelector(".cl-0000000000");
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
avaibles0000000000();
function checkAvaibledChars0000000000() {
  const savedChars = localStorage.getItem("avaibleChars0000000000");
  if (savedChars === null) {
    return;
  }
  avaiblesList0000000000 = JSON.parse(savedChars);
  const checkboxes = document.querySelectorAll(".cc-0000000000 input[type='checkbox']");
  for (let u = 0; u < checkboxes.length; u++) {
    if (avaiblesList0000000000.includes(list_en_0000000000[u])) {
      checkboxes[u].checked = true;
    }
  }
};
checkAvaibledChars0000000000();
randomize0000000000c0();
randomize0000000000c1();
randomize0000000000c2();
function randomize0000000000c0() {
  if (avaiblesList0000000000.length === 0) return;
  document.getElementById("char0000000000card0").disabled = true;
  const charSelected0 = avaiblesList0000000000[Math.floor(Math.random() * avaiblesList0000000000.length)];
  if(lang === "en") {
    document.getElementById("char0000000000name0").innerHTML = texts_en_0000000000[0] + "...";
  }else
  if(lang === "ru") {
    document.getElementById("char0000000000name0").innerHTML = texts_ru_0000000000[0] + "...";
  }else
  if(lang === "he") {
    document.getElementById("char0000000000name0").innerHTML = texts_he_0000000000[0] + "...";
  }
  document.getElementById("char0000000000icon0").src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";
  setTimeout(function() {
    if(lang === "en") {
      document.getElementById("char0000000000name0").innerHTML = texts_en_0000000000[0] + charSelected0;
      document.getElementById("char0000000000name0").innerHTML += `<div class="hint-text-card">> ` + texts_en_0000000000[1] + ` <</div>`;
    }else
    if(lang === "ru") {
      document.getElementById("char0000000000name0").innerHTML = texts_ru_0000000000[0] + charSelected0;
      document.getElementById("char0000000000name0").innerHTML += `<div class="hint-text-card">> ` + texts_ru_0000000000[1] + ` <</div>`;
    }else
    if(lang === "he") {
      document.getElementById("char0000000000name0").innerHTML = texts_he_0000000000[0] + charSelected0;
      document.getElementById("char0000000000name0").innerHTML += `<div class="hint-text-card">> ` + texts_he_0000000000[1] + ` <</div>`;
    }
    document.getElementById("char0000000000card0").disabled = false;
    document.getElementById("char0000000000icon0").src = "index_data/games/game_0000000000/agents/" + charSelected0 + ".webp";
    if(avaiblesList0000000000.length >= 3 && document.getElementById("char0000000000name0").innerHTML === document.getElementById("char0000000000name1").innerHTML) {return randomize0000000000c0();}
    if(avaiblesList0000000000.length >= 3 && document.getElementById("char0000000000name0").innerHTML === document.getElementById("char0000000000name2").innerHTML) {return randomize0000000000c0();}
  },1500);
}
function randomize0000000000c1() {
  if (avaiblesList0000000000.length === 0) return;
  document.getElementById("char0000000000card1").disabled = true;
  const charSelected1 = avaiblesList0000000000[Math.floor(Math.random() * avaiblesList0000000000.length)];
  if(lang === "en") {
    document.getElementById("char0000000000name1").innerHTML = texts_en_0000000000[0] + "...";
  }else
  if(lang === "ru") {
    document.getElementById("char0000000000name1").innerHTML = texts_ru_0000000000[0] + "...";
  }else
  if(lang === "he") {
    document.getElementById("char0000000000name1").innerHTML = texts_he_0000000000[0] + "...";
  }
  document.getElementById("char0000000000icon1").src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";
  setTimeout(function() {
    if(lang === "en") {
      document.getElementById("char0000000000name1").innerHTML = texts_en_0000000000[0] + charSelected1;
      document.getElementById("char0000000000name1").innerHTML += `<div class="hint-text-card">> ` + texts_en_0000000000[1] + ` <</div>`;
    }else
    if(lang === "ru") {
      document.getElementById("char0000000000name1").innerHTML = texts_ru_0000000000[0] + charSelected1;
      document.getElementById("char0000000000name1").innerHTML += `<div class="hint-text-card">> ` + texts_ru_0000000000[1] + ` <</div>`;
    }else
    if(lang === "he") {
      document.getElementById("char0000000000name1").innerHTML = texts_he_0000000000[0] + charSelected1;
      document.getElementById("char0000000000name1").innerHTML += `<div class="hint-text-card">> ` + texts_he_0000000000[1] + ` <</div>`;
    }
    document.getElementById("char0000000000card1").disabled = false;
    document.getElementById("char0000000000icon1").src = "index_data/games/game_0000000000/agents/" + charSelected1 + ".webp";
    if(avaiblesList0000000000.length >= 3 && document.getElementById("char0000000000name1").innerHTML === document.getElementById("char0000000000name0").innerHTML) {return randomize0000000000c1();}
    if(avaiblesList0000000000.length >= 3 && document.getElementById("char0000000000name1").innerHTML === document.getElementById("char0000000000name2").innerHTML) {return randomize0000000000c1();}
  },1500);
}

function randomize0000000000c2() {
  if (avaiblesList0000000000.length === 0) return;
  document.getElementById("char0000000000card2").disabled = true;
  const charSelected2 = avaiblesList0000000000[Math.floor(Math.random() * avaiblesList0000000000.length)];
  if(lang === "en") {
    document.getElementById("char0000000000name2").innerHTML = texts_en_0000000000[0] + "...";
  }else
  if(lang === "ru") {
    document.getElementById("char0000000000name2").innerHTML = texts_ru_0000000000[0] + "...";
  }else
  if(lang === "he") {
    document.getElementById("char0000000000name2").innerHTML = texts_he_0000000000[0] + "...";
  }
  document.getElementById("char0000000000icon2").src = "index_data/textures/animationed/1bcb7ef5e4bde48e.gif";
  setTimeout(function() {
    if(lang === "en") {
      document.getElementById("char0000000000name2").innerHTML = texts_en_0000000000[0] + charSelected2;
      document.getElementById("char0000000000name2").innerHTML += `<div class="hint-text-card">> ` + texts_en_0000000000[1] + ` <</div>`;
    }else
    if(lang === "ru") {
      document.getElementById("char0000000000name2").innerHTML = texts_ru_0000000000[0] + charSelected2;
      document.getElementById("char0000000000name2").innerHTML += `<div class="hint-text-card">> ` + texts_ru_0000000000[1] + ` <</div>`;
    }else
    if(lang === "he") {
      document.getElementById("char0000000000name2").innerHTML = texts_he_0000000000[0] + charSelected2;
      document.getElementById("char0000000000name2").innerHTML += `<div class="hint-text-card">> ` + texts_he_0000000000[1] + ` <</div>`;
    }
    document.getElementById("char0000000000card2").disabled = false;
    document.getElementById("char0000000000icon2").src = "index_data/games/game_0000000000/agents/" + charSelected2 + ".webp";
    if(avaiblesList0000000000.length >= 3 && document.getElementById("char0000000000name2").innerHTML === document.getElementById("char0000000000name0").innerHTML) {return randomize0000000000c2();}
    if(avaiblesList0000000000.length >= 3 && document.getElementById("char0000000000name2").innerHTML === document.getElementById("char0000000000name1").innerHTML) {return randomize0000000000c2();}
  },1500);
};