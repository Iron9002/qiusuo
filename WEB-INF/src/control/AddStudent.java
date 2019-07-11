package control;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import base.DataServer;
import base.OutString;
import base.Parameters;
import object.Student;

public class AddStudent extends HttpServlet {
	public DataServer server = new DataServer() ; 
	
	
	public void doPost(HttpServletRequest req, HttpServletResponse res){
		Student student= new Student() ;
		res.setCharacterEncoding("UTF-8"); 
		String json = "" ;
		try{
			req.setCharacterEncoding("UTF-8");
			String location = req.getParameter("location") ;
			String name = req.getParameter("name") ;
			String mobile = req.getParameter("mobile") ;
			int age = Integer.parseInt(req.getParameter("age")) ;
			OutString.out("value", name+" "+mobile+" "+age);
			if(this.checkStudent(name, mobile)){
				student.setName(name);
				student.setMobile(mobile);
				student.setAge(age);
				student.setLocation(location);
				student.setStatus(Parameters.FIRST_REG);
				String sql = "insert into student_info(si_name,si_mobile,si_age,si_location,si_status,si_log) values(?,?,?,?,?,?)" ;
				PreparedStatement stmt = server.conn.prepareStatement(sql);   //会抛出异常
				stmt.setString(1, student.getName());
				stmt.setString(2, student.getMobile());
				stmt.setInt(3, student.getAge());
				stmt.setString(4, student.getLoaction());
				stmt.setString(5, student.getStauts());
				stmt.setString(6, "");
				int result = stmt.executeUpdate() ;
				System.out.println("result:"+result);
				if(result!=-1)
					json="true" ;
				else
					json="false" ;
			}else{
				json="该学生已经报名" ;
			}
			res.getWriter().write(json);
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
	
	/*
	 * 检查学生是否参加过体验课
	 * 参加过 ，返回FALSE
	 * 未参加过，返回TRUE
	 */
	private boolean checkStudent(String studentName,String studentMobile){
		try{
			String sql = "select * from student_info where si_name='?' and si_mobile='?'" ;
			PreparedStatement stmt=server.conn.prepareStatement(sql) ;
			stmt.setString(1, studentName);
			stmt.setString(2, studentMobile);
			ResultSet rs = stmt.executeQuery() ;
			while(rs.next()){
				return false ;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return true ;
		
	}
	
	/*
	 * 重新设置学生的报名状态
	 * 
	 */
	private boolean resetStudentStatus(String status){
		try{
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return false ;
	}
}
