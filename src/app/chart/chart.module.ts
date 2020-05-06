import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart/chart.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    MatButtonModule
  ]
})
export class ChartModule { }
