// mode
function changeColor() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}


// change text
function swapText() {
    var a = document.getElementById("changeText")

    if (a.innerHTML === "something") {
        a.innerHTML = "new text";
    } else {
        a.innerHTML = "something";
    }
}



