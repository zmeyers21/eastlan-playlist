import { Component } from '@angular/core';
import { NavCard } from 'src/app/shared/models/NavCard.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  cards: NavCard[] = [
    { title: 'Top 40 Songs', route: 'top-40-songs' },
    { title: 'Top 40 Artists', route: 'top-40-artists' }
  ]

  cardClick(card: NavCard): void {
    console.log('card: ', card);
  }

}
