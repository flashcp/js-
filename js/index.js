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

PCcss=function() {
    var head = document.getElementsByTagName('head')[0],
        cssURL = 'css/jquery.pagepiling.css',
        linkTag = document.createElement('link');

    linkTag.id = 'dynamic-style';
    linkTag.href = cssURL;
    linkTag.setAttribute('rel','stylesheet');
    linkTag.setAttribute('media','all');
    linkTag.setAttribute('type','text/css');

    head.appendChild(linkTag);
};

$(function () {
    if(IsMobile()){
        console.log('mobile');
        var c=$('#section3 svg');
        c.addClass('svg');


    }
    else {
        console.log('ispc');
        //PCcss();
        //$('#pagepiling').pagepiling({
        //    loopBottom:true,
        //    navigation: {
        //        'position': 'right',
        //        'tooltips': ['HOME', 'PRACTICE', 'PROFESSIONS', 'HONOR','MORE']
        //    },
        //    onLeave: function (index,nextIndex,direction) {
        //        console.log(index);
        //        console.log(nextIndex);
        //        console.log(direction);
        //        console.log($('.section')[index-1]);
        //        var a=$('.section');
        //        a.removeClass('leave');
        //        $(a[index-1]).addClass('leave');
        //
        //        if (index==3){
        //            var c=$('#section3 svg');
        //            c.removeClass('svg');
        //            console.log(123);
        //        }
        //    },
        //    afterLoad: function (anchorLink,index) {
        //        if (index==3){
        //            var c=$('#section3 svg');
        //            c.addClass('svg');
        //            console.log(12);
        //        }
        //    }
        //})

    }
})