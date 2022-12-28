// selecting elements

var element = document.getElementsByTagName('body');
console.log(element);


var first = document.getElementsByTagName('body')[0];
first.className = ' body';
console.log(first);



var newHeader = document.createElement('h1');
newHeader.innerHTML = 'New main title on page';
document.body.appendChild(newHeader);
newHeader.id = 'myHeader';
newHeader.className = 'header';
newHeader.style.color = 'red';
document.body.appendChild(newHeader);


var firstSection = document.querySelector('section');
firstSection.classList.add('first-section');

var firstH = document.querySelector('h1');
firstH.classList.add('first-titles');

var firstParagraph = document.querySelector('p');
firstParagraph.classList.add('first-paragraph');


var paragraphs = document.getElementsByTagName('p');
var secondParagraph = paragraphs[1];
secondParagraph.classList.add('second-paragraph');

// var secondParagraph = document.querySelector('p:nth-of-type(2)');
// secondParagraph.classList.add('second-paragraph');

var sections = document.getElementsByTagName('section');
var secondSection = sections[1];
secondSection.classList.add('second-section');





//Accessing / Updating a Text Node
var lastParagraph = document.querySelector('p:last-of-type');
document.getElementById('last-paragraph').textContent = "PARAGRAPH SELECTOR: " + lastParagraph.textContent;



//toggle, add, remove - BITNO


//toggle
var toggleButton = document.getElementById('toggle-button');
var elementToToggle = document.getElementById('element-to-toggle');

toggleButton.addEventListener('click', () => {
    elementToToggle.classList.toggle('hidden');
});


function myFunction() {
var x = document.getElementById("toggle-hide1");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}













