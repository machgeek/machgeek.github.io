$(".avatar-container").hover(function(){
    $(this).find("img").attr("src","./source/img/avatar/med2.png");
},function(){
    $(this).find("img").attr("src","./source/img/avatar/med.png");
});