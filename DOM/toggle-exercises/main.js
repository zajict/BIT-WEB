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


// toggle class
function toggleClass() {
    var x = document.getElementById("toggleClass");
    x.classList.toggle("toggle-class-style");
}


function addClassName() {
    var x = document.getElementById("divClassAdd");
    x.classList.add("add-class-style");
}
