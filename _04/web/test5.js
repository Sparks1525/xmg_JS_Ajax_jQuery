

window.onload = function () {
    // 页面加载完毕之后，需要把所有的省份查询出来并显示在页面
    var ajax = createAjax();
    ajax.open("get","/linkage/html_getProvinces",true);
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            var result = ajax.responseText;
            document.getElementById("province").innerHTML+=result;
        }
    };
    ajax.send();
};

// 根据选择的省份的ID，再去加载该省份的城市
function getCitysByPid() {
    var pid = document.getElementById("province").value;



    if(!parseInt(pid)){
        return;
    }

    var ajax = createAjax();
    ajax.open("get","/linkage/html_getCitysByPid?pid=" + pid, true);
    document.getElementById("city").innerHTML="<option>请选择</option>";
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            var result = ajax.responseText;
            document.getElementById("city").innerHTML += result;
        }
    };

    ajax.send();
}





function createAjax() {
    var ajax = null;
    try{
        ajax = new XMLHttpRequest();
    } catch (e) {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return ajax;
}