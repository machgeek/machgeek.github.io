// 上滚显示map，下滚消失
$(document).ready(function(){  
  var p=0,t=0;  
  $(window).scroll(function(e){  
          p = $(this).scrollTop();  
            
          if(t<=p){//下滚  
            $('#map').fadeOut("slow"); 
          }  
            
          else{//上滚  
            $('#map').fadeIn("slow"); 
          }  
          setTimeout(function(){t = p;},0);         
  });  
});  

// 鼠标点击后缓慢返回顶部
var btn = $('#map');
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// 

