// 上滚显示gotop，下滚消失
$(document).ready(function(){  
    var p=0,t=0;  
    $(window).scroll(function(e){  
            p = $(this).scrollTop();  
              
            if(t<=p){//下滚  
              $('#gotop').show("fade"); 
            }
              
            else{//上滚  
              $('#gotop').hide("fade"); 
            }  
            setTimeout(function(){t = p;},0);         
    });  
  });  
  
  // 鼠标点击后缓慢返回顶部
  var btntop = $('#gotop');
  btntop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });