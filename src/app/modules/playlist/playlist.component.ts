import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { Song } from 'src/app/shared/models/Playlist.model';
import { PlaylistService } from 'src/app/shared/services/playlist.service';
import { SubSink } from 'subsink';
import { PlayDetailsComponent } from './play-details/play-details.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, AfterViewInit {

  subs = new SubSink();
  loading: boolean;

  dataSource!: MatTableDataSource<Song>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  songs: Song[] = [];
  displayedColumns: string[] = [
    'artist',
    'song',
    'dateTimeEntered',
    'actions'
  ];

  constructor(private route: ActivatedRoute,
    private service: PlaylistService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    const stationId = this.route.snapshot.paramMap.get('stationId') ?? '';
    const count = this.route.snapshot.paramMap.get('count') ?? '50';
    this.loadPlaylist(stationId, count);
  }

  loadPlaylist(stationId: string, count: string): void {
    if (stationId) {
      this.loading = true;
      // TODO: allow user to select how many songs they want to view
      this.service.getPlaylist(stationId).pipe(
        tap((songs) => console.log('songs: ', songs)),
        tap((songs) => this.songs = songs),
        tap(() => this.dataSource = new MatTableDataSource<Song>(this.songs)),
        tap(() => this.loading = false),
        delay(1),
        tap(() => this.dataSource.paginator = this.paginator)
      ).subscribe();
    } 
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  edit(song: Song): void {
    console.log('edit song click: ', song);
  }

  rowClick(song: Song): void {
    console.log('song click: ', song);
    this.dialog.open(PlayDetailsComponent, {
      height: '90%',
      width: '90%',
      data: song
    })
  }

  getDateAsString(date: string): string {
    return new Date(date).toLocaleString();
  }

}
