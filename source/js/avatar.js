$(".avatar-container").hover(function(){
    $(this).find("img").attr("src","./source/img/avatar/med2.jpg");
},function(){
    $(this).find("img").attr("src","./source/img/avatar/med.jpg");
});