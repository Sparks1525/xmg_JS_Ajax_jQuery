

function checkAll(checkOrNot) {
    var hobbys = document.getElementsByName("hobby");
    for(var index = 0; index < hobbys.length; index++){
        var hobby = hobbys[index];
        hobby.checked = checkOrNot;
    }
}

function checkUnAll() {
    var hobbys = document.getElementsByName("hobby");
    for(var index = 0; index < hobbys.length; index++){
        var hobby = hobbys[index];
        hobby.checked = !hobby.checked;
    }
}


function checkChange() {
    var checkbox = document.getElementById("checkAllOrNot");
    checkAll(checkbox.checked);
}