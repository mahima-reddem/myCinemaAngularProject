import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg-theatre',
  templateUrl: './reg-theatre.component.html',
  styleUrls: ['./reg-theatre.component.css']
})
export class RegTheatreComponent implements OnInit {

  public theatre : any;
  constructor(private service : AdminService, private toastr : ToastrService) {
    this.theatre = {theatreName:'', theatreAddress:''}
   }

  ngOnInit(): void {
  }


  async RegisterTheatre(registerForm:any){
    await this.service.registerTheatre(this.theatre).subscribe((result:any)=>{console.log("Theatre added!");
    this.toastr.success("Theatre registered!!", "Success");
  });
}

}
