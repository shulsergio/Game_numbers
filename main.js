let x = 0;
let Num_comp = Math.floor(Math.random() * 100) + 1;
// получаем кнопку и сохраним ссылку на неё в переменную
const btn = document.querySelector(".buttonOk");
const result = document.querySelector(".result");

btn.onclick = function () {
  x++;
  alert(`Вы ввели цифру - ${x} раз!`);
  if (x === 11) {
    result.innerHTML = "уже 10 раз ввели, вы проиграли";
    result.style.backgroundColor = "red";
    alert("YOU LOSE");
    location.reload();
  }
  text = +document.querySelector(".Input").value;
  document.querySelector(".ssi").style.visibility = "visible";
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
