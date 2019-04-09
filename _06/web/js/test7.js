$(function () {
    $("#addMoreItem").click(function () {
        // 拷贝id为productTbody中的第一个tr
        var copy = $("#productTbody tr:first").clone();
        // 找到tr中所有的后代为input的元素,并且把文本内容设置为空字符
        copy.find("input").val("");
        // 把拷贝的tr追加到id为productTbody中
        copy.appendTo($("#productTbody"));
    });

});