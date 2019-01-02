$(document).ready(function(event){
    $('.topright li').on("mouseover",function(event){
        $(this).children(".hide").css({"display":"block"})
    })
    $('.topright li').on("mouseout",function(event){
        $(this).children(".hide").css({"display":"none"})
    })
})