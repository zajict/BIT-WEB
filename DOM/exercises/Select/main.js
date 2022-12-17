// Selecting One / Multiple Elements

/*Create two unordered lists on the page.Create a function that selects the second list and applies a class that sets some background color to it.*/

var htmlNode = document.documentElement;
console.log(htmlNode);

var x = function () {
    var element = document.querySelector('ul.second');
    element.classList.add('list-group2');
    console.log(element.className);
    return element;
}()
console.log(x);


var nodeList = document.querySelectorAll("ul");
nodeList[1].style.backgroundColor = "red";



/*Create a second function that,
when triggered, selects all < li > elements on the page.The function also sets a class that sets some bg color to every < li > element.*/

(function () {
    var nodeList = document.querySelectorAll("li");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.add('list-item');
        nodeList[i].style.backgroundColor = "blue";
    }
})();



/*Create one more unordered list and one more function
The function should select only < li > elements from that last list
Each < li > element should get a class that sets some bg color and transforms the text to uppercase.*/
var thirdList = document.createElement('ul');

var listItems = document.createElement('li');
    thirdList.appendChild(listItems);
var body = document.querySelector('body');
    body.appendChild(thirdList);
var text = document.createTextNode('third list');
    listItems.appendChild(text);

function lastList() {
    listItems.classList.add('third-list-item');
    if (listItems.className === 'third-list-item') {
        listItems.style.backgroundColor = 'yellow';
        listItems.style.textTransform = "uppercase";
    }
}
lastList();




