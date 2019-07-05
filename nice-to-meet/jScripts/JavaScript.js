//btn-top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    $("#top-btn").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});

function tab_nav() {
$("ul li>a").focus(function () {
    $(this).parents("li").find("ul").show();
    console.log("nav");

});
$("ul li ul li:last-child>a").focusout(function () {
    $(this).parents("li").find("ul").css("display", "");
    console.log('exit-nav')
})
};


//scroll reveal
function scrollReveal() {
    window.sr = ScrollReveal();
    sr.reveal('.introduction', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.bread-crumbs-nav', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('a .fa-chevron-down', {
        duration: 2000,
        delay: 1000,
        origin: 'bottom'
    });
    sr.reveal('.countries ul', {
        duration: 2000,
        viewFactor: 0.2,
        origin: 'bottom'
    });
    sr.reveal('.carousel.quick-facts', {
        duration: 2000,
        viewFactor: 0.2,
        origin: 'bottom'
    });
    sr.reveal('.countryBanner h1', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.countryBanner p', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.countryBanner.fa-chevron-down', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.countryBanner ul', {
        duration: 2500,
        origin: 'bottom',
    });
    sr.reveal('.country-bio', {
        duration: 2000,
        origin: 'bottom',
        delay: 500
    });
    sr.reveal('.greetings-section', {
        duration: 2500,
        origin: 'bottom',
        viewFactor: 0.1,
    });
    sr.reveal('.communication-section', {
        duration: 2500,
        origin: 'bottom',
        viewFactor: 0.1,
    });
    sr.reveal('.dress-img-scroll', {
        duration: 2500,
        origin: 'bottom',
        viewFactor: 0.1,
        distance: '500px'
    });
    sr.reveal('.rule', {
        duration: 2000,
        origin: 'bottom',
        viewFactor: 0.1,
    });
    sr.reveal('.negotiation-section', {
        duration: 2500,
        origin: 'bottom',
        viewFactor: 0.2,
    });
    sr.reveal('.business-cards-section', {
        duration: 2500,
        origin: 'bottom',
        viewFactor: 0.1,
    });
}

//smooth scrolling
function smootheScrolling() {

    function filterPath(string) {
        return string
            .replace(/^\//, '')
            .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
            .replace(/\/$/, '');
    }

    var locationPath = filterPath(location.pathname);
    $('a.anchor[href*="#"]').each(function () {
        var thisPath = filterPath(this.pathname) || locationPath;
        var hash = this.hash;
        if ($("#" + hash.replace(/#/, '')).length) {
            if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
                var $target = $(hash), target = this.hash;
                if (target) {
                    $(this).click(function (event) {
                        event.preventDefault();
                        $('html, body').animate({ scrollTop: $target.offset().top }, 1000, function () {
                            location.hash = target;
                            $target.focus();
                            if ($target.is(":focus")) { //checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); //Adding tabindex for elements not focusable
                                $target.focus(); //Setting focus
                            };
                        });
                    });
                }
            }
        }
    })
}


//contrast
function accessible() {

    $("a#changeContrastButton").click(function () {
        $("body").toggleClass("contrast");  // adding or removing the contrast class to the body
        saveDataToLocalStorate();
    });

    getDataFromLocalStorate(); // running a function responsible to save the body class data to the local storage (which is a memory unit that saves data between pages)
}

// This function run when the page is ready, and it retrieve the data from the local storage and set it as a class to the body
function getDataFromLocalStorate() {
    var bodyClass = localStorage.getItem("bodyClass");
    if (bodyClass) {
        $("body").attr("class", bodyClass);
    }
}

function saveDataToLocalStorate() {
    var bodyClass = $("body").attr("class");
    localStorage.setItem("bodyClass", bodyClass);
}


//links-underline
function linksUnderline() {

    $("a#changeUnderlineButton").click(function () {
        $("body").toggleClass("underline");  // adding or removing the contrast class to the body
        saveDataToLocalStorate();
    });

    getDataFromLocalStorate(); // running a function responsible to save the body class data to the local storage (which is a memory unit that saves data between pages)
}

 //This function run when the page is ready, and it retrieve the data from the local storage and set it as a class to the body
function getDataFromLocalStorate() {
    var bodyClass = localStorage.getItem("bodyClass");
    if (bodyClass) {
        $("body").attr("class", bodyClass);
    }
}

function saveDataToLocalStorate() {
    var bodyClass = $("body").attr("class");
    localStorage.setItem("bodyClass", bodyClass);
}

