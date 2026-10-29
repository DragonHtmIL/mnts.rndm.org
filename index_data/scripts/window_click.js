window.addEventListener('click', function() {
  const main = document.body;
  const effect = document.createElement("div");
  effect.className = "click-effect";
  effect.classList.add("game" + localStorage.getItem("defaultGame"));
  effect.id = "clckEff";
  effect.style.left = event.clientX + "px";
  effect.style.top = event.clientY + "px";
  main.appendChild(effect);
  setTimeout(() => {
    main.removeChild(effect);
  }, 600);
});