import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistDetailsComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ArtistModule { }
