// Project Requirements:
/* 
    - Change the background color by generating random hex color by clicking a button
 */
window.onload = () => {
  main();
};
const main = () => {
  document.querySelector("#change-btn").addEventListener("click", function () {
    const mainDiv = document.querySelector("#main");
    const output = mainDiv.children[1];
    const bgColor = generatorHexColor();
    mainDiv.style.background = bgColor;
    output.value = bgColor;
  });
};

// Hex color code generator
const generatorHexColor = () => {
  //  #000000  #ffffff
  // 255, 255, 255 -> #FFFFFF
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
console.log(generatorHexColor());
