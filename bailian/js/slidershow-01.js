

//轮播图

;(function(){
	
	
		var i=0;   //轮播图  index 控制
		var timer;	//全局 定时器 
		
	$(function(){
	
		slidershow();
		
		//当鼠标进入轮播图时   停止轮播
		$("#slidershow,#slidershow-control").hover(function(){
			clearInterval(timer);
			$(".prev").stop().animate({"left":"58px"});
			$('.next').stop().animate({"right":"103px"});
		},function(){
			slidershow();
			$(".prev").stop().animate({"left":"0px"});
			$('.next').stop().animate({"right":"43px"});		
		})
		
		//点击slidershow_control_left或者slidershow_control_right时  改变  全局变量 i 的 值  从而改变图片
		$("#prev").click(function(){
			i--;
			move();
		})
		
		$("#next").click(function(){
			i++;
			move();
		});		
		
		//当鼠标放入slidershow_indicator_list的 li时  出现相对应的图片  且背景图片变色   兄弟节点背景变白
	
		$("#slidershow-indicator-list li").hover(function(){
			$(this).stop().animate({"width":"30px"},"slow").css({"background":"red"}).siblings().stop().animate({"width":"14px"}).css({"background":"#222"});
			i=$(this).index();
			move();
		},function(){
			
		});
		
		
		
	})
	
	
	function slidershow(){
		timer=setInterval(function(){
		i++;
		move();
		},3000);
		
	}	
	//切换图片 move()方法
	function move(){
		if(i>=8){
			i=0;
		}
		if(i<0){
			i+=8;
		}
		$("#slidershow-list li").eq(i%8).siblings().animate({"opacity":"0"},"slow");
		$("#slidershow-list li").eq(i%8).stop().animate({"opacity":"1"},"slow");
		
		$("#slidershow-indicator-list li").eq(i%8).siblings().animate({"width":"14px"}).css({"background":"#222"});
		$("#slidershow-indicator-list li").eq(i%8).animate({"width":"30px"},"slow").css({"background":"red"});
	};
	
})(jQuery)
