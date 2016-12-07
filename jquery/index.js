$(document).ready(function(){
	
	
//	下面选项卡
	
	
	var lis=$(".row4 .tab ul li");
 	var zz=$("span",lis);
 	tabcontent=$(".tab-content")
 	lis.eq(0).css({"background":"#fff","border-top-color":"#79be0b"});
 	zz.eq(0).css("display","block")
 	tabcontent.eq(0).css("display","block")
 	lis.click(function(){
 		lis.css({"background":"#fafafa","border-top-color":"#ebebeb"});
 		tabcontent.css("display","none")
 		var index=lis.index($(this))
 		lis.eq(index).css({"background":"#fff","border-top-color":"#79be0b"});
 		zz.eq(index).css("display","block")
 		tabcontent.eq(index).css("display","block")
 	})
 	
 	//头部选项卡

   var Baolis=$(".nav2 .bao");
   var drop=$(".nav2 .bao ul");
   
// Baolis.hover(function(){
// 	$(this).children("ul").css("display","block");
// 	
// },function(){
// 	$(this).children("ul").css("display","none");
// })
   
   Baolis.on("mouseover",function(){
   	i=Baolis.index($(this));
   	drop.eq(i).show();
   })
   Baolis.on("mouseout",function(){
   	drop.eq(i).hide();
   })

   // 回到顶部
   jQuery.backtop($("#backtop"),500)
       $(window).scroll(function(){
 
     var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($(".slider").offset().top<=obj.scrollTop+100)
        {
           $("#backtop").css("display","block")
        }
        else 
        {
           $("#backtop").css("display","none")

        }
  })


       // 顶部

       var head=$(".head")
   
    $(window).scroll(function(){
   
     var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($(".slider").offset().top<=obj.scrollTop)
        {
          head.css("display","block")
        }
        else 
        {
           head.css("display","none")

        }
})
    
    
    
    //轮播图
            var ban=$(".banner .ban")
            var banner=$(".banner")[0];
            
            var ban_prev=$("#banner .prev")[0];
            var ban_next=$("#banner .next")[0];
            var t=setInterval(move, 4000);

            var now=0;
            var next=0;

            function move(){
                next=now+1;
                if(next>=ban.length){
                    next=0;
                }
                
                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            banner.onmouseover=function(){
                clearInterval(t);
            }
            banner.mouseout=function(){
                    t=setInterval(move,4000);
            }

            ban_prev.onclick=function(){
                next=now-1;
                 if(next<0){
                    next=ban.length-1;
                }

                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            ban_next.onclick=function(){
                move();
            }
 	
 	
 	
})





