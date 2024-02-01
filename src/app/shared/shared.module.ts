import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarChartVerticalComponent } from './components/charts/bar-chart-vertical/bar-chart-vertical.component';
import { BarChartHorizontalComponent } from './components/charts/bar-chart-horizontal/bar-chart-horizontal.component';
import { BarChartHorizontalMultiComponent } from './components/charts/bar-chart-horizontal-multi/bar-chart-horizontal-multi.component';
import { BarChartVerticalMultiComponent } from './components/charts/bar-chart-vertical-multi/bar-chart-vertical-multi.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BarChartVerticalComponent,
    BarChartHorizontalComponent,
    BarChartHorizontalMultiComponent,
    BarChartVerticalMultiComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BarChartVerticalComponent,
    BarChartHorizontalComponent,
    BarChartHorizontalMultiComponent,
    BarChartVerticalMultiComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
