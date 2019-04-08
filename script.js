$('document').ready(function(){

	$('button').on('click', function(){
		var a, b, res;
		a = $("#f").val();
		b = $("#s").val();
		a = parseInt(a);
		b = parseInt(b);
		res = a + b;
		alert(res);
	});

});