$(".avatar-container").hover(function(){
    $(this).find("img").attr("src","https://cdn.jsdelivr.net/gh/machgeek/AAAimg/avatar/med2.webp");
},function(){
    $(this).find("img").attr("src","https://cdn.jsdelivr.net/gh/machgeek/AAAimg/avatar/med.webp");
});