import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts'

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarGraphicComponent } from './components/bar-graphic/bar-graphic.component';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutComponent,
    DonutHttpComponent,
    BarGraphicComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    ChartsModule
  ]
})
export class GraphicsModule { }
