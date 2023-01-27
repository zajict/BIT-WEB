var listEl = document.querySelector('#list');

// Vanila JS
// create new request
var newXHR = new XMLHttpRequest();
// prepares the request!
newXHR.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// "load" is fired when the response to our request is completed and without error
newXHR.onload = function (event) {
    // if (newXHR.status === 200) {
    // var todos = JSON.parse(newXHR.responseText);
    // todos.forEach(function (todo) {
    //     var liEl = document.createElement('li');
    //     liEl.textContent = todo.title;
    //     listEl.appendChild(liEl);
    // });
    // } else {
    // throw new Error('something went wrong');
    // }
};
// send request!
newXHR.send();

// JQUERY
$.get('https://jsonplaceholder.typicode.com/todos', function (todos) {
    // todos.forEach(function (todo) {
    // var liEl = document.createElement('li');
    // liEl.textContent = todo.title;
    // listEl.appendChild(liEl);
    // });
});

// Vanila JS noviji nacin
fetch('https://jsonplaceholder.typicode.com/todos').then(function (response) {
    return response.json();
}).then(function (todos) {
    // todos.forEach(function (todo) {
    // var liEl = document.createElement('li');
    // liEl.textContent = todo.title;
    // listEl.appendChild(liEl);
    // });
});

// Axios
axios.get('https://jsonplaceholder.typicode.com/todos').then(function (response) { // handle success
    var todos = response.data;
    todos.forEach(function (todo) {
        var liEl = document.createElement('li');
        liEl.textContent = todo.title;
        listEl.appendChild(liEl);
    });
});





//Pozivamo funkciju koja će da parsira JSON - ov tekst u JavaScript objekat :

var zaposleni = '{ "employees" : [' + '{ "firstName":"John" , "lastName":"Doe" },' + '{ "firstName":"Anna" , "lastName":"Smith" },' + '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj1 = JSON.parse(zaposleni);
console.log(obj1);

// Ova funkcija radi suprotno od parsiranja, pravi od Javscript objekta validan JSON podatak.
var obj2 = JSON.stringify(zaposleni);
console.log(obj2);


