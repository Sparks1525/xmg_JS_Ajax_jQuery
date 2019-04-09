


window.onload = function () {
    var startBtn = document.getElementById("startBtn");
    startBtn.disabled = false;
    startBtn.onclick = startGame;
};

var labelArray = new Array();

function startGame() {
    this.disabled = true;

    setInterval(function () {
        var labelEl = createLable();
        document.body.appendChild(labelEl);
        labelArray.push(labelEl);
    }, 2000);

    setInterval(function () {
        var windowHeight = document.documentElement.clientHeight - 30;
        for (var index = 0; index < labelArray.length; index++) {
            var labelEl = labelArray[index];
            var oldHeight = parseInt(labelEl.style.top);
            if (oldHeight < windowHeight) {
                var height = oldHeight + 10;
                labelEl.style.top = height + "px";
            } else {
                labelEl.parentNode.removeChild(labelEl);
                labelArray.splice(index, 1);
            }
        }
    }, 200);

    document.onkeydown = function (event) {
        var keyCode = event.keyCode;
        var charCode = String.fromCharCode(keyCode);
        for (var index = 0; index < labelArray.length; index++) {
            var labelEl = labelArray[index];
            if (charCode == labelEl.innerHTML) {
                labelEl.parentNode.removeChild(labelEl);
                labelArray.splice(index, 1);
                break;
            }
        }
    }
}

function createLable() {

    var charCode = parseInt(Math.random() * 26 + 65);
    var ch = String.fromCharCode(charCode);
    var labelEl = document.createElement("label");

    labelEl.style.position = "absolute";
    labelEl.style.top = "30px";
    labelEl.style.width = "20px";
    labelEl.style.backgroundColor = "orange";
    labelEl.style.textAlign = "center";
    labelEl.style.fontWeight = "bold";

    var windowWidth = document.documentElement.clientWidth - 30;
    var width = 10 + Math.random() * windowWidth;
    labelEl.style.left = width + "px";
    labelEl.innerHTML = ch;
    return labelEl;

}