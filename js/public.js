var _toast = {
	_center: function (){
		$('#toast').css('left',(document.documentElement.clientWidth-document.getElementById('toast').offsetWidth)/2+'px');
		$('#toast').css('bottom','180px');
	},
	_show: function (text,fun){
		$('#toast').css('display','block');
		$('#toast').html(text);
		_toast._center();
		if(fun){(fun)();}
		setTimeout(function (){
			$('#toast').fadeOut(800,function (){
				_toast._hide();
			});
		},2000);
	},
	_hide: function (){
		$('#toast').css('display','none');
	}
}