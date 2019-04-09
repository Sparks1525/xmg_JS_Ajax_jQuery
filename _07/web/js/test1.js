


$(function() {


    var eles1 = $("form input");
    console.debug(' var eles1 = $("form > input")');
    console.debug(eles1);

    console.debug("-------------------");

    var eles2 = $("form > input");
    console.debug(' var eles2 = $("form > input")');
    console.debug(eles2);


    console.debug("-------------------");

    var eles3 = $("label + input");
    console.debug(' var eles3 = $("label + input")');
    console.debug(eles3);

    console.debug("-------------------");

    var eles4 = $("form ~ input");
    console.debug(' var eles4 = $("form ~ input")');
    console.debug(eles4);

});