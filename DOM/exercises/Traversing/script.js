/* Create two unordered lists.Each list should be wrapped in a div element.
One<li> element in the second list should have a class “active”,
which sets its background color. */

function createActive() {
    var allList = document.querySelectorAll('ul');
    console.log(allList);
    var fifthList = allList[4];
    fifthList.classList.add('theFifth');
    var AllElements = document.getElementsByClassName('theFifth');
    var allLi = AllElements[0].children;
    var firstLi = allLi[0];
    firstLi.classList.add('active');
    console.log(fifthList);
    console.log(firstLi);
}
createActive();


/*
Create a function that selects the < li > element with class “active”.
Remove the class from that element,
and then select the first < li > element in the first unordered list using node relations.
Apply class to that newly selected < li > element */

function moveActive() {
    var lastClass = document.querySelectorAll('li');
    console.log(lastClass);
    var twentyfirstLi = lastClass[16];
    twentyfirstLi.classList.remove('active');
    console.log(twentyfirstLi);

    var allList = document.querySelectorAll('ul');
    console.log(allList); 
    var fourthList = allList[3];

    fourthList.classList.add('fourth'); 
    var allLis = document.getElementsByClassName('fourth'); 
    console.log(allLis);
    var allLi = allLis[0].children;
    console.log(allLi);
    var firstChildLi = allLi[0];
    firstChildLi.classList.add('theClass');
    console.log(firstChildLi);
}
moveActive();

