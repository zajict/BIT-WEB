/*Create an unordered list containing < li > items that represent navigation.
Create a function that takes text from one of the < li > elements and presents it on screen using alert.*/
var alert = function () {
    var navigation = document.querySelector('ul');
    navigation.classList.add('navigation-list');

    var li = navigation.firstElementChild;
    window.alert(li.textContent)
}()
console.log(alert);




/*Create one more function.The function should take some text as an argument.
The function should select the last < li > element in the list and replace its text with text passed as the function argument.*/

function changeText(text) {
    var ul = document.querySelector('ul');
    var li = ul.lastElementChild;
    li.textContent = text;
}
changeText('PORTFOLIO');
