scroll();
$(function() {

    var clock;
    $(window).on('scroll', function () {
        scroll();
            huacandan();
        if (clock) {   // 节流函数。如果在300毫秒内进行scroll的话，都会被clearTimeout掉，setTimeout不会执行。
            clearTimeout(clock);
        }
        clock = setTimeout(function () {
            // console.log('运行了一次');
            scroll();
            huacandan();
        },5)
    });
})
function scroll() {
    var top = $("#phome").offset().top;//获取导航栏变色的位置距顶部的高度
    var top1 = parseInt($("#poutteam").offset().top) - 150;//outteam 距离顶部高度
    var top2 = parseInt($("#paboutus").offset().top) - 150;//aboutus距离顶部高度
    var top3 = parseInt($("#pproject").offset().top) - 150;//project 距离顶部高度
    var top4 = parseInt($("#pservice").offset().top) - 150;//service 距离顶部高度
    var top5 = parseInt($("#ppartner").offset().top) - 150;//partner 距离顶部高度
    var top6 = parseInt($("#pconact").offset().top) - 150;//conact 距离顶部高度
    var top7 = parseInt((top6 - top5) * 1 / 4);
    var top8 = top5 + top7;
    var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
    if (0 <= scrollTop && scrollTop < top1) {//home 区域
        $(".img1").attr("src", "phone-img/3.png");
        $(".img2").attr("src", "phone-img/4.png");
        $(".img3").attr("src", "phone-img/5.png");
        $(".img4").attr("src", "phone-img/6.png");
        $("#ul_nav li>i").removeClass("phone_right");
        $(".phone_home i").addClass("phone_right")

    } else if (top1 <= scrollTop && scrollTop < top2) {   //outteam 区域
        $(".img5").attr("src", "phone-img/7.png");
        $(".img6").attr("src", "phone-img/8.png");
        $("#ul_nav li>i").removeClass("phone_right");
        $(".phone_outteam>i").addClass("phone_right")
        $(".img7").attr("src", "phone-img/9.png");
        $(".img8").attr("src", "phone-img/10.png");
        $(".img9").attr("src", "phone-img/11.png");
    } else if (top2 <= scrollTop && scrollTop < top3) {  //aboutus 区域

        $(".img10").attr("src", "phone-img/12.png");
        $(".img11").attr("src", "phone-img/13.png");
        $("#ul_nav li>i").removeClass("phone_right");
        $(".phone_aboutus i").addClass("phone_right")
    } else if (top3 <= scrollTop && scrollTop < top4) {   //project
        $(".img12").attr("src", "phone-img/14.png");
        $("#ul_nav li>i").removeClass("phone_right");
        $(".phone_project i").addClass("phone_right")
    } else if (top4 <= scrollTop && scrollTop < top5) {  //service
        $(".img13").attr("src", "phone-img/15.png");
        $(".img14").attr("src", "phone-img/16.png");
        $("#ul_nav li>i").removeClass("phone_right");
        $(".phone_service i").addClass("phone_right")

    } else if (top5 <= scrollTop && scrollTop <= top8) {  //partner
        $("#ul_nav li>i").removeClass("phone_right");
        $(".phone_partner i").addClass("phone_right")
    } else if (scrollTop >= top8) {                      //conact
        $("#ul_nav li>i").removeClass("phone_right");
        $(".phone_conact i").addClass("phone_right")
    }
}
//店家下拉菜单导航条事件
$('.navItems').click(function (e) {
    var navto = $(this).children("a").attr('navto');
    if (navto != "#") {
        var $div = $('#' + navto);
        var top = $div.offset().top || 0;
        console.log(top);
        $('html,body').animate({
            'scroll-top': top - 150
        }, 1000);
    } else {
        $('html,body').animate({
            'scroll-top': 0
        }, 1000);
    }
});
// 点击隐藏显示下拉菜单
$("#phone_a").click(function (e) {
    e.preventDefault();
    $(".phone_nav").toggleClass("in");
});

//隐藏下拉菜单函数
function huacandan() {
    $(".phone_nav").removeClass("in");
}
