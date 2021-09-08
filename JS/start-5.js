const phoneNum = document.getElementById("answer");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const del = document.getElementById("del");

function clickNum(event){
    event.preventDefault();
    phoneNum.value += event.path[0].innerText;
}

function delNum(event){
    event.preventDefault();
    phoneNum.value = phoneNum.value.slice(0,-1);    
}

zero.addEventListener("click", clickNum);
one.addEventListener("click", clickNum);
two.addEventListener("click", clickNum);
three.addEventListener("click", clickNum);
four.addEventListener("click", clickNum);
five.addEventListener("click", clickNum);
six.addEventListener("click", clickNum);
seven.addEventListener("click", clickNum);
eight.addEventListener("click", clickNum);
nine.addEventListener("click", clickNum);
del.addEventListener("click", delNum);