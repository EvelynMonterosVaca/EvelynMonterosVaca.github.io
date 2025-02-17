
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


function showImage() {
    const input = document.getElementById("transportInput").value.toLowerCase();
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // Clear previous image
  
    let imageSrc = "";
  
    switch (input) {
      case "bike":
        imageSrc = "images/bike.jpeg"; // Replace ith actual image path
        break;
      case "scooter":
        imageSrc = "images/scooter.jpeg"; // Replace with actual image path
        break;
      case "car":
        imageSrc = "images/car.jpeg"; // Replace with actual image path
        break;
      case "skateboard":
        imageSrc = "images/skateboard.jpeg"; // Replace with actual image path
        break;
      default:
        imageContainer.textContent = "* Error";
        return;
    }
  
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = input;
      img.onerror = function() {
          imageContainer.textContent = "Image not found.";
      };
    imageContainer.appendChild(img);
  }

  function ReverseDisplay(b) {
    var els = document.querySelectorAll('.toggle.active:not(#' + b + ')');
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('active');
    }
    document.getElementById(b).classList.toggle('active')
  
  }
