var htmlNode = document.documentElement;
console.log( 'htmlNode:' ,htmlNode);

console.log(htmlNode.nodeName);
console.log(htmlNode.tagName);

console.log(htmlNode.attributes);
console.log(htmlNode.id);
console.log(htmlNode.className);


console.log(htmlNode.hasChildNodes());
console.log(htmlNode.childNodes);





var p = document.getElementById('clock');
setInterval(function () {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var formattedTime = hours + ':' + minutes + ':' + seconds;
    p.textContent = formattedTime;

}, 1000);

// console.log(hours + ':' + minutes + ':' + seconds);


