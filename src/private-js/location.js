
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

var myClassPic  = app.photoBrowser.create({
	photos:[
		{
			url:'image/teacher/class_01.jpg'
		},
		{
			url:'image/teacher/class_02.jpg'
		},
		{
			url:'image/teacher/class_03.jpg'
		},
		{
			url:'image/teacher/class_04.jpg'
		},
		{
			url:'image/teacher/class_05.jpg'
		},
	],
    type: 'standalone'
});
$$('#classPic').on('click', function () {
	myClassPic.open();
});



/*=== Default standalone ===*/
var myPhotoBrowserPopupDark  = app.photoBrowser.create({
    photos : [
    	{
            url: 'image/classroom/17_environment.jpg',
            caption:'充满的童趣的教学环境'
        },
    	{
            url: 'image/classroom/17_B12.jpg',
            caption: '中型教室，有投影和大屏电视'
        },
        {
            url: 'image/classroom/17_A04_2.jpg',
            caption:'小型教室，有投影和大屏'
        },
        {
            url: 'image/classroom/17_rest.jpg',
            caption:'供50人使用的休息区'
        },
        {
            url: 'image/classroom/17_classroom.jpg',
            caption:'综合教室区'
        },
        {
            url: 'image/classroom/17_corridor.jpg',
            caption:'走廊实景'
        },
        
    ],
    type: 'standalone'
});
$$('#roomPic').on('click', function () {
    myPhotoBrowserPopupDark.open();
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



