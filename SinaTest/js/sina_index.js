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
	var orderMenu=$('.order-menu span');
	var test1=orderMenu.first();
	var test2=orderMenu.slice(1,2);
	var test3=orderMenu.last();	
	var newsContent1=$('.tab-cont1');
	var newsContent2=$('.tab-cont2');
	var newsContent3=$('.tab-cont3');
	test1.css({
			'background': '#FFF',
			'border-top': '3px solid #E67902'
		});	
	test1.hover(function(){
		newsContent1.css('display','block');
		newsContent2.css('display','none');
		newsContent3.css('display','none');
		test1.css({
			'background': '#FFF',
			'border-top': '3px solid #E67902'
		});	
		test2.css({
			'background': 'none',
			'border-top': 'none'
		});
		test3.css({
			'background': 'none',
			'border-top': 'none'
		});
	});
	test2.hover(function(){
		newsContent1.css('display','none');
		newsContent2.css('display','block');
		newsContent3.css('display','none');
		test2.css({
			'background': '#FFF',
			'border-top': '3px solid #E67902'
		});	
		test1.css({
			'background': 'none',
			'border-top': 'none'
		});
		test3.css({
			'background': 'none',
			'border-top': 'none'
		});
	});	
	test3.hover(function(){
		newsContent1.css('display','none');
		newsContent2.css('display','none');
		newsContent3.css('display','block');
		test3.css({
			'background': '#FFF',
			'border-top': '3px solid #E67902'
		});	
		test1.css({
			'background': 'none',
			'border-top': 'none'
		});
		test2.css({
			'background': 'none',
			'border-top': 'none'
		});
	});
});
