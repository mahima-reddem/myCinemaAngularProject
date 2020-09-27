import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  constructor() { }
  //private toastr: ToastrService,private service : AdminService, private router : Router

  ngOnInit(): void {
  }

  /*addTheatre():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-reg-theatre']);
  }

  addMovie():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-reg-movie']);
  }

  getAllTheatres():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-show-all-theatres']);
  }

  getAllMovies():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-show-all-movies']);
  }

  
  getAllCustomers():any{
    this.router.navigate(['app-admin-login/app-admin-homepage']);
  }


  logout():void{
    this.service.setUserLoggedOut();
    this.router.navigate(['/']);
  }*/


  
}
