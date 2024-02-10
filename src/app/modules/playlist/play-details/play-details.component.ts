import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Song } from 'src/app/shared/models/Playlist.model';
import { PlaylistService } from 'src/app/shared/services/playlist.service';

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.scss']
})
export class PlayDetailsComponent {

  constructor(private service: PlaylistService,
    private dialogRef: MatDialogRef<PlayDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public song: Song) { }

  close() {
    this.dialogRef.close();
  }

}
