import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'stations', loadChildren: () => import('./modules/station/station.module').then(m => m.StationModule) },
  { path: 'playlist', loadChildren: () => import('./modules/playlist/playlist.module').then(m => m.PlaylistModule) },
  { path: 'artists', loadChildren: () => import('./modules/artist/artist.module').then(m => m.ArtistModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
