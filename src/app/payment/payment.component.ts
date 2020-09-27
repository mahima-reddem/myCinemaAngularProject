import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public ticketId:any;
  public output:any;
  public retreiveData: any;
  public customer1 : any;
  public retreiveData1 : any;
  public ticket1 : any;

  constructor(private router : Router,private service : AdminService,private activatedRoute: ActivatedRoute, private toastr: ToastrService) { 
    this.ticketId = JSON.parse(activatedRoute.snapshot.params["ticketId"]);
    this.service.confirmPayment(this.ticketId).subscribe((result:any) => {this.output = result;console.log(result);});
  }

  ngOnInit(): void {
    this.retreiveData = localStorage.getItem('customer1');
    this.customer1 = JSON.parse(this.retreiveData);
    console.log("Customer Details in payment page");
    console.log(this.customer1);
  
    this.retreiveData1 = localStorage.getItem('ticket1');
    this.ticket1 = JSON.parse(this.retreiveData1);
    console.log("Movie Details in payment page");
    console.log(this.ticket1);
  }

  confirm():any{
    this.router.navigate(['app-customer-login/app-book-ticket/app-payment/app-otp-confirmation',JSON.stringify(this.ticketId)]);

  }

}
