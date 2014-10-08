$(document).ready(function(){

	$("#demosMenu").change(function(){
	  var id = $(this).find("option:selected").attr("id");

	  switch (id){
	  	case 'fullVideos':
	  		window.location.href = '../../fullPage.js-master/examples/videoBackground.html';
		  break;

		case 'background':
		  window.location.href = '../../fullPage.js-master/examples/backgrounds.html';
		  break;

		case 'oneSection':
		  window.location.href = '../../fullPage.js-master/examples/oneSection.html';
		  break;

		 case 'looping':
		  window.location.href = '../../fullPage.js-master/examples/looping.html';
		  break;

		case 'noAnchor':
		  window.location.href = '../../fullPage.js-master/examples/noAnchor.html';
		  break;

		case 'scrollingSpeed':
		  window.location.href = '../../fullPage.js-master/examples/scrollingSpeed.html';
		  break;

		case 'easing':
		  window.location.href = '../../fullPage.js-master/examples/easing.html';
		  break;

		case 'callbacks':
		  window.location.href = '../../fullPage.js-master/examples/callback.html';
		  break;

	    case 'css3':
	      window.location.href = '../../fullPage.js-master/examples/css3.html';
	      break;

	    case 'continuous':
	      window.location.href = '../../fullPage.js-master/examples/continuous.html';
	      break;

		case 'backgroundVideo':
	      window.location.href = '../../fullPage.js-master/examples/videoBackground.html';
	      break;

		case 'normalScroll':
	      window.location.href = '../../fullPage.js-master/examples/normalScroll.html';
	      break;

	    case 'scrolling':
	      window.location.href = '../../fullPage.js-master/examples/scrolling.html';
	      break;

	    case 'navigationV':
	      window.location.href = '../../fullPage.js-master/examples/navigationV.html';
	      break;

	    case 'navigationH':
	      window.location.href = '../../fullPage.js-master/examples/navigationH.html';
	      break;

	    case 'fixedHeaders':
	    	window.location.href = '../../fullPage.js-master/examples/fixedHeaders.html';
	    	break;

	    case 'gradientBackgrounds':
	    	window.location.href = '../../fullPage.js-master/examples/gradientBackgrounds.html';
	    	break;

	    case 'apple':
	    	window.location.href = '../../fullPage.js-master/examples/apple.html';
	    	break;
	  }
	});

});