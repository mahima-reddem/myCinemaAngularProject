import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-otp-confirmation',
  templateUrl: './otp-confirmation.component.html',
  styleUrls: ['./otp-confirmation.component.css']
})
export class OtpConfirmationComponent implements OnInit {
  public otp:any;
  public ticketId : any;
  public retreiveData : any;
  public customer1 : any;
  public retreiveData1 : any;
  public ticket1 : any;
  
  constructor(private router : Router,private activatedRoute: ActivatedRoute,private service : AdminService) {
    this.ticketId = JSON.parse(activatedRoute.snapshot.params["ticketId"]);
    this.service.generateOTP(this.ticketId).subscribe((result:any) => {console.log(result); this.otp = result;});
  
   }

  ngOnInit(): void {
    
  }

  validate():any{}

  async confirm(otpForm : any){
    if(otpForm.otp != this.otp){
      alert("OTP did not match!")
    }
    else{
      this.retreiveData = localStorage.getItem('customer1');
      this.customer1 = JSON.parse(this.retreiveData);
      this.customer1.otp = this.otp;
      console.log("Customer Details in otp confirmation page");
      console.log(this.customer1);
      this.service.updateCustomer(this.customer1).subscribe((result:any)=>console.log(result));

      this.retreiveData1 = localStorage.getItem('ticket1');
      this.ticket1 = JSON.parse(this.retreiveData1);
      this.ticket1.movie.seatsRemaining = this.ticket1.movie.seatsRemaining - this.ticket1.noofTickets;
      console.log("Movie Details in otp confirmation page");
      console.log(this.ticket1);
      this.service.updateMovie(this.ticket1).subscribe((result:any)=>console.log(result));
      //await this.service.confirmCustomer(this.ticketId, this.otp).subscribe((result:any)=>console.log(result));
      alert("Your ticket is booked!");
      this.router.navigate(['app-customer-login/app-book-ticket/app-payment/app-otp-confirmation/app-confirm-booking',JSON.stringify(this.ticketId)]);
    }

    
  }

}
