import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg-movie',
  templateUrl: './reg-movie.component.html',
  styleUrls: ['./reg-movie.component.css']
})
export class RegMovieComponent implements OnInit {
  public movie : any
  constructor(private service : AdminService, private toastr : ToastrService) { 
    this.movie = {movieDate:'', movieName:'', movieRating:'', movieTime:'', seatsRemaining:'', theatre :{theatreId:''}}
  }

  ngOnInit(): void {
  }

  async RegisterMovie(movieRegisterForm:any){
    console.log("Movie details :"+this.movie);
    await this.service.registerMovie(this.movie).subscribe((result:any)=>{console.log("Movie added!");
    this.toastr.success("Movie registered!!", "Success");
    });
  }

}
