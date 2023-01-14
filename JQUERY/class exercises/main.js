$(function () {
    // $('div').toggleClass('active');

    console.log($('div').html()); //samo prvi iz liste. ako pisemo bez  -.html()-  onda smo sve div-ove selektovali 

    console.log($('div').text()); //text sadrzaj svih divova

    console.log($('div').html('<spam> Ovo smo setovali </spam>'));



    $('li').click(function () {
        $(this).remove();
    });


    // $('ul').delay(500).fadeOut(1500).delay(500).fadeIn(1500);

    // var $ul = $('ul'); 
    // setInterval(function() {
    //     $('ul').delay(1000).fadeOut(1500).delay(1000).fadeIn(800);

    // });


    var $newLi = $('<li></li>');
    $newLi.text('Novi Element');
    $newLi.addClass('test-class');
    $newLi.attr('id', 'test-id');

    // $('li:last'),after($newLi);
    // var $allLiElements = $('li');


    // $allLiElements.each(function(i, element) {
    //     var jqueryEl = $(element);
    // });
});



//input:checkbox
























