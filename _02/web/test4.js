
function getWindowSize() {
    var x = window.screenX || window.screenLeft || 0;
    var y = window.screenY || window.screenTop || 0;
    alert("X坐标=" + x + ",Y坐标=" + y);
}