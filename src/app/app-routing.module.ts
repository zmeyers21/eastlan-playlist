import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'stations', loadChildren: () => import('./modules/station/station.module').then(m => m.StationModule), canActivate: [AuthGuard] },
  { path: 'playlist', loadChildren: () => import('./modules/playlist/playlist.module').then(m => m.PlaylistModule), canActivate: [AuthGuard] },
  { path: 'artists', loadChildren: () => import('./modules/artist/artist.module').then(m => m.ArtistModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
