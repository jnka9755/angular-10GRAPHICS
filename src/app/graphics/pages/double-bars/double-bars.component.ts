import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styleUrls: ['./double-bars.component.css']
})
export class DoubleBarsComponent implements OnInit {

  public providersData: ChartDataSets[] = [
    { data: [ 100, 200, 300, 400, 500 ], label: 'Vendedor A' },
    { data: [ 50, 250, 30, 450, 200 ], label: 'Vendedor B' },
    { data: [ 50, 50, 20, 50, 0 ], label: 'Restante' },
  ];
  
  public providersLabels: string[] = [ '', '2021', '2022', '2023', '2024', '2025'];
  
  public productData: ChartDataSets[] = [
    { data: [ 0 ,200, 500, 350, 900, 700 ], label: 'Carros' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
