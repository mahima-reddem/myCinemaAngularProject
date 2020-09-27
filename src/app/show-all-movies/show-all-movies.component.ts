import { Component, OnInit } from '@angular/core';
//import { CustomerService } from '../customer.service';
import {AdminService } from '../admin.service';
import {ActivatedRoute } from "@angular/router";
import { Router} from '@angular/router';

@Component({
  selector: 'app-show-all-movies',
  templateUrl: './show-all-movies.component.html',
  styleUrls: ['./show-all-movies.component.css']
})
export class ShowAllMoviesComponent implements OnInit {

  public theatre : any;
  public movies : any;
  //public customer : any;

  constructor(private service : AdminService, private activatedRoute: ActivatedRoute, private router: Router) {
    //this.theatreId = JSON.parse(activatedRoute.snapshot.params["Id"]);
    //this.service.getMoviesByTheatreId(this.theatreId).subscribe((result:any) => {this.movies = result;console.log(result)});
    
   }

  ngOnInit(): void {

    this.service.getAllMovies().subscribe((result:any) => {this.movies = result;console.log(result)})
    //this.service1.getAllMovies().subscribe((result:any) => {this.movies = result; console.log(result)})
    
  }

}
