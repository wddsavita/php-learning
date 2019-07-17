$('document').ready(function(){
	setTimeout(function(){
		$("h1").toggle("slow");
		
		setTimeout(function(){
			$("#enter").fadeIn("slow");	
		},1000);	
	},3000);
	
	$("#enter").click(function(){
		$(this).fadeOut("slow");
		setTimeout(function(){
			$("h1").toggle("slow");	
		},1000);		
	});
	
});
