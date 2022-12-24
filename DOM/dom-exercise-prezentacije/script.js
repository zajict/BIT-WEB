var element = document.getElementsByTagName('body');
console.log(element);


var first = document.getElementsByTagName('body')[0];
first.className = ' body';
console.log(first);



var newHeader = document.createElement('h1');
newHeader.innerHTML = 'New main title on page';
document.body.appendChild(newHeader);

var newHeader = document.createElement('h1');
newHeader.innerHTML = 'This is a new header';
newHeader.id = 'myHeader';
newHeader.className = 'header';
newHeader.style.color = 'red';
document.body.appendChild(newHeader);




var sections = document.getElementsByTagName('section');
var section = sections[0];


var firstParagraph = document.querySelector('p');
firstParagraph.classList.add('new-class');
/*var firstParagraph = document.querySelector('p');
firstParagraph.className += ' new-class'*/









