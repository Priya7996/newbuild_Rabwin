import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';

@Component({
  selector: 'app-rabwin-dashboard',
  templateUrl: './rabwin-dashboard.component.html',
  styleUrls: ['./rabwin-dashboard.component.scss']
})
export class RabwinDashboardComponent implements OnInit {

  constructor(private nav:NavbarService) {
    this.nav.show();
  }

  ngOnInit() { 
  }

}
