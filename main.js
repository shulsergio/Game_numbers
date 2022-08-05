x = 1;
//число генерится
let Num_comp = Math.floor(Math.random() * 100) + 1;
// получим кнопку и сохраним ссылку на неё в переменную
const btn = document.querySelector("#my-btn");
// добавим к обработчик события click
btn.onclick = function () {
  alert(`Вы кликнули на кнопку!`);
  text = +document.querySelector(".Input").value;
  //  console.log(text);
  document.querySelector(".ssi").innerHTML += " " + text;
  //  console.log(text, Num_comp);
  if (text === Num_comp) {
    document.querySelector(".result").innerHTML = "YOU WIN";
    alert("YOU WIN");
    location.reload();
  } else {
    if (text > Num_comp) {
      document.querySelector(".result").innerHTML = "is above";
    } else {
      document.querySelector(".result").innerHTML = "is low";
    }
  }
};
