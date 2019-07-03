package base;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Parameters {
	/*
	 * 标志字符�?
	 */
	public static final int ID = 0 ;  //id 的默认�?�增的识别增�?
	public static final String Show = "show" ;
	public static final String Hidden="hidden" ;
	public static final String PictureURL = "picture" ;
	public static final String emResulet="emResult" ;
	public static final String UnLogin = "unLogin" ;
	/*
	 * 标准数据表字�?
	 */
	public static final String Complete = "complete" ;
	public static final String Send = "send" ;
	/*
	 * 标准Request名称
	 */
	public static final String ReqType="type" ;  //同一个Servlet不同处理过程的类�?
	public static final String ReqObjectId="id"  ;//不同对象的主要ID ;
	public static final String ReqCustomerId = "customerId" ;    //消费者ID，openId 
	/*
	 * 前端传入Request的标准Type�?
	 */
	public static final String Insert="insert" ;
	public static final String Query="query" ;
	public static final String Delete="delete" ;
	public static final String Update="update" ;
	public static final String Ready = "ready" ;
	/*
	 * 标准对象�?
	 */
	public static final String Student = "student" ;
	public static final String User = "user" ;
	
 	
	public static String getDateNow(){
		try{
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
			return df.format(new Date());// new Date()为获取当前系统时�?
		}catch(Exception e){
			e.printStackTrace();
		}
		return null ;
	}
	public static String getDateTimeNow(){
		try{
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
			return df.format(new Date());// new Date()为获取当前系统时�?
		}catch(Exception e){
			e.printStackTrace();
		}
		return null ;
	}
	
}
