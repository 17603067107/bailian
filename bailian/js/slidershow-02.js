

;(function(){
		
		$(function(){
			var i=0;
		    var time_id;
		    time_id=setInterval(function(){
		    	auto();
		    },4000);
		 
		     
		    function auto(){
		        $(".progress-ol li").eq(i).find("a").animate({
		          "width":"30px"
		        },3900,function(){
		          i++;
		          $(this).css("width", '0px');
		         
		          if(i>2){
		            i=0;
		          }
		          $(".slide-main li").eq(i).siblings().fadeOut(300);
		          $(".slide-main li").eq(i).fadeIn(300);
		        });
		      
		    }
		
		})
		
		
})(jQuery);


//$(function(){
//	var b=new Slider();
//})




//function Slider(obj1,obj2){
//		var i=0;
//		var time_id;
//		var that=this;
//			time_id=setInterval(function(){
//		    	that.auto();
//		    },4000);
//		
//	
//}
//
//Slider.prototype.auto=function(obj1,obj2){
//	
//				obj1.eq(i).find("a").animate({
//		          "width":"30px"
//		        },3900,function(){
//		          i++;
//		          $(this).css("width", '0px');
//		         
//		          if(i>2){
//		            i=0;
//		          }
//		          obj2.eq(i).siblings().fadeOut(300);
//		          obj2.eq(i).fadeIn(300);
//		        });
//	
//}
