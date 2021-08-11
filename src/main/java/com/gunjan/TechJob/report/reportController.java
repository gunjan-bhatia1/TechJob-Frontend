//package com.gunjan.TechJob.report;
//
//import java.util.List;
//
//import javax.servlet.ServletContext;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//
//import com.gunjan.TechJob.Job.jobJpaRepository;
//
//@CrossOrigin(origins="http://localhost:4200")
//@Controller
//public class reportController {
//
//  @Autowired
//  ReportUtil reportUtil;
//
//  @Autowired
//  ServletContext sc;
//  
//  @Autowired
//  private jobJpaRepository jobService;
//  
//	@GetMapping("{ID}/")
//	public String generateReport(@PathVariable Long ID) {
//
//	String path=sc.getRealPath("/");
//	System.out.println(path);
//	List<Object[]> data=jobService.findBystatusAndstatusCount(ID);
//  reportUtil.generatePieChart(path, data);
//  System.out.println("imin");
//	return "report";	
//}
//
//}
