package object;

public class User {
	private String userName ;
	private String userPwd ;
	
	public void setUserName(String name){
		this.userName = name ;
	}
	public String getUserName(){
		return this.userName ;
	}
	
	public void setUserPwd(String userPwd){
		this.userPwd = userPwd ;
	}
	public String getUserPwd(){
		return this.userPwd ;
	}
}
