package object;

public class Student {
	private int id ;
	private String name ;
	private String mobile ;
	private int  age ;
	
	public void setId(int id){
		this.id = id ;
	}
	public int getId(){
		return this.id ;
	}
	
	public void setName(String name ){
		this.name = name ;
	}
	public String getName(){
		return this.name ;
	}
	
	public void setMobile(String mobile){
		this.mobile = mobile ;
	}
	public String getMobile(){
		return this.mobile ;
	}
	
	public void setAge(int age){
		this.age = age ;
	}
	public int getAge(){
		return this.age ;
	}
}
