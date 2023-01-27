import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-graphic',
  templateUrl: './bar-graphic.component.html',
  styleUrls: ['./bar-graphic.component.css']
})
export class BarGraphicComponent implements OnInit {

  @Input() orientation!: ChartType;
  @Input() barCharLabels: Label[] = [
    // '2020', '2021', '2022', '2024', '2025', '2026'
  ];
  @Input() barChartData: ChartDataSets[] = [
    // {data : [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#F0B622', hoverBackgroundColor: '#D6A21E' },
    // {data : [28, 48, 40, 19, 86, 27, 90], label: 'Series B' , backgroundColor: '#705510', hoverBackgroundColor: '#D6A21E'},
    // {data : [8, 33, 12, 34, 70, 90, 22], label: 'Series C', backgroundColor: '#D6A21E', hoverBackgroundColor: '#D6A21E'}
  ];

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLegend = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
