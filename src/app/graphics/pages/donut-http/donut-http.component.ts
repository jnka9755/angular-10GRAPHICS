import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css']
})
export class DonutHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
   ];
  public doughnutChartData: MultiDataSet = [
    
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: [
        '#323AE0  ', '#DA261B', '#55E03F', '#1DE0DD', '#E09E26'
      ],
      hoverBackgroundColor: [
        '#323AE0  ', '#DA261B', '#55E03F', '#1DE0DD', '#E09E26'
      ],
      hoverBorderColor: [
        '#A7A3A8  ', '#A7A3A8', '#A7A3A8', '#A7A3A8', '#A7A3A8'
      ]
    }
  ];

  constructor(private graphicsService: GraphicsService) { }

  ngOnInit(): void {
    // this.graphicsService.getDataDonutGraphic().subscribe( response => {

    //   const labels = Object.keys(response);
    //   const values = Object.values(response);

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData = values;

    // });

    this.graphicsService.getDataDonutGraphicData().subscribe( ({labels, values}) => {
      
      this.doughnutChartLabels = labels;
      this.doughnutChartData = values;
    });
  }

}
