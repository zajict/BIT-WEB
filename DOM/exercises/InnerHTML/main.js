/* Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page. 
*/
function dropdownMenu() {
    var menuNode = document.querySelector('div').innerHTML = "<select name='menu' id='menu'><option value='1'>HOME</option><option value='2'>ABOUT US</option><option value='3'>GALLERY</option><option value='3'>CONTACT</option></select>";
}
dropdownMenu()



function createSelect(options) {
    var header = document.getElementById('header');
    var selectNode = document.createElement('select');

    for (var i = 0; i < options.length; i++) {
        var optionNode = document.createElement('option');
        optionNode.textContent = options[i]
        selectNode.appendChild(optionNode)
    }

    header.appendChild(selectNode)
}
createSelect(['Option 1', 'Option 2', 'Option 3']);

