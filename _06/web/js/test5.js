
// 把某一边被选中的选项移动到另一边
function this2other(srcSelect, targetSelect) {
    $("#" + srcSelect + " option:selected").appendTo($("#" + targetSelect));
}

// 把某一边所有的选项移动到另一边
function thisAll2other(srcSelect, targetSelect) {
    $("#" + srcSelect + " option").appendTo($("#" + targetSelect));
}