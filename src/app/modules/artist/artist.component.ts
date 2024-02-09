import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { tap, delay } from 'rxjs';
import { Artist } from 'src/app/shared/models/Artist.model';
import { ArtistService } from 'src/app/shared/services/artist.service';
import { SubSink } from 'subsink';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  subs = new SubSink();
  loading: boolean;
  
  dataSource!: MatTableDataSource<Artist>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  artists: Artist[] = [];
  displayedColumns: string[] = [
    'name'
  ];

  constructor(private service: ArtistService,
    public router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(artists?: Artist[]): void {
    this.loading = true;
    this.service.getAll().pipe(
      tap((artists) => console.log('artists: ', artists)),
      tap((artists) => this.artists = artists),
      tap(() => this.dataSource = new MatTableDataSource<Artist>(this.artists)),
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

  rowClick(artist: Artist): void {
    this.dialog.open(ArtistDetailsComponent, {
      height: '900px',
      width: '1200px',
      data: artist
    })
  }

  edit(artist: Artist): void {

  }

}
