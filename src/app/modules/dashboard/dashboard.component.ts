import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataMulti } from 'src/app/shared/models/ChartData.model';
import { ChartService } from 'src/app/shared/services/chart.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: any = [];
  top40Songs: ChartData[] = [];
  weeklyPlays: ChartDataMulti[] = [];
  weeklyTimeSlotSongs: ChartDataMulti[] = [];
  // title = 'Top 40 Songs (01/01/2024-01/31/2024)';
  // title = 'Taylor Swift Total Weekly Plays';
  title = 'Jelly Roll Plays by Time Block';

  constructor(private service: ChartService) { }

  ngOnInit(): void {
    this.top40Songs = this.service.top40Songs;
    this.weeklyPlays = this.service.weeklyPlays;
    this.weeklyTimeSlotSongs = this.service.weeklyTimeSlotSongs;
  }
  
}
