//check off specific items by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});

//click on X to delete specific item
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});//只移掉他的父母层
	event.stopPropagation();//Very Important
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoAdd=$(this).val();
		$(this).val("");//按了enter之后就把输入框清空
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoAdd+"</li>");
	}

	
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})