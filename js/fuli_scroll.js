/**
 * Created by dell on 2017/7/7.
 */
$(function () {
    $(window).scroll(function () {
        var ling = $(document).scrollTop();
        var nav_total=$(".nav_right").find("li").length;
        if(ling>500){
            $(".nan_nv").stop().animate({top:'50px'});
            $(".nav_right").stop().animate({top:'100px'});
        }else{
            $(".nan_nv").stop().animate({top:'180px'});
            $(".nav_right").stop().animate({top:'250px'});
        }
        if(ling>1000){
            $(".back_top").css('display','block');
        }else{
            $(".back_top").css('display','none');
        }
        for(var i=0;i<nav_total;i++){
            var now_top=$(".main").find(".list").eq(i).offset().top-400;
            var next_top=$(".main").find(".list").eq(i+1).offset().top-400;

            if(now_top<ling&&ling<next_top){
                $(".nav_right").find("li").eq(i).css('color','red').siblings().css('color','black');
                return
            }
        }
    })
    $(".nav_right").find("li").click(function () {
        $(this).css('color','red').siblings().css('color','black');
        var nav_index = $(this).index();
        var list_top=$(".main").find(".list").eq(nav_index).offset().top;
        $('body').stop().animate({scrollTop:list_top});
    })
    $(".back_top").click(function () {
        $('body').stop().animate({scrollTop:0});
    })
})