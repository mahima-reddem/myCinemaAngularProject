import { Component, OnInit } from '@angular/core';
//import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  public customerId:any;
  public output:any;
  //public movie : any;
  public ticket : any;
  public ticket1 : any;
  public movies : any;
  public retreiveData : any;
  public customer1 : any;
  

  constructor(private service : AdminService, private activatedRoute: ActivatedRoute, private router : Router, private toastr : ToastrService) { 
    
    this.customerId = JSON.parse(activatedRoute.snapshot.params["custId"]);
    
    //this.service.getCustomer(this.customerId).subscribe((result:any) => {this.output = result;console.log(result);});
    this.ticket = {ticketId:'', noofTickets : '', customer :{customerId: '', custName:'', custEmail:'', custMobileno:'', otp:''}, movie :{movieId:'', movieDate:'', movieName:'', movieRating:'', movieTime:'', seatsRemaining:'', theatre :{theatreId:'',theatreName:'', theatreAddress:''}}}
    //, movieDate:'', movieName:'', movieRating:'', movieTime:'', seatsRemaining:'', theatre :{theatreId:'', theatreName:'', theatreAddress:''}}}
    
    
    
  }
  

  ngOnInit(): void {
    this.service.getAllMovies().subscribe((result:any) => {this.movies = result;console.log(result)})
    
    this.retreiveData = localStorage.getItem('customer1');
    this.customer1 = JSON.parse(this.retreiveData);
    console.log("Customer Details in booking page");
    console.log(this.customer1);
  }

  loginUser():void{ }

  getTicketsByCustomerId():void{
    this.router.navigate(['app-customer-login/app-book-ticket/app-bookings',JSON.stringify(this.customer1.customerId)]);
  }

  logout():void{
    this.router.navigate(['/']);
  }


  RegisterTicket(TicketForm:any){
    //this.ticket.ticketId = 0;
    //this.ticket.customer.customerId = this.customerId;
    this.ticket.customer = this.customer1;
    console.log("Inside book ts : ",this.ticket);
    this.service.registerTicket(this.ticket).subscribe((result:any)=>{ this.ticket1 = result;
    localStorage.setItem('ticket1',JSON.stringify(this.ticket1));
    
    this.router.navigate(['app-customer-login/app-book-ticket/app-payment',JSON.stringify(this.ticket1.ticketId)]);

  });
  console.log(this.ticket1);
}
 

  


}
