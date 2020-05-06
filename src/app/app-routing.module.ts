import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineGraghComponent } from './line-gragh/line-gragh.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./chart/chart.module').then(m => m.ChartModule)
  },
  {
    path: 'line',
    component: LineGraghComponent
  },
  {
    path: 'doughnut',
    component: DoughnutChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
