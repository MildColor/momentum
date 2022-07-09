const bgbd = document.querySelector("#backgoundbody");

function handleBodyBackground() {
  let windowWidth = window.innerWidth;
  const colors = ["palegreen", "orange", "pink"];

  if (windowWidth > 1000) {
    document.body.style.backgroundColor = colors[0];
    console.log("over 1000");
  } else if (windowWidth >= 700) {
    document.body.style.backgroundColor = colors[1];
    console.log("middle");
  } else {
    document.body.style.backgroundColor = colors[2];
    console.log("low");
  }
}

window.addEventListener("resize", handleBodyBackground);
