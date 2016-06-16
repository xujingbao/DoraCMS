/**
 * Created by Administrator on 2015/7/21.
 */
$(function(){
    $('#userLoginOut').click(function () {
        loginOut();
    });

    $('.soitem').hover(function(){
        $(this).find('.soitemcontent:eq(0)').show();
    },function(){
        $(this).find('.soitemcontent:eq(0)').hide();
    });


//    下拉菜单
    $('.sotj > .soitemcontent').find('li').hover(function(){
        $(this).find('.soitemcontent:eq(0)').css({
            'left' : '126px',
            'top' : '0px'
        }).show();
    },function(){
        $(this).find('.soitemcontent:eq(0)').hide();
    });

//    搜索按钮
    $('#soform > form').find('.icon-search').click(function(){
        $('#soform').addClass('open');
    });

    $('#soform').hover(function(){},function(){
        $('#soform').removeClass('open');
    });

//    二维码显示
    $('#cweixin').hover(function(){
        $(this).find('div:eq(0)').addClass('showQr');
    },function(){
        $(this).find('div:eq(0)').removeClass('showQr');
    });

//    返回顶部
    $('#gotop').click(function(){
        setScrollTop(0);
    });

//    监听滚动条位置
    $(window).scroll(function(event) {
        if(getScrollTop() > 60){
            $('#cbbfixed').css('bottom' , '10px');
        }else{
            $('#cbbfixed').css('bottom' , '-85px');
        }
    });

    //兼容方式获取scrolltop以及设置scrolltop
    function getScrollTop() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        return scrollTop;
    }

    function setScrollTop(scroll_top) {
        document.documentElement.scrollTop = scroll_top;
        window.pageYOffset = scroll_top;
        document.body.scrollTop = scroll_top;
    }

//    点击用户头像
    $('#showMyOpt').click(function(){
        $('#uoptlist').hover(function(){},function(){
            $('#uoptlist').removeClass('show').addClass('hide');
        }).toggleClass('show');
    })

    function loginOut(){
        $.ajax({
            url: "/users/logout",
            method: "GET",
            success: function (result) {
                if (result === "success") {
                    window.location = "/"
                } else {
                    alert("未知异常，请稍后重试");
                }
            }
        })
    }


});