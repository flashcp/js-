/**
 * Created by 鹏 on 2017/3/5.
 */


$(function () {
    $('#pagepiling').pagepiling({
        loopBottom:true,
        navigation: {
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4','page5']
        },
        onLeave: function (index,nextIndex,direction) {
            console.log(index);
            console.log(nextIndex);
            console.log(direction);
            console.log($('.section')[index-1]);
            var a=$('.section');
            a.removeClass('leave');
            $(a[index-1]).addClass('leave');
        }
    })
})