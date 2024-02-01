import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/Tab.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { tap } from 'rxjs';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subs = new SubSink();
  tabs$: Tab[] = [];

  constructor(public router: Router,
    private tabService: TabService) {
    
  }

  ngOnInit(): void {
    this.tabs$ = [
      { title: 'home', route: 'dashboard' },
      { title: 'stations', route: 'stations' },
      { title: 'artists', route: 'artists' }
    ];
    this.navigate(this.tabs$[0]);
  }

  isActiveTab(tab: Tab): boolean {
    return this.tabService.activeTab == tab;
  }

  navigate(tab: Tab): void {
    this.tabService.activeTab = tab;
    this.router.navigate([tab.route]);
  }

}
