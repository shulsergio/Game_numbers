x = 1;
let Num_comp = Math.floor(Math.random() * 100) + 1;
// получаем кнопку и сохраним ссылку на неё в переменную
const btn = document.querySelector(".buttonOk");
const result = document.querySelector(".result");

btn.onclick = function () {
  alert(`Вы кликнули на кнопку!`);
  text = +document.querySelector(".Input").value;
  //  console.log(text);
  document.querySelector(".ssi").innerHTML += " " + text;
  //  console.log(text, Num_comp);
  if (text === Num_comp) {
    result.innerHTML = "Ваше число больше";
    result.style.backgroundColor = "Lime";
    alert("YOU WIN");
    location.reload();
  } else {
    if (text > Num_comp) {
      result.innerHTML = "Ваше число больше";
      result.style.backgroundColor = "IndianRed";
    } else {
      result.innerHTML = "Ваше число меньше";
      result.style.backgroundColor = "LightCoral";
    }
  }
};
