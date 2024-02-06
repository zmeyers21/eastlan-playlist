import { Injectable } from '@angular/core';
import { ChartData, ChartDataMulti } from '../models/ChartData.model';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private helper: HelperService) { }

  get top40Songs(): ChartData[] {
    const songs: ChartData[] = [];
    for (let i = 1; i < 41; i++) {
      songs.push({ name: `Song ${i}`, value: this.helper.randomId(200) })
    }
    return songs.sort((a, b) => this.helper.compare(b, a, 'value'));
  }

  get weeklyPlays(): ChartDataMulti[] {
    return [
      {
        name: 'plays',
        series: [
          {name: '02-05-2023', value: 19},
          {name: '02-12-2023', value: 20},
          {name: '02-19-2023', value: 24},
          {name: '02-26-2023', value: 35},
          {name: '03-05-2023', value: 38},
          {name: '03-12-2023', value: 37},
          {name: '03-19-2023', value: 36},
          {name: '03-26-2023', value: 33},
          {name: '04-02-2023', value: 47},
          {name: '04-09-2023', value: 58},
          {name: '04-16-2023', value: 69},
          {name: '04-23-2023', value: 124},
          {name: '04-30-2023', value: 126},
          {name: '05-07-2023', value: 130},
          {name: '05-14-2023', value: 128},
          {name: '05-21-2023', value: 124},
          {name: '05-28-2023', value: 119},
          {name: '06-04-2023', value: 119},
          {name: '06-11-2023', value: 117},
          {name: '06-18-2023', value: 98},
          {name: '06-25-2023', value: 82},
          {name: '07-02-2023', value: 73},
          {name: '07-09-2023', value: 64},
          {name: '07-16-2023', value: 51},
          {name: '07-23-2023', value: 48},
          {name: '07-30-2023', value: 46},
          {name: '08-06-2023', value: 45},
          {name: '08-13-2023', value: 48},
          {name: '08-20-2023', value: 45},
          {name: '09-03-2023', value: 56},
          {name: '09-10-2023', value: 58},
          {name: '09-17-2023', value: 59},
          {name: '09-24-2023', value: 69},
          {name: '10-01-2023', value: 89},
          {name: '10-08-2023', value: 98},
          {name: '10-15-2023', value: 132},
          {name: '10-22-2023', value: 144},
          {name: '10-29-2023', value: 146},
          {name: '11-05-2023', value: 149},
          {name: '11-12-2023', value: 167},
          {name: '11-19-2023', value: 178},
          {name: '11-26-2023', value: 185},
          {name: '12-03-2023', value: 194},
          {name: '12-10-2023', value: 191},
          {name: '12-17-2023', value: 187},
          {name: '12-24-2023', value: 185},
          {name: '12-31-2023', value: 177},
          {name: '01-07-2024', value: 174},
          {name: '01-14-2024', value: 168},
          {name: '01-21-2024', value: 165},
          {name: '01-28-2024', value: 159}
        ]
      }
    ]
  }

  get weeklyTimeSlotSongs(): ChartDataMulti[] {
    return [
      {name: '12/24-12/30', series: [{ name: '6am-10am', value: 115 }, { name: '10am-5pm', value: 74 }, { name: '5pm-10pm', value: 156 }, { name: '10pm-6am', value: 37 }]},
      {name: '12/31-01/06', series: [{ name: '6am-10am', value: 100 }, { name: '10am-5pm', value: 81 }, { name: '5pm-10pm', value: 167 }, { name: '10pm-6am', value: 45 }]},
      {name: '01/07-01/13', series: [{ name: '6am-10am', value: 98 }, { name: '10am-5pm', value: 96 }, { name: '5pm-10pm', value: 189 }, { name: '10pm-6am', value: 53 }]},
      {name: '01/14-01/21', series: [{ name: '6am-10am', value: 112 }, { name: '10am-5pm', value: 82 }, { name: '5pm-10pm', value: 176 }, { name: '10pm-6am', value: 67 }]},
      {name: '01/21-01/28', series: [{ name: '6am-10am', value: 126 }, { name: '10am-5pm', value: 78 }, { name: '5pm-10pm', value: 162 }, { name: '10pm-6am', value: 31 }]},
      {name: '01/28-02/03', series: [{ name: '6am-10am', value: 137 }, { name: '10am-5pm', value: 81 }, { name: '5pm-10pm', value: 181 }, { name: '10pm-6am', value: 26 }]}
    ]
  }

}
