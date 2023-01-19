$(function () {

    var images = [
        "https://images.pexels.com/photos/6665218/pexels-photo-6665218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        "https://images.pexels.com/photos/6665218/pexels-photo-6665218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        "https://images.pexels.com/photos/6665218/pexels-photo-6665218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        "https://images.pexels.com/photos/6665218/pexels-photo-6665218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        "https://images.pexels.com/photos/6665218/pexels-photo-6665218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1jpg"
    ];

    var container = $("<div></div>");
    container.insertBefore("script");

    images.forEach(function (image) {
        var img = $("<img>");
        img.attr("src", image);
        img.appendTo(container);
    });

    container.prepend("<h1>Animal Images</h1>");

    container.find("img").each(function () {
        var width = Math.floor(Math.random() * 200) + 100;
        var height = Math.floor(Math.random() * 400) + 100;
        $(this).css({
            width: width + "px",
            height: height + "px"
        });
    });

    container.find("img").each(function () {
        var width = $(this).width();
        if (width < 200) {
            $(this).css("border", "3px solid green");
        } else {
            return false;
        };
    });

});

