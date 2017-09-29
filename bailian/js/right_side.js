
	
	
	$(function(){
//头部 js 特效
		$("#mybailian").hover(function(){
			$(this).css({"background":"#fff","borderColor":"#e2e2e2"}).find("#bailian-list").show();
			
		},function(){
			$(this).css({"background":"#f7f7f7","borderColor":"#f7f7f7"}).find("#bailian-list").hide();
		})
		
		$("#jiaofei").hover(function(){
			$(this).css({"background":"#fff","borderColor":"#e2e2e2"}).find("#pay").show();
			
		},function(){
			$(this).css({"background":"#f7f7f7","borderColor":"#f7f7f7"}).find("#pay").hide();
		})
		
		$("#kefu").hover(function(){
			$(this).css({"background":"#fff","borderColor":"#e2e2e2"}).find("#kefu-list").show();
			
		},function(){
			$(this).css({"background":"#f7f7f7","borderColor":"#f7f7f7"}).find("#kefu-list").hide();
		})
		
		$("#zhangshang").hover(function(){
			$(this).css({"background":"#fff","borderColor":"#e2e2e2"}).find("#zhangshang-list").show();
			
		},function(){
			$(this).css({"background":"#f7f7f7","borderColor":"#f7f7f7"}).find("#zhangshang-list").hide();
		})
		
		//去广告
		$("#advert-del").click(function(){
			
			$("#advert-warpper").hide();
		})
		
		
//侧边栏  js效果		
		//侧边栏 tab切换
		$("#user-login,#user-collect,#user-history,#user-service,#user-totop").hover(function(){
			$(this).find(".user-tab").stop().animate({"width":"86px","overflow":"visible"}).show();
		},function(){
			$(this).find(".user-tab").stop().animate({"width":"0px","overflow":"hidden"}).hide();
		})
		
		//二维码
		$("#user-qrcode").hover(function(){
			$(this).find(".qrcode-tab").stop().animate({"width":"150px","overflow":"visible"}).show();
			$(".qr-dd").addClass("cur");
		},function(){
			$(".qrcode-tab").stop().animate({"width":"0px","overflow":"hidden"}).hide();
			$(".qr-dd").removeClass("cur");
		})
		//回到顶部
		$("#user-totop").click(function(){
			$(window).scrollTop(0);		
		})
		
		
		
		// 显示 登录 及其 购物车商品  操作	// 点击购物车
		$("#user-login").click(function(){	
			var sright = parseInt($('#rside').css('right'));
			if(sright == -276){
				$("#rside").stop().animate({"right":"0"}).find(".conbar01").show();	
			}
			if(sright == 0){
				$("#rside").stop().animate({"right":"-276"}).find(".conbar01").hide();	
			}
		});
	
		$("#shopcar").click(function(){
			var sright = parseInt($('#rside').css('right'));
			if(sright == -276){
				$("#rside").stop().animate({"right":"0"}).find(".conbar02").show();	
			}
			if(sright == 0){
				$("#rside").stop().animate({"right":"-276"}).find(".conbar02").hide();	
			}	
		})
		
		$(".closed, .sidebar-closed").click(function(){
			$("#rside").stop().animate({"right":"-276"}).find(".conbar02").hide();
			$("#rside").stop().animate({"right":"-276"}).find(".conbar01").hide();
		})
		
		
	
	
	})
	
	
	
	
	
	
	
	
	
	
	
	
