function locationInfo() {
    window.location.href = 'test5.html';

}


window.onload = function () {
    var hn = window.location.hostname;
    console.debug("window.location.hostname");
    console.debug(hn.valueOf());

    var pt = window.location.port;
    console.debug("window.location.port");
    console.debug(pt.valueOf());

    var pn = window.location.pathname;
    console.debug("window.location.pathname");
    console.debug(pn.valueOf());

    var pl = window.location.protocol;
    console.debug("window.location.protocol");
    console.debug(pl.valueOf());

    var hr = window.location.href;
    console.debug("window.location.href");
    console.debug(hr.valueOf());


    setInterval(function () {
        var spanEl = document.getElementById("time");
        spanEl.innerHTML = spanEl.innerHTML - 1;
        if (spanEl.innerHTML == 0) {
            window.location.href = "test5.html";
        }
    }, 1000);


    setInterval(function () {
        var spanEl = window.document.getElementById("spanId");
        spanEl.innerHTML = new Date().toString();
    }, 1000);
};