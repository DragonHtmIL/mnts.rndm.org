let teamSize = 0;
const lang = localStorage.getItem('lang') || 'en';
const defaultGame = localStorage.getItem('defaultGame') || 'wellcome';
const gmsList = document.getElementById("games");
const gmsContainers = document.getElementById("gamesContainers");
const headerTitle = document.getElementById("pageTitle");
const moreScripts = document.getElementById("moreScripts");

const a0000 = document.getElementById("modalMSname");
const a0001 = document.getElementById("applySettings");