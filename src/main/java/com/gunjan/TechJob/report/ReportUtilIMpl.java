package com.gunjan.TechJob.report;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.jfree.chart.ChartColor;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.labels.PieSectionLabelGenerator;
import org.jfree.chart.labels.StandardPieSectionLabelGenerator;
import org.jfree.chart.plot.PiePlot3D;
import org.jfree.data.general.DefaultPieDataset;
import org.springframework.stereotype.Component;

@Component
public class ReportUtilIMpl implements ReportUtil {

	@SuppressWarnings("deprecation")
	@Override
	public void generatePieChart(String path, List<Object[]> data) {
		// TODO Auto-generated method stub
		
		DefaultPieDataset dataset=new DefaultPieDataset();
		
		for(Object[] objects : data) {
			if(objects[0].toString()=="true")
			dataset.setValue("Completed", new Double(objects[1].toString()));
			else
				dataset.setValue("Yet to Complete", new Double(objects[1].toString()));
		}
		
		JFreeChart chart =ChartFactory.createPieChart3D("Performance based on Completion", dataset);
	 try {
		 PieSectionLabelGenerator labelGenerator = new StandardPieSectionLabelGenerator("{0} = {1}");
		 PiePlot3D plot = ( PiePlot3D )chart.getPlot();
		 
		    plot.setLabelGenerator(labelGenerator);
		    
		ChartUtilities.saveChartAsJPEG(new File(path+"/pieChart.jpeg"), chart, 500, 400);
		
	 }
	 catch(IOException e) {
		 e.printStackTrace();
	 }
	}

}
