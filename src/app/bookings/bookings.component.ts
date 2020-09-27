import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  public ticketId : any;
  public count : any;
  public output :any;
  public ticket : any;
  public retreiveData :any;
  
  constructor(private service : AdminService, private activatedRoute : ActivatedRoute) {
    //this.customerId = JSON.parse(activatedRoute.snapshot.params["customerId"]);
    //this.service.getTicketsByCustomerId(this.customerId).subscribe((result:any) => {this.ticket = result;console.log(result)});
   }


  ngOnInit(): void {
  }

  validate():any{}

  async confirm(cancelForm : any){
    this.ticketId = cancelForm.ticketId;
    this.count = cancelForm.cancelTicketCount;  

    
    await this.service.cancelTicketBooking(this.ticketId, this.count).subscribe((result:any) => {this.output = result;
    if(this.output == 1){
      this.service.getTicket(this.ticketId).subscribe((result:any)=> {this.ticket = result});
    localStorage.setItem('ticket',JSON.stringify(this.ticket));
    this.retreiveData = localStorage.getItem('ticket');
    this.ticket = JSON.parse(this.retreiveData);
    this.ticket.noofTickets = this.ticket.noofTickets - this.count;
    this.ticket.movie.seatsRemaining = this.ticket.movie.seatsRemaining - (-(this.count));
    console.log("Ticket details in bookings page...")
    console.log(this.ticket);
    this.service.updateTicket(this.ticket).subscribe((result:any)=>console.log(result));
    this.service.updateMovie(this.ticket).subscribe((result:any)=>console.log(result));

      alert("Your request for cancellation is approved!");

    }
    else{
      alert("Sorry, you cannot cancel your booking!");
    }
  });
  }

}
