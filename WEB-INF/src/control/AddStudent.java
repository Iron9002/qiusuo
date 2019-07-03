package control;

import java.sql.PreparedStatement;
import java.util.ArrayList;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



import base.DataServer;
import base.OutString;
import base.Parameters;
import object.Student;

public class AddStudent extends HttpServlet {

	public void doPost(HttpServletRequest req, HttpServletResponse res){
		DataServer server = new DataServer() ;
		
		Student student= new Student() ;
		res.setCharacterEncoding("UTF-8"); 
		String json = "" ;
		try{
			req.setCharacterEncoding("UTF-8");
			String name = req.getParameter("name") ;
			String mobile = req.getParameter("mobile") ;
			int age = Integer.parseInt(req.getParameter("age")) ;
			OutString.out("value", name+" "+mobile+" "+age);
			student.setName(name);
			student.setMobile(mobile);
			student.setAge(age);
			String sql = "insert into student_info(si_name,si_mobile,si_age) values(?,?,?)" ;
			PreparedStatement stmt = server.conn.prepareStatement(sql);   //»áÅ×³öÒì³£
			stmt.setString(1, student.getName());
			stmt.setString(2, student.getMobile());
			stmt.setInt(3, student.getAge());
			int result = stmt.executeUpdate() ;
			System.out.println("result:"+result);
			if(result!=-1)
				json="true" ;
			else
				json="false" ;
			res.getWriter().write(json);
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
}
