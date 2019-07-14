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
});
var mainView = app.views.create('.view-main');

var $$ = Dom7;

$(document).ready(function(){
	var name = getURLValue(window.location.href,'name') 
	$.ajax({
		type:'post',
		url:'../student',
		data:{
			username:name
		},
		success:function(res){
			if(res=='unlogin'){
				location.href='userlogin.html';
			}else{
				json = $.parseJSON(res) ;
				$.each(json,function(index,content){
					var htmlNow = $("#studentInfo").html();
					var html ="<li><a href='#' class='item-link item-content'><div class='item-inner'>"+
										"<div class='item-title-row'><div class='item-title'>"+content.name+"</div>"+
										"<div class='item-after'>"+content.age+"岁</div></div>"+
										"<div class='item-subtitle'>"+content.mobile+"</div>"+
										"<div class='item-text'>"+content.location+"</div></div></a></li>" ;
					$("#studentInfo").html(htmlNow+html) ;
				});
			}
		}
	})
})
