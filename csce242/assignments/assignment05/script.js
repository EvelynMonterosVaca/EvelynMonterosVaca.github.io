// Say Hello

 function sayHello(){
    document.getElementById("result").textContent="Hello!!!";
 }



 


 //image change

 function changeImage() { 
    document.getElementById("img").src = "images/UofSC.png"; 
}



const colorPicker = document.getElementById('colorPicker');
const star = document.getElementById('star');

colorPicker.addEventListener('input', function(event) {
  star.style.fill = event.target.value;
});