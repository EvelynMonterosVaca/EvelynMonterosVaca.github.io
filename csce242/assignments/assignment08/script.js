
  const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
  
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
};

const icon = document.getElementById("figure");
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const color = button.getAttribute('data-color');
      icon.querySelector('path').setAttribute('fill', color);
    });
  });