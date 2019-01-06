var index = 0,
    timer = null,
    x = 0;
$(document).ready(function(event){
    $('.topright li').on("mouseover",function(event){
        $(this).children(".hide").css({"display":"block","z-index":10})
    })
    $('.topright li').on("mouseout",function(event){
        $(this).children(".hide").css({"display":"none"})
    })


    // 图片自动轮播
    
    // $('.bannerImage').on("mouseover",function(){
    //     if(timer){
    //         clearInterval(timer);
    //     }
    // })
    // $('.bannerImage').on('mouseout',function(){
    //     timer = setInterval(function(){
    //         index++;
    //         if(index>=5){
    //             index = 0;
    //         }
    //         // console.log(index);
    //         changeImage(index);
    //     },2000)
    // })
    $('.bannerImage').add('.dots').hover(function(){
        if(timer){
            clearInterval(timer);
        }
    },self = function(){
        timer = setInterval(function(){
            index++;
            if(index>=5){
                index = 0;
            }
            // console.log(index);
            changeImage(index);
        },2000)
    })
    // 进入网页自动轮播
    self();
    

    // 点击小圆点改变图片
    $('.dots span').on("click",function(){
        index = $('.dots span').index(this);
        changeImage(index);
    })
    // 向前向后改变图片
    $('.prev').on("click",function(){
        index--;
        if(index<0){
            index=4;
        }
        changeImage(index);
    })
    $('.back').on("click",function(){
        index++;
        if(index>4){
            index=0;
        }
        changeImage(index);
    })
    // 购物车
    $('.shopcar').on("mouseover",function(){
        $('.shopcar .car').attr({"src":"img/25.png"});
        $('.bottom').attr({"src":"img/22.png"});
        $(this).css({"background":"white","color":"red","border":"1px solid #ccc"});
        $('.shopcar .shu').css({"color":"#ccc"});
    })
    $('.shopcar').on("mouseout",function(){
        $('.shopcar .car').attr({"src":"img/26.png"});
        $('.bottom').attr({"src":"img/23.png"});
        $(this).css({"background":"red","color":"white","border":"1px solid #ccc"});
        $('.shopcar .shu').css({"color":"#ccc"});
    })
    $('.shopcar').on("click",function(){
        $('.shophide').css({"display":"block"});
    })
    $('.shophide').on("mouseleave",function(){
        $('.shophide').css({"display":"none"});
    })
    // 改变banner左边菜单hover
    $('.bannerLeft div').not('.leftT').on("mouseover",function(){
        $(this).css({"background":"white","color":"red"});
        $(this).find("img").attr({"src":"img/24.png"});
    })
    $('.bannerLeft div').not('.leftT').on("mouseout",function(){
        $(this).css({"background":"red","color":"white"});
        $(this).find("img").attr({"src":"img2/23.png"});
    })
    // 显示banner左边的隐藏菜单
    $('.bannerLeft div').not(".leftT").on("mouseover",function(){
        $('.hidemenu').css({"display":"block"})
        x = $(this).index();
        $('.hidecontainer').eq(x).css({"display":"block"});
    })
    $('.bannerLeft div').not(".leftT").on("mouseout",function(){
        $('.hidemenu').css({"display":"block"})
        x = $(this).index();
        $('.hidecontainer').eq(x).css({"display":"none"});
    })
    $('.bannerLeft').on("mouseout",function(){
        $('.hidemenu').css({"display":"none"});
        $('.hidecontainer').css({"display":"none"})
    })
    $('.hidecontainer').on("mouseover",function(){
        $('.hidemenu').css({"display":"block"});
        $(this).css({"display":"block"})
    })
    $('.hidecontainer').on("mouseout",function(){
        $('.hidemenu').css({"display":"none"});
        $('.hidecontainer').css({"display":"none"})
    })
})
// 改变图片
function changeImage(index){
    $('.bannerImage img').each(function(x,element){
        $(this).css({"display":"none"});
    })
    $('.dots span').removeClass("firstdots");
    $('.dots span').eq(index).addClass("firstdots");
    $(".bannerImage img").eq(index).css({"display":"block"});
}