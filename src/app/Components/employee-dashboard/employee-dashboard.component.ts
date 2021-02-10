import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private nav: NavbarService) {
    this.nav.show()
   }

  ngOnInit() {
  }

}
