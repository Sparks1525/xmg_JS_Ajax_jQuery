



window.onload = function () {

    var div = document.getElementById("divId");
    console.debug("var div = document.getElementById(\"divId\")");
    console.debug(div);

    var nodeName = div.nodeName;
    console.debug("var nodeName = div.nodeName");
    console.debug(nodeName);

    var nodeValue = div.nodeValue;
    console.debug("var nodeValue = div.nodeValue");
    console.debug(nodeValue);

    var nodeType = div.nodeType;
    console.debug("var nodeType = div.nodeType");
    console.debug(nodeType);

    var ownerDocument = div.ownerDocument;
    console.debug("var ownerDocument = div.ownerDocument");
    console.debug(ownerDocument);

    var firstChild = div.firstChild;
    console.debug("var firstChild = div.firstChild");
    console.debug(firstChild);

    var lastChild = div.lastChild;
    console.debug("var lastChild = div.lastChild");
    console.debug(lastChild);

    var childNodes = div.childNodes;
    console.debug("var childNodes = div.childNodes");
    console.debug(childNodes);

    var previousSibling = div.childNodes[2].previousSibling;
    console.debug("var previousSibling = div.childNodes[2].previousSibling");
    console.debug(previousSibling);

    var nextSibling = div.childNodes[2].nextSibling;
    console.debug("var nextSibling = div.childNodes[2].nextSibling");
    console.debug(nextSibling);

    var hasChildNodes = div.hasChildNodes();
    console.debug("var hasChildNodes = div.hasChildNodes()");
    console.debug(hasChildNodes);

    var attributes = div.attributes;
    console.debug("var attributes = div.attributes");
    console.debug(attributes);

};