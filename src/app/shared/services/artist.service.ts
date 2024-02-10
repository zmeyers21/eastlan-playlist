import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Artist } from '../models/Artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Artist[]> {
    return this.apiService.getAllArtists();
  }

  get(artistId: string): Observable<Artist> {
    return this.apiService.getArtist(artistId);
  }
}

export const totalPlays = [
  { name: 'Song 1', value: 123 },
  { name: 'Song 2', value: 87 },
  { name: 'Song 3', value: 34 },
  { name: 'Song 4', value: 56 },
  { name: 'Song 5', value: 101 },
  { name: 'Song 6', value: 19 },
  { name: 'Song 7', value: 59 },
  { name: 'Song 8', value: 64 },
  { name: 'Song 9', value: 40 },
  { name: 'Song 10', value: 48 },
  { name: 'Song 11', value: 13 },
  { name: 'Song 12', value: 27 },
  { name: 'Song 13', value: 61 },
  { name: 'Song 15', value: 27 }
];
