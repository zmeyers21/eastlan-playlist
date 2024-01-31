import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist.component';
import { PlayDetailsComponent } from './play-details/play-details.component';

const routes: Routes = [
  { path: ':stationId/:count', component: PlaylistComponent},
  { path: 'details/:playId', component: PlayDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }