$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

function toggle() {
    var header = document.getElementById("headerNav");
    header.classList.toggle('active');
}

$('.skill-pro').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');

    $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 3000,
        step: function () {
            $this.attr('per',Math.floor(this.animatedValue) + '%');
        },
        complete: function () {
            $this.attr('pre',Math.floor(this.animatedValue) + '%');
        }
    });
})


function skills() {
    $('.skill-pro').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
    
        $({animatedValue: 0}).animate({animatedValue: per},{
            duration: 3000,
            step: function () {
                $this.attr('per',Math.floor(this.animatedValue) + '%');
            },
            complete: function () {
                $this.attr('pre',Math.floor(this.animatedValue) + '%');
            }
        });
    })
}

/* Scroll REVEAL */
ScrollReveal().reveal('.home-sec');
ScrollReveal().reveal('.about-sec', {delay: 500});
ScrollReveal().reveal('.services-sec', {delay: 500});
ScrollReveal().reveal('.proyect-sec', {delay: 500});
ScrollReveal().reveal('.skills-sec', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});