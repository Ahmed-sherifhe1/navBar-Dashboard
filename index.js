document.querySelector(".fa-bars").onclick = function(){
    let arrOfNav = []
        for (let i = 0; i < 8; i++) {
            arrOfNav.push(document.querySelector(".container-nav").children[0].children[i])
        }
    arrOfNav.forEach(element => {
        element.classList.add("normalizing");
    });
    document.querySelector(".fa-bars").style.display="none";
    document.querySelector(".container-nav").children[0].style.height = "100dvh";
}
document.querySelector(".fa-xmark").onclick = function(){
    let arrOfNav = []
        for (let i = 0; i < 8; i++) {
            arrOfNav.push(document.querySelector(".container-nav").children[0].children[i])
        }
    arrOfNav.forEach(element => {
        element.classList.remove("normalizing");
    });
    document.querySelector(".fa-bars").style.display="block";
    document.querySelector(".container-nav").children[0].style.height = "0dvh";
}