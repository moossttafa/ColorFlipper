const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function () {

  // get random number between 0-3
  const rendomNumber = getRandomNumber();
  console.log(rendomNumber);


  document.body.style.backgroundColor = colors[rendomNumber];
  color.textContent = colors[rendomNumber];
   
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}



/*
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
*/