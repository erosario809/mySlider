sliderInt=1;
sliderNext=1;


$(document).ready(function(){
	count=$("#content>img").size();
	sliderNext=count;
        $("#content>img#"+sliderNext).fadeIn(1000);
        $("#rightcontrol").click(slideright);
        $("#leftcontrol").click(slideleft);
        
       	$("#content").mouseenter(linkin);
       	$("#links").mouseleave(linkout);
       	
      
       	
       	$("#links").click(enterpage);
       	
});



function linkin(){	
	$("#links").fadeIn(500);
}

function linkout(){	
	$("#links").fadeOut(500);
}

function slideright(){
	
	count=$("#content>img").size();
	
	sliderInt=sliderNext;
	sliderNext=sliderNext-1;
	
	if(sliderNext<1){
		sliderNext=count;
		sliderInt=count;
	}
	
	$("#content>img").fadeOut(500);
	$("#content>img#"+sliderNext).fadeIn(500);
		
	
	
	

}

function slideleft(){
	
	count=$("#content>img").size();
	
	sliderInt=sliderNext;
	sliderNext=sliderNext+1;
	
	if(sliderNext>count){
		sliderNext=1;
		sliderInt=1;
	}
	
	
	$("#content>img").fadeOut(500);
	$("#content>img#"+sliderNext).fadeIn(500);
		
	

}
