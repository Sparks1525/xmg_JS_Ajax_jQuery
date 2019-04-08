
window.onload = function () {


    var links = window.document.links;

    console.debug("links.length");
    console.debug(links.length);

    console.debug("links[1]");
    console.debug(links[1]);

    console.debug("links[1].innerHTML");
    console.debug(links[1].innerHTML);


    console.debug("-------------------------------");

    var titleValue = window.document.title;
    console.debug("var titleValue = window.document.title");
    console.debug(titleValue);
    console.debug(titleValue.valueOf());

    console.debug("-------------------------------");

    var bodyValue = window.document.body;
    console.debug("var bodyValue = window.document.body");
    console.debug(bodyValue);
    console.debug(bodyValue.valueOf());

    console.debug("-------------------------------");

    // window.document.writeln("window.document.writeln");
    //
    // window.document.write("window.document.write");

    console.debug("-------------------------------");

    var formsValue = window.document.forms;
    console.debug("var formsValue = window.document.forms");
    console.debug(formsValue);
    console.debug("window.document.forms[0]");
    console.debug(formsValue[0]);

    console.debug("-------------------------------");
    var btFormName1 = window.document.btFormName1;
    console.debug("var btFormName1 = window.document.btFormName1");
    console.debug(btFormName1);

    var btFormId1 = window.document.getElementById("btFormId1");
    console.debug("var btFormId1 = window.document.getElementById('btFormId1')");
    console.debug(btFormId1);

    var btAction1 = btFormId1.action;
    console.debug("var btAction1 = btFormId1.action");
    console.debug(btAction1);



};
