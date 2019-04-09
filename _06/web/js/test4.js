

function checkAll(checked) {
    $(":checkbox[name='hobby']").prop("checked", checked);
}


$(function () {
    // 全选
    $("#btn_checkAll").click(function () {
       checkAll(true);
    });

    // 全不选
    $("#btn_checkAll").click(function () {
       checkAll(false);
    });

    // 反选
    $("#btn_reCheckAll").bind("click", function () {
       $(":checkbox[name='hobby']").prop("checked", function(index,attrValue) {
           return !attrValue;
       });
    });

    // 全选:全不选
    $("#checkAllOrNot").click(function () {
        var selfChecked = $(this).prop("checked");
        if(selfChecked){
            checkAll(true);
        } else {
            checkAll(false);
        }
    });

});