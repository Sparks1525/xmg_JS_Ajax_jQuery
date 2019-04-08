
window.onload = function () {
    // 页面加载完毕之后，需要把所有的省份查询出来并显示在页面
    var ajax = createAjax();
    ajax.open("get","/linkage/xml_getProvinces",true);
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            /*
                <datas>
                    <data id='1'>四川</data>
                    <data id='2'>广东</data>
                    <data id='3'>陕西</data>
                </datas>

             */

            // 服务端返回Document对象
            var doc = ajax.responseXML;
            var datas = doc.getElementsByTagName("data");
            for(var i = 0; i < datas.length; i++) {
                var data = datas[i];
                // 每一个<data>元素的数据都封装在<option>元素中
                var optionEl = document.createElement("option");
                optionEl.value= data.id;
                optionEl.innerHTML = data.innerHTML;
                document.getElementById("province").appendChild(optionEl);
            }

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
    ajax.open("get","/linkage/xml_getCitysByPid?pid=" + pid, true);
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            // 服务端返回的Document对象]
            var doc = ajax.responseXML;
            var datas = doc.getElementsByTagName("data");
            for(var i = 0; i < datas.length; i++) {
                var data = datas[i];
                // 每一个<data>元素的数据都封装在<option>元素中
                var optionEl = document.createElement("option");
                optionEl.value= data.id;
                optionEl.innerHTML = data.innerHTML;
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