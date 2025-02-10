// Say Hello

 function sayHello(){
    document.getElementById("result").textContent="Hello!!!";
 }



 //change color




 const colorPicker = document.getElementById('colorPicker');
 const star = document.getElementById('star2');

 colorPicker.addEventListener('input', function(event) {
   const selectedColor = event.target.value;
   star.setAttribute('fill', selectedColor);
 });
 










 //image change

 function changeImage() { 
    document.getElementById("img").src = "images/UofSC.png"; 
}

