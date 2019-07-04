/**
 * 
 */

var app = new Framework7({
  // App root element
	  root: '#app',
	  // App Name
	  name: 'Code Education',
	  // App id
	  id: 'com.code-education.test',
	  // Enable swipe panel
	  panel: {
	    swipe: 'left',
	  },
	  touch: {
		    tapHold: true //enable tap hold events
	  },
	  // Add default routes
	  routes: [
	    {
	      path: '/src/',
	      url: 'location.html',
	    },
	    {
	    	path:'/src/',
	    	url:'joinclass.html',
	    }
	  ],
  // ... other parameters
});
var mainView = app.views.create('.view-main');

var $$ = Dom7;

var pythonInfoPicture  = app.photoBrowser.create({
    photos : [
    	{
            url: 'image/codecombate/python_2.png',
            caption: 'CodeCombate涉及的Python内容'
        },
        {
            url: 'image/codecombate/python.jpg',
            caption: 'Python语言的Logo'
        },
    ],
    type: 'standalone'
});
$$('#pythonInfo').on('click', function () {
	pythonInfoPicture.open();
});



var fullClassPicture  = app.photoBrowser.create({
    photos : [
    	{
            url: 'image/codecombate/fullclass_1.jpg',
            caption: '涵盖小学到高中的课程设计'
        },
        {
            url: 'image/codecombate/fullclass_2.jpg',
            caption: '不同的学习阶段的课程目标'
        },
    ],
    type: 'standalone'
});


$$('#fullClass').on('click', function () {
	fullClassPicture.open();
});

//Pull to refresh content
var $ptrContent = $$('.view-main');
//Add 'refresh' listener on it
$ptrContent.on('ptr:refresh', function (e) {
// Emulate 2s loading
	setTimeout(function () {
		window.location.href='index.html' ;
 		app.ptr.done(); // or e.detail();
	}, 300);
});


//Dummy Content
var allowInfinite = true;

//Attach 'infinite' event handler
/*$$('.infinite-scroll-content').on('infinite', function () {
	// Exit, if loading in progress
	if (!allowInfinite) return;
	
	// Set loading flag
	allowInfinite = false;
	
	// Emulate 1s loading
	setTimeout(function () {
		 // Reset loading flag
		allowInfinite = true;
	 	window.location.href='location.html' ;
	}, 600);
});*/
