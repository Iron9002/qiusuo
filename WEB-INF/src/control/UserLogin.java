package control;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import base.DataServer;
import base.OutString;
import object.User;

public class UserLogin extends HttpServlet{
	public void doPost(HttpServletRequest req, HttpServletResponse res){
		DataServer server = new DataServer() ;
		HttpSession session = req.getSession(true); 
		User user= new User() ;
		res.setCharacterEncoding("UTF-8"); 
		String json = "" ;
		OutString.out("Location", "login");
		try{
			req.setCharacterEncoding("UTF-8");
			String userName = req.getParameter("username") ;
			String userPwd = req.getParameter("userpwd") ;
			OutString.out("value", userName+" "+userPwd);
			user.setUserName(userName);
			user.setUserPwd(userPwd);
			String sql = "select * from user_info where ui_name=? and ui_pwd=?" ;
			PreparedStatement stmt = server.conn.prepareStatement(sql);   //»áÅ×³öÒì³£
			stmt.setString(1, user.getUserName());
			stmt.setString(2, user.getUserPwd());
			ResultSet result = stmt.executeQuery() ;
			if(result.next()){
				json="true" ;
				session.setAttribute(user.getUserName(), "true");
			}else{
				json="false" ;
			}
			res.getWriter().write(json);
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
}
