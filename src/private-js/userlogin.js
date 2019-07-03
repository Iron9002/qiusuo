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
}) ;
var mainview = app.view.create('.view-main') ;
$$ = Dom7 ;

$$('#submit').on('click',function(){
	$.ajax({
		type:"post",
		url:"../login",
		data:{
			username:$$('#username').val(),
			userpwd:$$('#userpwd').val(),
		},
		success:function(res){
			if(res=="true"){
				location.href="viewstudent.html?name="+$$('#username').val() ;
			}else{
				var toast = app.toast.create({
					  text: '登录失败',
					  position: 'center',
					  closeTimeout: 2000,
					});
				toast.open();
			}
		}
		
	})
})

