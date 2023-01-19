var pNode = document.getElementById("delete");
var inputNode = document.getElementById("input");
var headerNode = document.getElementById("header");

var clickHandler = function () {
    var parent = this.parentElement;
    parent.removeChild(this);
};

var anotherClickHandler = function () {
    console.log("Another");
};

var changeHandler = function (e) {
    console.log(e);
};

pNode.addEventListener("click", changeHandler);
pNode.addEventListener("click", anotherClickHandler);

pNode.removeEventListener("click", anotherClickHandler);

inputNode.addEventListener("change", changeHandler);

headerNode.addEventListener("change", function (e) {
    console.log('x:' + e.clientX + ',' + e.clientY);
});