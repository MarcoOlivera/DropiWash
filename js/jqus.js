
//  Preloader

preloader: $(document).ready(function() {
    $("#preloader").delay(1500).fadeOut();
});

//  Mostrar Menu
mostrarMenu: $(document).ready(function () {
    $('#site-header').hide(0);


    $(window).scroll(function () {
        var windowHeight = $(window).scrollTop();
        var main = $("#main").offset();
        main = main.top;

        if (windowHeight >= main) {
            $('#site-header').fadeIn(500);
        } else {
            $('#site-header').fadeOut(500);
        }
    });
});



// Botón de menu para Mobiles
mobileActions: $("#mobile-nav-button, a[href='#top']").on("click", function () {
    $("#main-nav").toggleClass("open"),
        $("#mobile-actions").toggleClass("nav-is-open")
})
