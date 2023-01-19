$(function () {

var images1 = ["https://images.pexels.com/photos/13261505/pexels-photo-13261505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

            "https://images.pexels.com/photos/13261505/pexels-photo-13261505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "https://images.pexels.com/photos/13261505/pexels-photo-13261505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];



var images2 = ["https://images.pexels.com/photos/14825643/pexels-photo-14825643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

            "https://images.pexels.com/photos/14825643/pexels-photo-14825643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

            "https://images.pexels.com/photos/14825643/pexels-photo-14825643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"];



    $("<div></div>").addClass("gallery1").insertBefore("script:first");
    $("<div></div>").addClass("gallery2").insertAfter("script:last");

    images1.forEach(function (image) {
        var img = $("<img>");
        img.attr("src", image);
        img.css("width", "33%");
        img.appendTo($(".gallery1"));
    });

    

    images2.forEach(function (image) {
        var img = $("<img>");
        img.attr("src", image);
        img.css("width", "33%");
        img.appendTo($(".gallery2"));
    });

    $(".gallery1 img").first().addClass("selected");
    $(".selected").css("border", "3px solid red");


    function moveBorder() {
        var selected = $(".gallery1 img.selected");
        selected.removeClass("selected").css("border", "none");
        var middle = $("body").children(".gallery2").find("img").eq(1);
        middle.addClass("selected").css("border", "3px solid red");
    };
    moveBorder();
})

