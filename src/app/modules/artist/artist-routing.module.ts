import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

const routes: Routes = [
  { path: '', component: ArtistComponent},
  { path: ':artistId', component: ArtistDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }