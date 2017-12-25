$(function(){
	

	var timer=null;
	auto();
	
	
	
	
	
	
	
	
	
	
	
	
	
	function auto(){
		timer=setInterval(function(){
			tab();
		},2000)
	}
	
	
	function tab(){
		
		var img=$('ul>li'),
			n=0;
		$(img).each(function(i){
				n=i+1;
				if(n==9)n=1;
			$(img[i]).attr('class','l'+n)
		})
		setTimeout(function(){
			var last=img.eq(-1);
			img.parent().prepend(last);
		},1000)
		
	}
	
})