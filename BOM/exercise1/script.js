
// Using JS on web page
var message = function () {
    return "Welcome to the page";
}
console.log(message());





/* BOM (Window object):
*/

/* window.navigator
Create a function that prints out in the console the following information
●	the platform on which the browser is running
●	the information about the browser version
●	the company that created that browser
Each piece of information should be printed out in a new row.
*/
var browserRunningPlatform = function () {

    return window.navigator.platform;
}();
console.log(browserRunningPlatform);



var browserVersion = function () {

    return window.navigator.appVersion;
}();
console.log(browserVersion);



var companyName = function () {
    return window.navigator.userAgent;
}();
console.log(companyName);



/*Create new “isOnline” function that checks if the browser is online.It should print out “online” when the browser is online and “offline” when there is no Internet connection. */
var isOnline = function () {
    if (window.navigator.online) {
        return "online";
    } else {
        return "offline";
    }
}();
console.log(isOnline);



/* window.screen
Create a function that prints out the following information in the console:
●	current browser width and height
●	max possible browser height */

var browserWidthAndHeight = function () {
    var x = window.screen.availWidth;
    var y = window.screen.availHeight;
    var z = window.screen.height;
    var res = (x + "") + "\n" + (
        y + ""
    ) + "\n" + (
        `${z}`
    );
    return res;
}();
console.log(browserWidthAndHeight);




/*window.location
Write a function that prints out website’s url information in the console:
●	full url address
●	domain name
●	used protocol
●	parameters which are part of URL.

Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions */
var FullURLAddress = function () {
    var urlAddress = window.location.href;
    var domainName = window.location.hostname;
    var protocol = window.location.protocol;
    var parameters = window.location.search;
    var url = (urlAddress + "") + "\n" + (
        domainName + ""
    ) + "\n" + (
        protocol + ""
    ) + "\n" + (
        parameters + ""
    );
    return url;
}();
console.log(FullURLAddress);


// var reloadPage = function () {
//     return window.location.reload();
// }();


// var redirectsWebsite = function () {
//     return location.replace("https://www.andakulova.com/?utm_term=art%20gallery&utm_creative=614415665489&utm_campaign=17938233821");

// }();
// console.log(redirectsWebsite());






/*window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
    
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the stored value.

Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle. */

var readStoredData = function () {
    window.localStorage.setItem("font size", "3rem");
    var y = window.localStorage.getItem("font size");
    if (! y) {
        return "There is no data"
    } else {
        return y;
    }
}();
console.log(readStoredData);




var NewData = function () {
    window.localStorage.setItem("background color", "black");
    var x = window.localStorage.getItem("background color");
    return x;
}();
console.log(NewData);




var SessionData = function () {
    window.sessionStorage.setItem("margin", "40px");
    var z = window.sessionStorage.getItem("margin");;
    return z;
}();
console.log(SessionData);

window.sessionStorage.removeItem('window');

window.sessionStorage.clear();







/* window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back. */

// back() – loads the previous URL in the history list
// forward()– loads the next URL in the history list
// go(number)– loads a specific URL from the history 
window.history.back();

function back() {
    if (isPageActive()) {
        window.history.back();
    }
}

window.history.forward();

function goForward() {
    window.history.forward();
}
window.history.go(-2);

function goBack() {
    window.history.go(-2);
}






/*Window Methods
● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer,
that answer is used in the confirm dialog
● The format of the message in the dialog should be : "We will submit this answer now! " + the answer
● If the user clicks OK,
show alert with success message
● If the user clicks Cancel,
don 't show anything */
 
var popup = function () {
    window.alert("Welcome");
    window.prompt("What do you expect from this page?");
    if (window.confirm("We will submit this answer now!")) {
        window.alert("You have successfully submitted the answer");
    }
}
popup();




