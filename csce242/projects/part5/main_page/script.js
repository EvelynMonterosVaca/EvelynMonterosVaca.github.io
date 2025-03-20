const toggleNav = () =>{
    document.getElementById("show").classList.toggle("display");
}

const homeNav = () => {
    document.getElementById("sub1").classList.toggle("display")
}





window.onload = () => {
    document.getElementById("toggle").onclick = toggleNav;
    document.getElementById("home").onclick = homeNav
}