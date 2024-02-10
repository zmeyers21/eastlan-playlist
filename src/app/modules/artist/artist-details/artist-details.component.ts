import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Artist } from 'src/app/shared/models/Artist.model';
import { ArtistService, totalPlays } from 'src/app/shared/services/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent {

  constructor(private service: ArtistService,
    private dialogRef: MatDialogRef<ArtistDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public artist: Artist) { }

  get totalPlays() {
    return totalPlays;
  }

  close() {
    this.dialogRef.close();
  }

}
