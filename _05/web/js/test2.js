

window.onload = function () {
    // 页面加载完毕之后，需要把所有的省份查询出来并显示在页面
    var ajax = createAjax();
    ajax.open("get","/linkage/json_getProvinces",true);
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            var jsonArray = eval("(" + ajax.responseText + ")");
            for(var i = 0; i < jsonArray.length; i++){
                var jsonObject = jsonArray[i]; // 每一个省份对象
                // 针对每一个省份对象都得创建<option>元素
                var optionEl = document.createElement("option");
                optionEl.value = jsonObject.id;
                optionEl.innerHTML = jsonObject.name;
                document.getElementById("province").appendChild(optionEl);
            }
        }
    };
    ajax.send();
};

// 根据选择的省份的ID，再去加载该省份的城市
function getCitysByPid() {
    var pid = document.getElementById("province").value;
    document.getElementById("city").innerHTML="<option>请选择</option>";
    if(!parseInt(pid)){
        return;
    }

    var ajax = createAjax();
    ajax.open("get","/linkage/json_getCitysByPid?pid=" + pid, true);
    document.getElementById("city").innerHTML="<option>请选择</option>";
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            var jsonArray = eval("(" + ajax.responseText + ")");
            for(var i = 0; i < jsonArray.length; i++){
                var jsonObject = jsonArray[i]; // 每一个城市对象
                // 针对每一个城市对象都得创建<option>元素
                var optionEl = document.createElement("option");
                optionEl.value = jsonObject.id;
                optionEl.innerHTML = jsonObject.name;
                document.getElementById("city").appendChild(optionEl);
            }
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