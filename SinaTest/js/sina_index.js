$(function(){
	var link=$('.link-more');
	var list=$('#more-list li');
	link.hover(function(){
		list.css('display','block');		
	},function(){
		list.css('display','none');
	});
});


$(function(){
	var link=$('.link-list');
	var list=$('.tn-topmenulist');
	link.hover(function(){
		list.css('display','block');		
	},function(){
		list.css('display','none');
	});
});


$(document).ready(function(){
	var count=$('.imglist li').length,
		index=0;
	setInterval(function(){
		if(index<count-1){
			index++;
		}else{
			index=0;
		}	
		changeTo(index);
	},2500);

	function changeTo(num){
		var goLeft=num*240;
		$('.imglist').animate({left:"-"+goLeft+"px"},1000);	
	}
});


/*************新闻切换***********************/

$(document).ready(function(){
	function switchDiv(orderMenu,tabCont){
		orderMenu.hover(function(){
			var index=$(this).index();
			$(this).addClass('head-selected').siblings().removeClass('head-selected');
			tabCont.eq(index).css('display','block').siblings().css('display','none');
		});	
	}
	var orderMenu=$('.switch-menu span');
	var tabCont=$('.switch-div>div');
	switchDiv(orderMenu,tabCont);
	
	var orderMenu2=$('.switch-menu2 span');
	var tabCont2=$('.switch-div2>div');
	switchDiv(orderMenu2,tabCont2);
	
	var orderMenu3=$('.switch-menu3 span');
	var tabCont3=$('.switch-div3>div');
	switchDiv(orderMenu3,tabCont3);
})	