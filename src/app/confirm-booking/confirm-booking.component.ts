import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  public ticketId : any;
  public output : any;

  constructor(private router : Router,private service : AdminService,private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    this.ticketId = JSON.parse(activatedRoute.snapshot.params["ticketId"]);
    this.service.confirmBooking(this.ticketId).subscribe((result:any) => {this.output = result;console.log(result);});
   }

  ngOnInit(): void {
  }

}
