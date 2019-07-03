/**
 * 
 */
//js获取项目根路径，如： http://localhost:8083/uimcardprj  
function getRootPath(){  
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp  
    var curWwwPath=window.document.location.href;  
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
    var pathName=window.document.location.pathname;  
    var pos=curWwwPath.indexOf(pathName);  
    //获取主机地址，如： http://localhost:8083  
    var localhostPaht=curWwwPath.substring(0,pos);  
    //获取带"/"的项目名，如：/uimcardprj  
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
    return(localhostPaht+projectName);  
}  
//获取URL中的参数值
function getURLValue(URL,para){
	var value = URL.split("?") ;
	var pattern  = /[\&]{0,1}[\w]{0,}[\=]{1}[\w]{0,}/g ;
	var result = value[1].match(pattern) ;
	for(i=0;i<result.length;i++){
		if(result[i].replace("\&","").split("=")[0]==para){
			return result[i].replace("\&","").split("=")[1] ;
		}
	}
}

