$(function () {             
  //绑定滚动条事件 
    //绑定滚动条事件 
  $(window).bind("scroll", function () { 
      var sTop = $(window).scrollTop(); 
      var sTop = parseInt(sTop); 
      if (sTop >= 130) { 
          if (!$("#gotop").is(":visible")) { 
              try { 
                  $("#gotop").slideDown(); 
              } catch (e) { 
                  $("#gotop").show(); 
              }                       
          } 
      } 
      else { 
          if ($("#gotop").is(":visible")) { 
              try { 
                  $("#gotop").slideUp(); 
              } catch (e) { 
                  $("#gotop").hide(); 
              }                        
          } 
      }  
  }); 
}) 
  
  // 鼠标点击后缓慢返回顶部
  var btntop = $('#gotop');
  btntop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });