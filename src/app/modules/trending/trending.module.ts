import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './trending.component';
import { TrendingRoutingModule } from './trending-routing.module';



@NgModule({
  declarations: [
    TrendingComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule
  ]
})
export class TrendingModule { }
