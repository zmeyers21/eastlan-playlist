import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Station } from '../models/Station.model';
import { Song } from '../models/Playlist.model';
import { Artist } from '../models/Artist.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Station Methods
  getAllStations(): Observable<Station[]> {
    const url = `${this.baseUrl}/stations`;
    return this.get(url);
  }

  getStation(id: string): Observable<Station> {
    const url = `${this.baseUrl}/stations/${id}`;
    return this.get(url);
  }

  addStation(station: Station): Observable<Station> {
    const url = `${this.baseUrl}/stations`;
    return this.post(url, station);
  }

  // Playlist Methods
  getPlaylist(stationId: string, count: string): Observable<Song[]> {
    const url = `${this.baseUrl}/playlist/${stationId}/${count}`;
    return this.get(url);
  }

  // Artist Methods
  getAllArtists(): Observable<Artist[]> {
    const url = `${this.baseUrl}/artists`;
    return this.get(url);
  }

  getArtist(artistId: string): Observable<Artist> {
    const url = `${this.baseUrl}/artists/${artistId}`;
    return this.get(url);
  }

  // Generic methods
  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  post(url: string, payload: any,  options?: any): Observable<any> {
    return this.http.post(url, payload, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  put(url: string, payload: any,  options?: any): Observable<any> {
    return this.http.put(url, payload, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  // Handle http request errors
  handleHttpError(err: HttpErrorResponse): Observable<any> {
    if (err.status == 401 || err.status == 0) {
      // Unauthorized
    }
    return throwError(err);
  }

}
