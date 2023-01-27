import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: MultiDataSet = [
    [ 350, 450, 100 ]
    // [ 50, 150, 120 ],
    // [ 250, 130, 70 ] 
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: [
        '#CA38E8', '#6C40DB', '#3864E8'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
