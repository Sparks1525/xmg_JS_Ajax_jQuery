function this2other(srcSelect, targetSelect) {

    var select1 = document.getElementById(srcSelect);
    var select2 = document.getElementById(targetSelect);

    var options = select1.getElementsByTagName("option");
    for(var index = 0; index < options.length; index++){
        var option = options[index];
        if(option.selected){
            select2.appendChild(option);
            index--;
        }
    }
}


function thisAll2other(srcSelect,targetSelect) {

    var select1 = document.getElementById(srcSelect);
    var select2 = document.getElementById(targetSelect);
    while (select1.hasChildNodes()){
        select2.appendChild(select1.firstChild);
    }


}