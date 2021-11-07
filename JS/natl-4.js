plusBtn = document.querySelectorAll('.p-btn');
minusBtn = document.querySelectorAll(".m-btn")

function increment(event) {
    let incNum = parseInt(event.path[1].querySelector('.demoInput').value);
    incNum = incNum + +1;
    event.path[1].querySelector('.demoInput').value = incNum;
}
function decrement(event) {
    let decNum = parseInt(event.path[1].querySelector('.demoInput').value);
    decNum = decNum - +1;
    event.path[1].querySelector('.demoInput').value = decNum;
}

for (let i=0; i< plusBtn.length; i++){
    plusBtn[i].addEventListener("click", increment);
}
for (let i=0; i< minusBtn.length; i++){
    minusBtn[i].addEventListener("click", decrement);
}
