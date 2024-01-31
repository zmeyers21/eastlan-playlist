import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';
import { Song } from '../models/Playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistUpdatedSource: Subject<Song[]> = new Subject<Song[]>();
  playlistUpdated$ = this.playlistUpdatedSource.asObservable();

  constructor(private apiService: ApiService) { }

  getPlaylist(stationId: string, count?: number): Observable<Song[]> {
    return this.apiService.getPlaylist(stationId, count || 1000);
  }

}
