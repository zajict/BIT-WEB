var button = document.querySelector('#button');


function getCountryByIP() {
    var xhr = new XMLHttpRequest();
    var ipAddress = document.getElementById("input").value;

    ipAddress.value = xhr.open('GET', 'http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx', true);


    xhr.onload = function () {
        if (xhr.status === 200) {
            var xmlDoc = xhr.responseXML;
            var countryName = xmlDoc.getElementsByTagName("geoplugin_countryName")[0].childNodes[0].nodeValue;
            document.getElementById("result").innerHTML = countryName;
        }
    };
    xhr.send();
}
button.addEventListener("click", getCountryByIP);

