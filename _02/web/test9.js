



window.onload = function () {

    var inputEle = document.getElementById("username");
    console.debug("inputEle.value");
    console.debug(inputEle.value);

    console.debug("inputEle['value']");
    console.debug(inputEle['value']);

    console.debug("inputEle.getAttribute('java')");
    console.debug(inputEle.getAttribute('java'));


    inputEle.value="change1";
    console.debug("inputEle.value=\"change1\"");

    inputEle['value'] = "change2";
    console.debug("inputEle['value'] = \"change2\"");

    inputEle.setAttribute("value", "change3");
    console.debug("inputEle.setAttribute(\"value\", \"change3\")");
    console.debug(inputEle['value']);

    inputEle.setAttribute("java", "change3");
    console.debug("inputEle.setAttribute(\"java\", \"change3\")");
    console.debug(inputEle.getAttribute('java'));

    console.debug("-------------------------------------------");


    var hobby = document.getElementById("hobby");
    console.debug("var hobby = document.getElementById(\"hobby\")");
    console.debug("hobby.checked");
    console.debug(hobby.checked);

    hobby.checked = false;
    console.debug("hobby.checked = false");

    console.debug("-------------------------------------------");

    var divEle = document.getElementById("div1");
    console.debug("var divEle = document.getElementById(\"div1\")");
    console.debug("divEle.className");
    console.debug(divEle.className);

    console.debug("-------------------------------------------");


    var divEle = document.getElementById("div2");
    console.debug("var divEle = document.getElementById(\"div2\")");

    console.debug("divEle.style");
    console.debug(divEle.style);

    console.debug("divEle.style.color");
    console.debug(divEle.style.color);

    console.debug("divEle.style.fontSize");
    console.debug(divEle.style.fontSize);

    console.debug("divEle.style.backgroundColor");
    console.debug(divEle.style.backgroundColor);

    console.debug("-------------------------------------------");


    var email = document.getElementById("email");


    console.debug(" var email = document.getElementById(\"email\")");
    console.debug("email");
    console.debug(email);
    console.debug("email.readOnly")
    console.debug(email.readOnly)

};