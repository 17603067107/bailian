;(function(){
	
	
	$(function(){


				var $nav = $('#navigation');
				var $floor = $('.floor');
				
				// 1、给window绑定scroll事件
				$(window).on('scroll',function(){
					
					var scrollTop = $(window).scrollTop();
					
					var navshowTop=$("#floor1-warpper").offset().top;
					if(scrollTop >= navshowTop){
						$nav.fadeIn();
					}else{
						$nav.fadeOut();
					}

					// 2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
					// 目的：获得index值
					$floor.each(function(idx,ele){
						if(scrollTop >= $(ele).offset().top && scrollTop <= $(ele).offset().top + $(ele).outerHeight()/2){
							$nav.find('a').removeClass('select').eq(idx).addClass('select');
							return false;
						}
					});
				});

			
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery)
