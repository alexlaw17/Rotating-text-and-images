//Array of words
var words = [
    'Bobby',
    'Jacky',
    'Tiffany',
    'Alex' //If doing one word Add the last one to the element in the html
];

$(function() {
    var index = 0;

    function rotateWords() {
        $('#swap').slideDown('fast', function() {
            $(this).text(words[index]);
            $(this).slideDown('fast', function() {
                if (index == words.length - 1) {
                    index = 0;
                } else {
                    index++; //Add 1 to the index
                }
            });
        });
    }
    setInterval(rotateWords, 470);



});
