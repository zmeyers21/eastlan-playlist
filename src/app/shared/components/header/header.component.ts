import { Component } from '@angular/core';
import { Tab } from '../../models/Tab.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  subs = new SubSink();
  tabs$: Tab[] = [];
  activeTab: string = '';

  constructor(public router: Router,
    private route: ActivatedRoute) {
      
      this.router.events.subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            this.activeTab = this.router.url.replace('/', '');
          }
        }
      );

    this.tabs$ = [
      { title: 'home', route: 'dashboard' },
      { title: 'stations', route: 'stations' }
    ]
  }

  isActiveTab(tab: Tab): boolean {
    return this.activeTab == tab.route;
  }

  navigate(tab: Tab): void {
    this.router.navigate([tab.route]);
  }

}
