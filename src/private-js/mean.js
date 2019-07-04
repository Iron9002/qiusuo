
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


/*=== Default standalone ===*/

var examPicture  = app.photoBrowser.create({
    photos : [
    	{
            url: 'image/codecombate/exam3_beijing.jpg',
            caption: '2018年北京卷'
        },
        {
            url: 'image/codecombate/exam2_jiangsu.jpg',
            caption: '2018年江苏卷'
        },
        {
            url: 'image/codecombate/exam1_quanguo2.jpg',
            caption: '2018年全国卷（二）'
        },
        {
            url: 'image/codecombate/exam5.jpg'
        },
    ],
    type: 'standalone'
});
$$('#examInfo').on('click', function () {
	examPicture.open();
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

/*
//Dummy Content
var allowInfinite = true;
//Attach 'infinite' event handler
$$('.infinite-scroll-content').on('infinite', function () {
	// Exit, if loading in progress
	if (!allowInfinite) return;
	
	// Set loading flag
	allowInfinite = false;
	
	// Emulate 1s loading
	setTimeout(function () {
		 // Reset loading flag
		allowInfinite = true;
	 	window.location.href='joinclass.html' ;
	}, 600);
});*/

$$('#howtogo').on('click',function(){
	window.location.href='http://api.map.baidu.com/marker?location=106.511853,29.607343&title=新牌坊龙湖晶郦馆A馆L4层&content=新牌坊龙湖晶郦馆A馆L4层&output=html'
})



