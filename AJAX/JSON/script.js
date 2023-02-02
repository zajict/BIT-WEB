var button = document.querySelector('#button');

function getDogImage() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");

    xhr.onload = function () {
        if(xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var imageURL = response.message;

            var image = document.createElement("img");
            image.src = imageURL;
            document.getElementById("gallery").appendChild(image);
        } else {
            console.log("Error" + xhr.status);
        }
    };
    xhr.send();
}
button.addEventListener("click", getDogImage);
