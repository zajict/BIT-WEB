$("#search-button").click(function () {
    var searchTerm = $("#search-input").val();
    var url = "https://api.github.com/search/users?q=" + searchTerm;
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            $("#search-results").empty();
            response.items.forEach(function (user) {
                var html = "<div class='search-result'>";
                html += "<img src='" + user.avatar_url + "' alt='" + user.login + "' />";
                html += "<span>" + user.login + "</span>";
                html += "</div>";
                $("#search-results").append(html);
            });
        }
    });
});

