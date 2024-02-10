import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { Station } from 'src/app/shared/models/Station.model';
import { StationService } from 'src/app/shared/services/station.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit, AfterViewInit {

  subs = new SubSink();
  loading: boolean;
  
  dataSource!: MatTableDataSource<Station>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  stations: Station[] = [];
  displayedColumns: string[] = [
    'name',
    'businessName',
    'address',
    'city',
    'state',
    'zip',
    'phone',
    'status',
    'actions'
  ];

  constructor(private service: StationService,
    public router: Router) { }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(): void {
    this.loading = true;
    this.service.getAll().pipe(
      tap((stations) => console.log('stations: ', stations)),
      tap((stations) => this.stations = stations),
      tap(() => this.dataSource = new MatTableDataSource<Station>(this.stations)),
      tap(() => this.loading = false),
      delay(1),
      tap(() => this.dataSource.paginator = this.paginator)
    ).subscribe();
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  rowClick(station: Station): void {
    this.router.navigate([`playlist/${station._id}/50`]);
  }

  edit(station: Station): void {
    console.log('station: ', station);
  }


}
