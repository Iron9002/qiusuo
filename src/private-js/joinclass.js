
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

//Pull to refresh content
var $ptrContent = $$('.view-main');
//Add 'refresh' listener on it
$ptrContent.on('ptr:refresh', function (e) {
// Emulate 2s loading
	setTimeout(function () {
		window.location.href='location.html' ;
 		app.ptr.done(); // or e.detail();
	}, 300);
});


/*//Dummy Content
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
	}, 300);
});*/

$$('#submit').on('click',function(){
	var name = $$('#sname').val() ;
	var mobile = $$('#smobile').val() ;
	var age = $$('#sage').val() ;
	var location=$$('#slocation').val() ;
	if(name==""||mobile==""||age==""||location==""){
		var toastIcon = app.toast.create({
			  //icon: app.theme === 'ios' ? '<i class="f7-icons">check_round_fill</i>' : '<i class="material-icons">check_round_fill</i>',
			  text: '请完善学生信息',
			  position: 'center',
			  closeTimeout: 2000,
			});
		toastIcon.open();
	}else{
		$.ajax({
			type:"post",
			url:"../addStu",
			data:{
				name:$$('#sname').val(),
				mobile:$$('#smobile').val(),
				age:$$('#sage').val(),
				location:$$('#slocation').val()
			},
			success:function(res){
				if(res=="true"){
					$$('#sname').val("") ;
					$$('#smobile').val("") ;
					$$('#sage').val("") ;
					$$('#slocation').val("") ;
					var toastIcon = app.toast.create({
						  //icon: app.theme === 'ios' ? '<i class="f7-icons">check_round_fill</i>' : '<i class="material-icons">check_round_fill</i>',
						  text: '报名成功',
						  position: 'center',
						  closeTimeout: 2000,
						});
					toastIcon.open();
				}
			}
		})
	}
})




