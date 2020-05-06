import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LineGraghComponent } from './line-gragh/line-gragh.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { RadarComponent } from './radar/radar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LineGraghComponent,
    DoughnutChartComponent,
    PieComponent,
    BarComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
