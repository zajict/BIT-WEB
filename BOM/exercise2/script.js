// Global JavaScript Objects(homework)
/*
Math
*/

// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.
/* Round
Create a function that uses the passed array of numbers and rounds all its elements to two decimals.Print out the modified array in the console.Use the first function forgenerating the input array.*/


var x = function () {
    var array = Array(10).fill().map(() => 50 * Math.random());
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toFixed(2);

    }
    return array;
}()
console.log(x);



/*● FloorCreate a function that uses the passed array of numbers and rounds all its elements to the nearest integer.Print out the modified array in the console.Use the first function forgenerating the input array.*/

var x = function () {
    var array = Array(10).fill().map(() => 50 * Math.random());
    for (i = 0; i < array.length; i ++) {
        array[i] = Math.round(array[i]);
    }
    return array;
}();
console.log(x);




/*● MaxCreate a function that finds and prints out the biggest element in the passed array of numbers.Date*/
var x  = function () {
var num = Math.max(34, 46, 23, 27, 36, 33, 36, 5, 20, 41);

    return num;
}();
console.log(x);


/*● Print out the whole date object in the console.● Print out the current time in the console.● Print out the current date in the console.*/
// whole date
var y = new Date();
var date = y.getDate();
console.log(y);


var d = new Date();
var time = d.getTime();
console.log(time);








