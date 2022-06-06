// Project Requirements:
/* 
   - Change the background color by generating random rbg color by clicking a button
*/
window.onload = () => {
  main();
};
const main = () => {
  document.querySelector("#change-btn").addEventListener("click", function () {
    const main = document.querySelector("#main");
    main.style.background = generatorRGBColor();
  });
};

// rgb color generator
const generatorRGBColor = () => {
  // lowest rgb(0,0,0,) highest rgb(255,255,255)
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};
