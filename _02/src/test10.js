


function appendDIV1() {
    var spanEl = document.getElementById("span1");

    var divEl = document.getElementById("div1");

    divEl.appendChild(spanEl);

    console.debug("divEl.appendChild(spanEl)");
}


function insertDIV1() {
    var spanEl = document.createElement("span2");
    spanEl.innerHTML="span2";
    spanEl.style.backgroundColor = "white";
    var divEl = document.getElementById("div1");
    divEl.appendChild(spanEl);
    console.debug("divEl.appendChild(spanEl)");
}


function insertAfterItem2() {

    var op6 = document.createElement("option");
    op6.id = "op6";
    op6.innerText="op6";
    var op2 = document.getElementById("op2");
    op2.parentNode.insertBefore(op6, op2.nextSibling);


    console.debug("op2.parentNode.insertBefore(item5, op2.nextSibling)");
}


function deleteItem5() {
    var op4 = document.getElementById("op4");
    op4.parentNode.removeChild(op4);
    console.debug("op4.parentNode.removeChild(op4)");
}


function replaceItem5() {

    var op4 = document.getElementById("op4");
    var op7 = document.createElement("option");
    op7.id = "op7";
    op7.innerHTML = 'op7';
    op4.parentNode.replaceChild(op7,op4);

    console.debug("op4.parentNode.replaceChild(op7,op4)");

}


function insertAfter(newNode, refNode) {
    if(!refNode.nextSibling){
        refNode.parentNode.appendChild(newNode);
    } else {
        refNode.parentNode.insertBefore(newNode,refNode.nextSibling);
    }
}