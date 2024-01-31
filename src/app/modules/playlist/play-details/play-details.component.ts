import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Song } from 'src/app/shared/models/Playlist.model';
import { PlaylistService } from 'src/app/shared/services/playlist.service';

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.scss']
})
export class PlayDetailsComponent implements OnInit {

  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  view: any = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Song';
  showYAxisLabel = true;
  yAxisLabel = 'Play Count';
  timeline = true;
  doughnut = true;
  colorScheme: Color = {
    name: 'Song Chart',
    selectable: false,
    group: ScaleType.Ordinal,
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  //pie
  showLabels = true;

  constructor(private service: PlaylistService,
    private dialogRef: MatDialogRef<PlayDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public song: Song) { }

  ngOnInit(): void {
    
  }

  close() {
    this.dialogRef.close();
  }

}
