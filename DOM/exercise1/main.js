// Selecting One / Multiple Elements

/*Create two unordered lists on the page.Create a function that selects the second list and applies a class that sets some background color to it.

Create a second function that,
when triggered, selects all < li > elements on the page.The function also sets a class that sets some bg color to every < li > element.Create one more unordered list and one more function
The function should select only < li > elements from that last list
Each < li > element should get a class that sets some bg color and transforms the text to uppercase.*/

var htmlNode = document.documentElement;
console.log(htmlNode);


var x = function () {
    var element = document.querySelector('ul.second');
    element.classList.add('list-group2');
    console.log(element.className);
    return element;
}()
console.log(x);

