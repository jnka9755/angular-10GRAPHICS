import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barCharLabels: Label[] = ['2020', '2021', '2022', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {data : [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#F0B622', hoverBackgroundColor: '#D6A21E' },
    {data : [28, 48, 40, 19, 86, 27, 90], label: 'Series B' , backgroundColor: '#705510', hoverBackgroundColor: '#D6A21E'},
    {data : [8, 33, 12, 34, 70, 90, 22], label: 'Series C', backgroundColor: '#D6A21E', hoverBackgroundColor: '#D6A21E'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  randomize() {
    this.barChartData[0].data = [
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
    ];

    this.barChartData[1].data = [
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
    ];

    this.barChartData[2].data = [
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
      Math.round(Math.random() * 100 ),
    ];
  }
}
