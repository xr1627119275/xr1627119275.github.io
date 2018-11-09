// 轮播图左右按钮

window.aindex = $(".main_banner ol>li.current").index();

function Bannerlast() {
    aindex = $(".main_banner ol>li.current").index();
    $(".banner li").fadeOut(500);
    if (aindex - 1 < 0) {
        $($(".banner li")[6]).fadeIn(500);
        aindex = 6;
    } else {
        $($(".banner li")[aindex - 1]).fadeIn(500);
        aindex -= 1;
    }
    $(".main_banner ol>li").removeClass("current");
    $($(".main_banner ol>li")[aindex]).addClass(" current")
}

function Bannernext() {
    aindex = $(".main_banner ol>li.current").index()
    $(".banner li").fadeOut(500);
    if (aindex + 1 > 6) {
        $($(".banner li")[0]).fadeIn(500);
        aindex = 0;

    } else {
        $($(".banner li")[aindex + 1]).fadeIn(500);
        aindex += 1;
    }
    $(".main_banner ol>li").removeClass("current");
    $($(".main_banner ol>li")[aindex]).addClass(" current")

}

$(".banner_left").click(Bannerlast);

$(".banner_right").click(Bannernext);


var timeId = setInterval(function () {
    $(".banner_right").click()
}, 2000);
$(".main_banner").mouseenter(function () {
    clearInterval(timeId);
    $(".banner div").show();
}).mouseleave(function () {
    startNext();
    $(".banner div").hide();
});

var banner_isOver = 1;
$(".banner div").mouseenter(function () {
    if (banner_isOver == 1) {
        banner_isOver = 0;
        $(this).animate({"opacity": 0.8}, 200)
    }

}).mouseleave(function () {
    $(this).animate({"opacity": 0.4}, 200, function () {
        banner_isOver = 1
    })
});

$(".main_banner ol>li").click(function () {
    if ($(this).index() == $(".main_banner ol>li.current").index()) {
        return
    }
    $(".main_banner ol>li.current").removeClass("current");
    $(this).addClass("current");
    aindex = $(this).index();
    $(".banner li").fadeOut(500);
    $($(".banner li")[$(this).index()]).fadeIn(500);
});

function startNext() {
    timeId = setInterval(function () {
        $(".banner_right").click()
    }, 2000);
}


$(".input_div input").focus(function () {
    $(".msg").show()
}).blur(function () {
    $(".msg").hide();
    if ($(this).val().length == 0) {
        $(".inputtip").show()
    }
}).keydown(function () {
    $(".inputtip").hide()
});
$(".inputtip").click(function () {
    $(".input_div input").focus()
});


//左边固定导航栏

$(window).resize(function () {
    if ($(this).width() < 1740) {
        $(".fixLeft").hide()
        $(".fixright").hide()
    }
    else {
        $(".fixright").show()
        if ($(this).scrollTop() > $(".main_bottom").offset().top) {
            $(".fixLeft").show()
        }
    }
})
$(window).scroll(function () {
    if ($(this).scrollTop() > $(".main_bottom").offset().top) {
        $(".fixLeft").show()
    } else {
        $(".fixLeft").hide()
    }
});
// $(".totop").click(function () {
//
//
// });

$(".fixLeft ul li").delegate("a", "click", function () {
    var ele = $(this).attr("data");

    // console.log(ele)
    if (ele == "top") {
        $('body,html').animate({scrollTop: 0}, 500);
    } else {
        $('body,html').animate({scrollTop: $(ele).offset().top}, 500);
    }

});

//左边固定导航栏


//视频播放
$(".Video li").mouseenter(function () {

    var videoplayer = $(this).children("video")[0];

    if (videoplayer.paused) {
        videoplayer.play();
    }
    $(videoplayer).show();
}).mouseleave(function () {
    var videoplayer = $(this).children("video")[0];
    videoplayer.pause();

    $(videoplayer).hide();
})


//视频播放