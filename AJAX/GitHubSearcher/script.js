/*
$('#search-box').keypress(function (e) {
    if (e.which == 13) {
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/search/users?q=' + $(this).val(),
            success: function (data) {
                $('#results').empty();
                data.items.forEach(function (item) {
                    $('#results').append('<div class="user">' + '<img class="avatar" src="' + item.avatar_url + '" alt="Avatar">' + '<div>' + item.login + '</div>' + '</div>');
                });
            }
        });
    }
});
*/


