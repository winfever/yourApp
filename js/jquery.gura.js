<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Step11_Plugin.html</title>
</head>
<body>
<div>div1</div>
<div>div2</div>
<div>div3</div>
<div>div4</div>
<div>div5</div>
<!-- jquery 로딩 -->
<script src="js/jquery-3.3.1.js"></script>
<!-- jquery plugin 로딩 -->
<script src="js/jquery.gura.js"></script>
<script>
	
	(function($){
		// .gura() 라는 동작 정의하기
		$.fn.gura=function(options){
			// default 값 정의하기
			var settings=$.extend({
				msg:"안녕! 나는 gura야!",
				width:"200px",
				height:"200px",
			}, options);

			this
			.text(setting.msg)
			.css("width",setting.width)
			.css("height",setting.height)
			.css("border","10px solid red")
			.click(function(){
				$(this).animate({marginLeft:"+=100px"});
			});
		};


	})(jQuery);

	// $("div").gura();
	$("div").gura({
		msg:"나는 해골이야",
		width: "300px",
		height: "100px"});
</script>
</body>
</html>