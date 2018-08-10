$(function(){
    "use sctrict";
    console.log("Esto es una prueba");

    // mouseenter
    $("div.logo img").on("mouseenter", function(){
        console.log("sobre el logo");
    });

    // mouseleave
    $("div.logo img").on("mouseleave", function(){
        console.log("fuera del logo");
    });



});