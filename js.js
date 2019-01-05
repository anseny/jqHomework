var index = 0,
    timer = null;
$(document).ready(function(event){
    $('.topright li').on("mouseover",function(event){
        $(this).children(".hide").css({"display":"block","z-index":10})
    })
    $('.topright li').on("mouseout",function(event){
        $(this).children(".hide").css({"display":"none"})
    })
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
// 改变图片
function changeImage(index){
    $('.bannerImage img').each(function(x,element){
        $(this).css({"display":"none"});
    })
    $('.dots span').removeClass("firstdots");
    $('.dots span').eq(index).addClass("firstdots");
    $(".bannerImage img").eq(index).css({"display":"block"});
}