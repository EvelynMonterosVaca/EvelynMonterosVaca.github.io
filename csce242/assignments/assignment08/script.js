
  const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
  
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
};

const icon = document.getElementById("figure");
const buttons = document.querySelectorAll('button');

function changeColor(color){
    const heart = document.getElementById('hrt');
    const paths = heart.querySelectorAll('path');
    paths.forEach(path => path.setAttribute('fill', color));
}