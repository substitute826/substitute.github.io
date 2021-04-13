$.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
$.getParentUrlParam = function (name) {
    //  获取地址栏的参数
    var url = parent.window.location.search;
    //正则表达式筛选
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    //匹配参数
    var result = url.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]):null;
}