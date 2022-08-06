let x = 0;
let Num_comp = Math.floor(Math.random() * 100) + 1;
// получаем кнопку и сохраним ссылку на неё в переменную
const btn = document.querySelector(".buttonOk");
const result = document.querySelector(".result");

/*function Over() {
  document.querySelector(".ssi").style.visibility = "visible";
  document.querySelector(".ssi").innerHTML += " " + text;
}*/

btn.onclick = function () {
  x++;
  alert(`You input - ${x} times!`);
  if (x === 11) {
    result.innerHTML = "You LOSE! 10 times input";
    result.style.backgroundColor = "red";
    alert("YOU LOSE");

    setTimeout(location.reload(), 100000000);
  }
  text = +document.querySelector(".Input").value;
  document.querySelector(".ssi").style.visibility = "visible";
  document.querySelector(".ssi").innerHTML += " " + text;
  //  console.log(text, Num_comp);
  if (text === Num_comp) {
    result.innerHTML = "YOU WIN";
    result.style.backgroundColor = "Lime";
    alert("YOU WIN");
    setTimeout(location.reload(), 100000000);
  } else {
    if (text > Num_comp) {
      result.innerHTML = "Число больше/ Number above";
      result.style.backgroundColor = "IndianRed";
    } else {
      result.innerHTML = "Число меньше/ Number small";
      result.style.backgroundColor = "LightCoral";
    }
  }
};
