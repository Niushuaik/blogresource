//footer 原js
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
//随机改变title颜色
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function generateMixed(n) {
    var res = "";
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random()*16);
        res += chars[id];
    }
    return res;
}
var num = generateMixed(6);
var p = document.getElementById('name')
p.style.color = "#"+num;

//切换title
window.onblur = function() {//使用window触发onblur事件
    document.title = "∑(っ°Д°;)っ握草，不见了!";//改变title内容
};
window.onfocus = function() {//触发onfocus事件
    document.title = "๑乛◡乛哦吼，又出现了!";
};
//让title动起来
/**
function scroll() {
    var titleInfo = document.title;
    var firstInfo = titleInfo.charAt(0);
    var lastInfo = titleInfo.substring(1, titleInfo.length);
    document.title = lastInfo + firstInfo+"    ";
}
setInterval("scroll()",5000);
**/