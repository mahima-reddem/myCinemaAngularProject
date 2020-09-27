import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private service:AdminService) { }

  ngOnInit(): void {
  }

  validateUser(logoutForm : any){

    this.service.setUserLoggedOut();
    this.router.navigate(['app-home-page']);
    
  }


}
