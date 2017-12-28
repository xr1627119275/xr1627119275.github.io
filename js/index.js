//调用全屏方法
$(function(){
    $('#dowebok').fullpage({
        //设置每一屏的颜色
        sectionsColor:['#0da5d6','#2ab561','#de8910','#0da5d6','#0da5d6'],
        loopTop:true,
        afterLoad:function (link,index) {
            $('.section').removeClass('current');
            //动画延迟执行
            setTimeout(function () {
                $('.section').eq(index-1).addClass('current');
            },100);

        }
    });
    
    
    
    
});