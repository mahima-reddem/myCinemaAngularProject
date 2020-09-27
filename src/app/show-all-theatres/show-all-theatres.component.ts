import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {AdminService } from '../admin.service';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-all-theatres',
  templateUrl: './show-all-theatres.component.html',
  styleUrls: ['./show-all-theatres.component.css']
})
export class ShowAllTheatresComponent implements OnInit {

  public theatre : any;
  movies:any;
  //public customer : any;

  constructor(private router : Router, private service : AdminService, private activatedRoute: ActivatedRoute) {
    this.theatre = {theatreId : ''}
      
   }

  ngOnInit(): void {
    this.service.getAllTheatres().subscribe((result:any) => {this.theatre = result;console.log(result)})
    //this.service1.getAllTheatres().subscribe((result:any) => {this.theatre = result; console.log(result)})
    //this.router.navigate(['app-show-all-theatres/app-show-all-movies']);
    
  }
  



  

 
 
    
    

  
    
 

}
