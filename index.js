function adjust() {
    var W_HEIGHT = window.innerHeight;
    var W_WIDTH = window.innerWidth;
    // console.log(W_HEIGHT + ":" + W_WIDTH);

    var fontsize;
    if (W_HEIGHT <= 614) {
        $("html").css("overflow-y","scroll");
        W_HEIGHT = 614;

        $(".main").css("font-size", 10 + 'px');
    } else if (614 < W_HEIGHT) {
        $("html").css("overflow-y","hidden");
        fontsize = Math.round(W_HEIGHT * 10 / 614);
        $(".main").css("font-size", fontsize + 'px');
    }
    var HEIGHT = W_HEIGHT * 0.8;
    var WIDTH = HEIGHT * (5 / 3);
    var middle = W_HEIGHT * 0.1;
    $(".main").css("height", W_HEIGHT);
    $(".main").css("width", W_WIDTH);
    $("#mydiv").css("height", W_HEIGHT);
    $("#mydiv").css("width", W_WIDTH);
    $(".main1").css("height",HEIGHT);
    $(".main1").css("width",WIDTH);
    $(".main1").css("margin-top",middle);
}
function canvasSize(canvas){
    var width=document.getElementById("mydiv").style.width;
    var height=document.getElementById("mydiv").style.height;
    width=parseInt(width);
    height=parseInt(height);
    canvas.width=width||window.innerWeight||document.documentElement.clientWidth||document.body.clientWidth;
    canvas.height=height||window.innerWeight||document.documentElement.clientHeight||document.body.clientHeight;
}
adjust();
canvasSize(canvas);
window.onresize = function(){
    adjust();
    canvasSize(canvas);
}
$(function() {
    var config = {
        vx: 4,	//小球x轴速度,正为右，负为左
        vy: 4,	//小球y轴速度
        height: 2,	//小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 200,		//点个数
        color: "121, 162, 185", 	//点颜色
        stroke: "130,255,255", 		//线条颜色
        dist: 6000, 	//点吸附距离
        e_dist: 20000, 	//鼠标吸附加速距离
        max_conn: 10 	//点到点最大连接数
    }
    //调用
    CanvasParticle(config);
    $('body').css('zoom', 'reset');
// 禁止浏览器缩放
    $(document).keydown(function (event) {
        if ((event.ctrlKey === true || event.metaKey === true)
            && (event.which === 61 || event.which === 107
                || event.which === 173 || event.which === 109
                || event.which === 187 || event.which === 189)) {
            event.preventDefault();
        }
        $(window).bind('mousewheel DOMMouseScroll', function (event) {
            if (event.ctrlKey === true || event.metaKey) {
                event.preventDefault();
            }
        });
    });
// 导航栏列表***************************
    $("#main_ul li").click(function (e) {
        // e.preventDefault();
        var index = $("#main_ul li").index(this);
        $("#main_ul li").removeClass("li1")
        $("#main_ul li").eq(index).addClass("li1");
    });
    $(".myhome").click(function () {
        $(".title").css("display", 'none');
        $(".home").css("display", "block");

    })
    $(".myoutteam").click(function () {
        $(".title").css("display", 'none');
        $(".outteam").css("display", "block");
    })
    $(".my_aboutus").click(function () {
        $(".title").css("display", 'none');
        $(".about").css("display", "block");
    })
    $(".my_prodect").click(function () {
        $(".title").css("display", 'none');
        $(".prodect").css("display", "block");
    })
    $(".my_service").click(function () {
        $(".title").css("display", 'none');
        $(".service").css("display", "block");
    })
    $(".my_partner").click(function () {
        $(".title").css("display", 'none');
        $(".partner").css("display", "block");
    })
    $(".my_contact").click(function () {
        $(".title").css("display", 'none');
        $(".conact").css("display", "block");
    })

// outabout轮播点
    $("#out_ul li").click(function () {
        var index2 = $("#out_ul li").index(this);
        if (index2 > num) {
            $("#out_content").animate({top: '-=' + (index2 - num) + '00%'}, 500);
            $("#out_ul li").removeClass("ckeck_li");
            $("#out_ul li").eq(index2).addClass("ckeck_li");
        } else if (index2 < num) {
            $("#out_content").animate({top: '+=' + (num - index2) + '00%'}, 500);
            $("#out_ul li").removeClass("ckeck_li");
            $("#out_ul li").eq(index2).addClass("ckeck_li");
        } else {
            return;
        }
        num = index2;
    });
// about_us 轮播点
    $("#about_ul li").click(function () {
        var index1 = $("#about_ul li").index(this);
        if (index1 > newnum) {
            $("#about_content").animate({top: '-=' + (index1 - newnum) + '00%'}, 500);
            $("#about_ul li").removeClass("about_li");
            $("#about_ul li").eq(index1).addClass("about_li");
        } else if (index1 < newnum) {
            $("#about_content").animate({top: '+=' + (newnum - index1) + '00%'}, 500);
            $("#about_ul li").removeClass("about_li");
            $("#about_ul li").eq(index1).addClass("about_li");
        } else {
            return;
        }
        newnum = index1;
    });
// 判断浏览器类型
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
// alert(userAgent);
//判断是否Opera浏览器
    if (isOpera) {
        // return "Opera"
    }
    ;
//判断是否Firefox浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        var num = 0;
        var c = 5;

        function handle(delta) {
            if (delta > 0) {
                // alert("向下滚动999");
                if (num == 0) {
                    return
                }
                ;
                if ($("#out_content").is(":animated")) {
                    return;
                }
                num--;
                $("#out_content").animate({top: '+=100%'}, 500);
                $("#out_ul li").eq(num + 1).removeClass("ckeck_li");
                $("#out_ul li").eq(num).addClass("ckeck_li");
            }
            else if (delta < 0) {
                // alert("888");
                if (num == c - 1) {
                    return
                }
                ;
                if ($("#out_content").is(":animated")) {
                    return;
                }
                num++;
                $("#out_content").animate({top: '-=100%'}, 500, function () {
                });
                $("#out_ul li").eq(num - 1).removeClass("ckeck_li");
                $("#out_ul  li").eq(num).addClass("ckeck_li");
            } else {
                return;
            }
        }

        function wheel(event) {
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) {
                delta = -event.detail / 3;
            }
            if (delta)
                handle(delta);
        }

        var newnum = 0;
        var a = 8;

        function handelabout(delta) {
            if (delta > 0) {
                // alert("向下滚动999");
                if (newnum == 0) {
                    return
                }
                ;
                if ($("#about_content").is(":animated")) {
                    return;
                }
                newnum--;
                $("#about_content").animate({top: '+=100%'}, 500);
                $("#about_ul li").eq(newnum + 1).removeClass("about_li");
                $("#about_ul li").eq(newnum).addClass("about_li");
            }
            else if (delta < 0) {
                // alert("888");
                if (newnum == a - 1) {
                    return
                }
                ;
                if ($("#about_content").is(":animated")) {
                    return;
                }
                newnum++;
                $("#about_content").animate({top: '-=100%'}, 500, function () {
                });
                $("#about_ul li").eq(newnum - 1).removeClass("about_li");
                $("#about_ul li").eq(newnum).addClass("about_li");
            } else {
                return;
            }
        }

        function mywheel(event) {
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) {
                delta = -event.detail / 3;
            }
            if (delta)
                handelabout(delta);
        }

        if (window.addEventListener)
            $(".myoutteam").click(function () {
                window.addEventListener('DOMMouseScroll', wheel, false);
            })
        $(".my_aboutus").click(function () {

            window.addEventListener('DOMMouseScroll', mywheel, false);
        });
    }
//判断是否chorme浏览器//判断是否IE浏览器//safari
    if (userAgent.indexOf("Chrome") > -1 || userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        // return "Chrome";
        var newnum = 0;
        var a = 8;
        var scrollFunc = function (e) {
            e = e || window.event;
            if (e.wheelDelta) {//
                var div = $("#About_content");
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    if (newnum == 0) {
                        return
                    }
                    ;
                    if ($("#about_content").is(":animated")) {
                        return;
                    }
                    newnum--;
                    $("#about_content").animate({top: '+=100%'}, 500);
                    $("#about_ul li").eq(newnum + 1).removeClass("about_li");
                    $("#about_ul li").eq(newnum).addClass("about_li");
                } else if (e.wheelDelta < 0) {//当滑轮向下滚动时
                    if (newnum == a - 1) {
                        return
                    }
                    ;
                    if ($("#about_content").is(":animated")) {
                        return;
                    }
                    newnum++;
                    $("#about_content").animate({top: '-=100%'}, 500, function () {
                    });
                    $("#about_ul li").eq(newnum - 1).removeClass("about_li");
                    $("#about_ul li").eq(newnum).addClass("about_li");
                }
            } else {
                return;
            }
        }
        var num = 0;
        var c = 5;
        var scrollFunc1 = function (e) {
            e = e || window.event;
            if (e.wheelDelta) {//
                var div = $("#out_content");
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    if (num == 0) {
                        return
                    }
                    ;
                    if ($("#out_content").is(":animated")) {
                        return;
                    }
                    num--;
                    $("#out_content").animate({top: '+=100%'}, 500);
                    $("#out_ul li").eq(num + 1).removeClass("ckeck_li");
                    $("#out_ul li").eq(num).addClass("ckeck_li");
                }
                else if (e.wheelDelta < 0) {//当滑轮向下滚动时
                    if (num == c - 1) {
                        return
                    }
                    ;
                    if ($("#out_content").is(":animated")) {
                        return;
                    }
                    num++;
                    $("#out_content").animate({top: '-=100%'}, 500, function () {
                    });
                    $("#out_ul li").eq(num - 1).removeClass("ckeck_li");
                    $("#out_ul  li").eq(num).addClass("ckeck_li");
                }
            } else {
                return;
            }
        }
        $(".myoutteam").click(function () {
            window.onmousewheel = scrollFunc1;
        })
        $(".my_aboutus").click(function () {
            window.onmousewheel = scrollFunc;
        })
    }

//判断是否Safari浏览器
    if (userAgent.indexOf("Safari") > -1) {
        var newnum = 0;
        var a = 8;
        var scrollFunc = function (e) {
            e = e || window.event;
            if (e.wheelDelta) {//
                var div = $("#About_content");
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    if (newnum == 0) {
                        return
                    }
                    ;
                    if ($("#about_content").is(":animated")) {
                        return;
                    }
                    newnum--;
                    $("#about_content").animate({top: '+=100%'}, 500);
                    $("#about_ul li").eq(newnum + 1).removeClass("about_li");
                    $("#about_ul li").eq(newnum).addClass("about_li");
                } else if (e.wheelDelta < 0) {//当滑轮向下滚动时
                    if (newnum == a - 1) {
                        return
                    }
                    ;
                    if ($("#about_content").is(":animated")) {
                        return;
                    }
                    newnum++;
                    $("#about_content").animate({top: '-=100%'}, 500, function () {
                    });
                    $("#about_ul li").eq(newnum - 1).removeClass("about_li");
                    $("#about_ul li").eq(newnum).addClass("about_li");
                }
            } else {
                return;
            }
        }
        var num = 0;
        var c = 5;
        var scrollFunc1 = function (e) {
            e = e || window.event;
            if (e.wheelDelta) {//
                var div = $("#out_content");
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    if (num == 0) {
                        return
                    }
                    ;
                    if ($("#out_content").is(":animated")) {
                        return;
                    }
                    num--;
                    $("#out_content").animate({top: '+=100%'}, 500);
                    $("#out_ul li").eq(num + 1).removeClass("ckeck_li");
                    $("#out_ul li").eq(num).addClass("ckeck_li");
                }
                else if (e.wheelDelta < 0) {//当滑轮向下滚动时
                    if (num == c - 1) {
                        return
                    }
                    ;
                    if ($("#out_content").is(":animated")) {
                        return;
                    }
                    num++;
                    $("#out_content").animate({top: '-=100%'}, 500, function () {
                    });
                    $("#out_ul li").eq(num - 1).removeClass("ckeck_li");
                    $("#out_ul  li").eq(num).addClass("ckeck_li");
                }
            } else {
                return;
            }
        }
        $(".myoutteam").click(function () {
            window.onmousewheel = scrollFunc1;
        })
        $(".my_aboutus").click(function () {
            window.onmousewheel = scrollFunc;
        })

    }

//判断是否IE浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        // return "IE";
        // alert("IE");
    }

//判断是否Edge浏览器
    if (userAgent.indexOf("Trident") > -1) {
        // return "Edge";
        // alert("Edge");
    }

})

var CanvasParticle=(function(){
    function getElementByTag(name){return document.getElementsByTagName(name);}
    function getELementById(id){return document.getElementById(id);}
    function canvasInit(canvasConfig){canvasConfig=canvasConfig||{};
        var html=getElementByTag("html")[0];
        var body=document.getElementById("mydiv");
        var canvasObj=document.getElementById("canvas");
        var canvas={element:canvasObj,points:[],config:{vx:canvasConfig.vx||4,vy:canvasConfig.vy||4,height:canvasConfig.height||2,width:canvasConfig.width||2,count:canvasConfig.count||100,color:canvasConfig.color||"121, " +
                    "" +
                    "162, 185",stroke:canvasConfig.stroke||"130,255,255",dist:canvasConfig.dist||6000,e_dist:canvasConfig.e_dist||20000,max_conn:10}};
        if(canvas.element.getContext("2d"))
        {canvas.context=canvas.element.getContext("2d");}else{return null;}
        body.style.padding="0";body.style.margin="0";
        // body.appendChild(canvas.element);
        //  canvas.element.style="position: absolute; top: 0; left: 0; z-index: 20;";
        canvasSize(canvas.element);
        // ************************************************************************************
        // window.onresize=function(){canvasSize(canvas.element);}
        body.onmousemove=function(e){var event=e||window.event;canvas.mouse={x:event.clientX,y:event.clientY}}
        document.onmouseleave=function(){canvas.mouse=undefined;}
        setInterval(function(){drawPoint(canvas);},40);}
    function drawPoint(canvas){
        var context=canvas.context,point,dist;
        context.clearRect(0,0,canvas.element.width,canvas.element.height);
        context.beginPath();
        context.fillStyle="rgb("+canvas.config.color+")";
        for(var i=0,len=canvas.config.count;i<len;i++){
            if(canvas.points.length!=canvas.config.count){point={x:Math.floor(Math.random()*canvas.element.width),y:Math.floor(Math.random()*canvas.element.height),
                vx:canvas.config.vx/2-Math.random()*canvas.config.vx,vy:canvas.config.vy/2-Math.random()*canvas.config.vy}}else{point=borderPoint(canvas.points[i],canvas);}
            context.fillRect(point.x-canvas.config.width/2,point.y-canvas.config.height/2,canvas.config.width,canvas.config.height);canvas.points[i]=point;}
        drawLine(context,canvas,canvas.mouse);context.closePath();}
    function borderPoint(point,canvas){var p=point;if(point.x<=0||point.x>=canvas.element.width){p.vx=-p.vx;p.x+=p.vx;}else if(point.y<=0||point.y>=canvas.element.height){p.vy=-p.vy;p.y+=p.vy;}else{p={x:p.x+p.vx,y:p.y+p.vy,vx:p.vx,vy:p.vy}}
        return p;}
    function drawLine(context,canvas,mouse){context=context||canvas.context;for(var i=0,len=canvas.config.count;i<len;i++){canvas.points[i].max_conn=0;for(var j=0;j<len;j++){if(i!=j){dist=Math.round(canvas.points[i].x-canvas.points[j].x)*Math.round(canvas.points[i].x-canvas.points[j].x)+
        Math.round(canvas.points[i].y-canvas.points[j].y)*Math.round(canvas.points[i].y-canvas.points[j].y);if(dist<=canvas.config.dist&&canvas.points[i].max_conn<canvas.config.max_conn){canvas.points[i].max_conn++;context.lineWidth=0.5-dist/canvas.config.dist;context.strokeStyle="rgba("+canvas.config.stroke+","+(1-dist/canvas.config.dist)+")"
        context.beginPath();context.moveTo(canvas.points[i].x,canvas.points[i].y);context.lineTo(canvas.points[j].x,canvas.points[j].y);context.stroke();}}}
        if(mouse){dist=Math.round(canvas.points[i].x-mouse.x)*Math.round(canvas.points[i].x-mouse.x)+
            Math.round(canvas.points[i].y-mouse.y)*Math.round(canvas.points[i].y-mouse.y);if(dist>canvas.config.dist&&dist<=canvas.config.e_dist){canvas.points[i].x=canvas.points[i].x+(mouse.x-canvas.points[i].x)/20;canvas.points[i].y=canvas.points[i].y+(mouse.y-canvas.points[i].y)/20;}
            if(dist<=canvas.config.e_dist){context.lineWidth=1;context.strokeStyle="rgba("+canvas.config.stroke+","+(1-dist/canvas.config.e_dist)+")";context.beginPath();context.moveTo(canvas.points[i].x,canvas.points[i].y);context.lineTo(mouse.x,mouse.y);context.stroke();}}}}
    return canvasInit;})();

