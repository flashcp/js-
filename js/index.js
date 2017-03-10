/**
 * Created by 鹏 on 2017/3/5.
 */

IsMobile=function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = false;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}


PcCss= function () {
    var head=$('head');
    head.append('<link'+' '+'href="css/jquery.pagepiling.css"'+' '+'rel="stylesheet"'+' '+'type="text/css">');
}

AddSvg=function(){
    var c=$('#section3 svg');
    c.addClass('svg');
};

$(function () {
    if(IsMobile()){
        console.log('mobile');
        $('html').addClass('mobile');
        $('.projects-mi').remove();
        AddSvg();
    }
    else {
        console.log('ispc');
        PcCss();
        $('#pagepiling').pagepiling({
            loopBottom:true,
            navigation: {
                'position': 'right',
                'tooltips': ['主页', '实践', '技能', '荣誉','了解更多']
            },
            onLeave: function (index,nextIndex,direction) {
                console.log($('.section')[index-1]);
                var a=$('.section');
                a.removeClass('leave');
                $(a[index-1]).addClass('leave');

                if (index==3){
                    var c=$('#section3 svg');
                    c.removeClass('svg');
                }
            },
            afterLoad: function (anchorLink,index) {
                var c=$('#section3 svg');
                if (index==3){
                    AddSvg();
                }
            }
        })

    }
})