import { Component, OnInit } from '@angular/core';
import { NavCard } from 'src/app/shared/models/NavCard.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  cards: NavCard[] = [
    { title: 'Top 40 Songs', route: 'top-40-songs' },
    { title: 'Top 40 Artists', route: 'top-40-artists' }
  ]

  ngOnInit(): void {

  }

  cardClick(card: NavCard): void {
    
  }

}
