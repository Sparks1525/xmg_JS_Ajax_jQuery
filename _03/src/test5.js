function  deleteAll() {
    document.getElementById("userTbody").innerHTML="";
}


function  deleteUser(id) {
    var current = document.getElementById(id);
    current.parentNode.removeChild(current);
}


function saveUser() {

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;

    var tr = document.createElement("tr");
    var usernameTd = document.createElement("td");
    var emailTd = document.createElement("td");
    var telTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    tr.id = new Date().getTime();
    usernameTd.innerHTML = username;
    emailTd.innerHTML = email;
    telTd.innerHTML = tel;
    deleteTd.innerHTML = "<a href='#' onclick='deleteUser("+tr.id+")'>删除</a>";

    tr.appendChild(usernameTd);
    tr.appendChild(emailTd);
    tr.appendChild(telTd);
    tr.appendChild(deleteTd);
    document.getElementById("userTbody").appendChild(tr);
    
}