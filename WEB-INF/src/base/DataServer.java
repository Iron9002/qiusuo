package base;

import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class DataServer {

	public Statement stmt_oracle ;
	public Statement stmt_mysql ;
	public Connection conn ;
	
	public DataServer(){
		String name = "root" ;
		String pwd = "zd081324" ;
		String url = "jdbc:mysql://127.0.0.1:3306/qiusuoeducation?useUnicode=true&characterEncoding=UTF-8" ;
		this.linkMySql(url,name,pwd) ;
	}
	
	public Statement linkMySql(String url,String name,String pwd){
		try{
			Class.forName("com.mysql.jdbc.Driver") ;
			this.conn = DriverManager.getConnection(url,name,pwd) ;
			this.stmt_mysql = this.conn.createStatement() ;
		}catch(Exception e){
			e.printStackTrace();
		}
		return this.stmt_mysql ;
	}
	
	
}
