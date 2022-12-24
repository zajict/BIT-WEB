 /* Create a form that contains multiple input elements with labels.Some of those elements should be required.Create a function that validates the form.The function checks each input element that belongs to the form.If the element has the required attribute and no data,
it should get red borders. */
function validateForm() {
    var inputs = document.querySelectorAll("#form input");

    var valid = true;

    inputs.forEach(function (input) {
        if (input.hasAttribute("required") && input.value === "") { 
            input.style.border = "2px solid red";

            valid = false;
        } else {
            input.style.border = "";
        }
    });

    return valid;
}
validateForm()




