import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private nav: NavbarService) {
    this.nav.show()
   }
  ngOnInit() {
  }

}
