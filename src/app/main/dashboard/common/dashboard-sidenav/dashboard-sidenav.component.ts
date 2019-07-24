import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dashboard } from '../../../navigation/dashboard';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent implements OnInit {

  dashboard;
  mediaQuery;

  @Output() closeNavBar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

    this.mediaQuery = window.matchMedia('(max-width: 900px)');

    this.dashboard = Dashboard;
  }

  closeSideNav(): void{
    this.closeNavBar.emit({closeSideNav: true});
  }

  get self() { return this; }

  logout(): void {
    console.log('logout()');
  }

}
