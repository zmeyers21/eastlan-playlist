import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { PlaylistComponent } from './playlist.component';
import { PlayDetailsComponent } from './play-details/play-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    PlaylistComponent,
    PlayDetailsComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MaterialModule,
    NgxChartsModule
  ]
})
export class PlaylistModule { }
