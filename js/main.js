// (function() {

// 	var centerX;
// 	var centerY;
// 	var width;
// 	var	height;

// 	var windowWidth;
// 	var windowHeight;

// 	var setCenter = function() {
// 		var hello = $('#hello');
// 		var offset = hello.offset();
		
// 		width = hello.width();
// 		height = hello.height();

// 		centerX = offset.left + width / 2;
// 		centerY = offset.top + height / 2;
// 	};

// 	var setWindowHeight = function() {
// 		windowWidth = $(window).width();
// 		windowHeight = $(window).height();
// 	};

// 	$(window).resize(function(event) {
// 		setCenter();
// 		setWindowHeight();

// 	});

// 	$('html').mousemove(function(event) {
// 		setCenter();
// 		setWindowHeight();

// 		// $('#hello').css({'-webkit-transform': 'transform: rotateY(' + event.pageY +')'});

// 		var degX = ((centerY - event.pageY )/(windowHeight/2)) * 90;
// 		var degY = ((event.pageX - centerX)/(windowWidth/2))*90;

// 		$('.mona-lisa').css({
// 			'-webkit-transform': 'rotateX(' + degX +'deg) rotateY(' + degY +'deg)',
// 			'-transform': 'rotateX(' + degX +'deg) rotateY(' + degY +'deg)',
// 		});

// 		console.log("x: " + event.pageX + " y:" + event.pageY)
// 	});	

// 	setCenter();
// 	setWindowHeight();
// })();


(function(){
  
})();