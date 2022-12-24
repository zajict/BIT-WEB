"use strict";

var clockNode = document.getElementById("clock");

setInterval(function () {
    var now = new Date();

    var hours = now.getHours();
    var hrsStr = "".concat(hours);
    if (hrsStr.length < 2) {
        hrsStr = "0".concat(hrsStr)
    };

    var minutes = now.getMinutes();
    var minsStr = "".concat(minutes);
    if (minsStr.length < 2) {
        minsStr = "0".concat(minsStr)
    };

    var seconds = now.getSeconds();
    var secsStr = "".concat(seconds);
    if (secsStr.length < 2) {
        secsStr = "0".concat(secsStr)
    };

    var time = hrsStr + ":" + minsStr + ":" + secsStr;
    clockNode.textContent = time;
}, 1000)
