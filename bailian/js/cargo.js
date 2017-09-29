

$(function(){
	
	$(".new-czt-prev,.new-czt-next").click(function(){
		var Ul_left=$(".new-czt-ul").css("left")
		if(parseInt(Ul_left)==0){
			$(".new-czt-prev").show();
			$('.new-czt-next').hide();
			$(".new-czt-ul").animate({"left":"-966px"});
		}else if(parseInt(Ul_left)==-966){
			$(".new-czt-prev").hide();
			$('.new-czt-next').show();
			$(".new-czt-ul").animate({"left":"0"});
		}
		
		
	})
	
	$(".floor-con li img").hover(function(){
		$(this).stop().animate({"marginLeft":"-10px"});
		
	},function(){
		
		$(this).stop().animate({"marginLeft":"0px"});
	})
	
	
	
	
	
	
	
})
