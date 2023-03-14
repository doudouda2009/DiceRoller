//Access root
const root = document.getElementById("root");
//Access imgs, btn & p
const img1 = document.getElementById("dice-img-1");
const img2 = document.getElementById("dice-img-2");
const rollBtn = document.getElementById("rollBtn");
const output = document.getElementById("output");

//Get random Image
rollBtn.addEventListener("click", () => {
  //Play the sound of rolling dice
  var audio = new Audio("roll-dice.mp3");
  audio.play();
  //Change dice 1
  let diceImgNum1 = Math.round(Math.random() * 5 + 1);
  console.log(diceImgNum1);
  img1.src = `imgs/dice-${diceImgNum1}.jpg`;

  //Change dice 2
  let diceImgNum2 = Math.round(Math.random() * 5 + 1);
  console.log(diceImgNum2);
  img2.src = `imgs/dice-${diceImgNum2}.jpg`;

  //caltulate the total value
  let outputValue = diceImgNum1 + diceImgNum2;
  console.log(outputValue);

  //Change the output value
  output.textContent = `Output: ${outputValue}`;

  playText(`Your dice total value is ${outputValue}`);
});

function playText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}
