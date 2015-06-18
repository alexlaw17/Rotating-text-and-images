//Array of words
var words = [
    'Rocky',
    'Colt',
    'Tum Tum',
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

    function aboutSlide() {
        var slides = $('.paper')
        var current = 0;
        $('#next').click(function() {
            current = ++current % slides.length;
            $('.paper-wrapper').animate({
                    'left': -(slides.eq(current).position().left)
                },
                600
            );
        });
    }
    aboutSlide();
    //slide version 2 auto

    //customize speed
    var width = 300;
    var animationSpeed = 1000;
    var currentSlide = 1;
    //cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slide = $slideContainer.find('.slide');
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({
                'left': '-=' + width
            }, animationSpeed, function() {
                currentSlide++;
                if (currentSlide === $slide.length - 1) {
                    currentSlide = 1;
                    $slideContainer.animate({
                        'left': '0'
                    }, animationSpeed);
                }
            });
        }, 1000);
    }

    function stopSlider() {
        clearInterval(interval)
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    startSlider();
});
