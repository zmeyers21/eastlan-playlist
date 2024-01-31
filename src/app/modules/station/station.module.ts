import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './station.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { StationRoutingModule } from './station-routing.module';
import { StationListComponent } from './station-list/station-list.component';
import { AddStationComponent } from './add-station/add-station.component';



@NgModule({
  declarations: [
    StationComponent,
    StationListComponent,
    AddStationComponent
  ],
  imports: [
    CommonModule,
    StationRoutingModule,
    MaterialModule
  ]
})
export class StationModule { }
