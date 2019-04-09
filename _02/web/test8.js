



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

    console.debug("---------------------------------------");

    var attrNode = div.getAttributeNode("id");
    console.debug("var attrNode = div.getAttributeNode(\"id\")");

    var attrNodeName = attrNode.nodeName;
    console.debug("var attrNodeName = attrNode.nodeName");
    console.debug(attrNodeName);

    var attrNodeValue = attrNode.nodeValue;
    console.debug("var attrNodeValue = attrNode.nodeValue");
    console.debug(attrNodeValue);

    var attrNodeType = attrNode.nodeType;
    console.debug("var attrNodeType = attrNode.nodeType");
    console.debug(attrNodeType);


    console.debug("---------------------------------------");

    var spanTestValue = div.firstChild.firstChild;
    console.debug("var spanTestValue = div.firstChild.firstChild");

    var spanNodeName = spanTestValue.nodeName;
    console.debug("var nodeName = spanTestValue.nodeName");
    console.debug(spanNodeName);

    var spanNodeValue = spanTestValue.nodeValue;
    console.debug("var nodeValue = spanTestValue.nodeValue");
    console.debug(spanNodeValue);

    var spanNodeType = spanTestValue.nodeType;
    console.debug("var nodeType = spanTestValue.nodeType");
    console.debug(spanNodeType);





};