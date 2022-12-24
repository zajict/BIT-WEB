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












