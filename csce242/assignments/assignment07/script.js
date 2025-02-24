window.onload = () => {
    document.getElementById("show").onclick = show
    document.getElementById("button").onclick = up
}

const show = () => {
    document.getElementById("climb").classList.toggle("hidden");
}

const up = () => {
    document.getElementById("figure").classList.toggle("man");
}






const ladder = document.getElementById("stairs");
const container = document.getElementById("climb");
const climbButton = 0;

function DrawStairs() {
  const person = document.getElementById("figure");
  for (let index = 0; index < 10; index++) {
    const newNode = document.createElement("div");
    newNode.src = "images/ladderr.png";
    newNode.className = "stair";
  }
}

