$(function () {
    document.querySelector('#nav').addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

    function navSize() {
        var navSize = 0;
        $(".mi_nav>ul>li").forEach(function (item, index) {
            navSize += $(item).width();
        });
        $(".mi_nav>ul").width(navSize + $(".mi_nav span").width() - 20);
    }

    $("html").resize(navSize).toggle(navSize);


    // IScroll
    var iscroll = new IScroll("nav", {
        vScroll: false,
        scrollX: true,
    });


    //Swiper
    new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    })
});