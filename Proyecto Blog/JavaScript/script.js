$(function(){
    "use strict";
    $("div.nuestros-servicios div:first").show();
    $(".servicios nav a:first").addClass("activo");

    $(".servicios nav a").on("click", function(){
        $(".servicios nav a").removeClass("activo");
        $(this).addClass("activo");
        var enlace = $(this).attr('href');
        // console.log("enlace: " + enlace);
        $(".nuestros-servicios div").fadeOut();
        $(enlace).fadeIn();

        return false;
    });

});