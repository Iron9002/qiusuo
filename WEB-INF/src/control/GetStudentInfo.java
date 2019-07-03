package control;

import java.sql.ResultSet;
import java.util.ArrayList;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import base.DataServer;
import base.OutString;
import base.OutString;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class GetStudentInfo extends HttpServlet{
	public void doPost(HttpServletRequest req, HttpServletResponse res){
		res.setCharacterEncoding("UTF-8"); 
		DataServer server = new DataServer() ;
		HttpSession session = req.getSession() ;
		String json="" ;
		String userName = req.getParameter("username") ;
		String login = String.valueOf(session.getAttribute(userName)) ;
		OutString.out("login", login);
		JSONArray  jsonArray = new JSONArray() ;
		try{
			if(login.equals("true")){
				String sql = "select * from student_info" ;
				ResultSet rs = server.stmt_mysql.executeQuery(sql) ;
				OutString.out("sql",sql) ;
				while(rs.next()){
					JSONObject obj=new JSONObject() ;
					obj.put("name", rs.getString("si_name")) ;
					obj.put("mobile", rs.getString("si_mobile")) ;
					obj.put("age", rs.getString("si_age")) ;
					jsonArray.add(obj) ;
				}
				OutString.out("json", jsonArray.toString());
				res.getWriter().write(jsonArray.toString());
			}else{
				json = "unlogin" ;
				OutString.out("json", json);
				res.getWriter().write(json);
			}
		}catch(Exception e){
			OutString.out("try", "false");
			e.printStackTrace( );
		}
	}
}
