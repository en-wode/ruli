# ruli
有乐2017fuli
http://www.iyoule.com/static/authornews/nv.html

scroll的用法 更简单可以用锚点 href="#1" div_ id=1

scrollIntoView()方法
CSS代码：
.block{display:inline-block; width:250px; height:160px; background:url(/study/image/sand_bg.jpg);}
HTML代码：
<button id="button1">点击本按钮，图片下面的框框1秒钟变出来</button>
<img src="" height="969" />
<span id="block" class="block"></span>
JS代码：
document.getElementById("button1").onclick = function() {
    document.getElementById("block").scrollIntoView();
};
