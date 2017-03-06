/**
 * Created by 鹏 on 2017/3/5.
 */


$(function () {
    $('#pagepiling').pagepiling({
        loopBottom:true,
        navigation: {
            'position': 'right',
            'tooltips': ['HOME', 'PRACTICE', 'PROFESSIONS', 'HONOR','MORE']
        },
        onLeave: function (index,nextIndex,direction) {
            console.log(index);
            console.log(nextIndex);
            console.log(direction);
            console.log($('.section')[index-1]);
            var a=$('.section');
            a.removeClass('leave');
            $(a[index-1]).addClass('leave');

            if (index==3){
                var c=$('#section3 svg');
                c.removeClass('svg');
                console.log(123);
            }
        },
        afterLoad: function (anchorLink,index) {
            if (index==3){
                var c=$('#section3 svg');
                c.addClass('svg');
                console.log(12);
            }
        }
    })
})