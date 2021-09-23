const pinkBtn = document.querySelectorAll(".pink-back")
const blueBtn = document.querySelectorAll(".blue-back")
const yellowBtn = document.querySelectorAll(".yellow-back")

function changePink(event){
    event.preventDefault();
    const activePink = document.querySelector(".active-pink");
    const target = document.querySelector("#blue-section");
    if (activePink){
        activePink.classList.remove("active-pink");
    }
    this.classList.add('active-pink');
    target.scrollIntoView({behavior:"smooth", block:"center"});
}
function changeBlue(event){
    event.preventDefault();
    const activeBlue = document.querySelector(".active-blue");
    const target = document.querySelector("#yellow-section");
    if (activeBlue){
        activeBlue.classList.remove("active-blue");
    }
    this.classList.add('active-blue');
    target.scrollIntoView({behavior:"smooth", block:"center"});
}
function changeYellow(event){
    event.preventDefault();
    const activeYellow = document.querySelector(".active-yellow");
    if (activeYellow){
        activeYellow.classList.remove("active-yellow");
    }
    this.classList.add('active-yellow');
}

for (let i=0; i< pinkBtn.length; i++){
    pinkBtn[i].addEventListener("click", changePink);
}
for (let i=0; i< blueBtn.length; i++){
    blueBtn[i].addEventListener("click", changeBlue);
}
for (let i=0; i< yellowBtn.length; i++){
    yellowBtn[i].addEventListener("click", changeYellow);
}