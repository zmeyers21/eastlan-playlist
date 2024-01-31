import { Injectable } from '@angular/core';
import { Station } from '../models/Station.model';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private stationsUpdatedSource: Subject<Station[]> = new Subject<Station[]>();
  stationsUpdated$ = this.stationsUpdatedSource.asObservable();

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Station[]> {
    return this.apiService.getAllStations();
  }

  get(id: string): Observable<Station> {
    return this.apiService.getStation(id);
  }

  add(station: Station): Observable<Station> {
    return this.apiService.addStation(station);
  }

}
