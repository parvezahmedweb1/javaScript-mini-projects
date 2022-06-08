// * Project Requirements:
/*
    - Change the background color by generating random hex color by clicking a button
    - Also display the hex code to a disabled input field
    - Add a button to copy the color code
 */
window.onload = () => {
  main();
};

const main = () => {
  const mainDiv = document.querySelector("#main");
  const changeBtn = document.querySelector("#change-btn");
  const output = document.querySelector("#output");
  const copyBtn = document.querySelector("#copy-btn");
  // change btn  event handler
  changeBtn.addEventListener("click", function () {
    const bgColor = generatorHexColor();
    mainDiv.style.background = bgColor;
    output.value = bgColor;
  });
  // copy btn  event handler
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
};

// math func
const math = () => {
  return Math.floor(Math.random() * 255);
};
// hex color code generator
const generatorHexColor = () => {
  //  255, 255, 255 -> #FFFFFF
  const red = math().toString(16);
  const green = math().toString(16);
  const blue = math().toString(16);
  return `#${red}${green}${blue}`;
};
