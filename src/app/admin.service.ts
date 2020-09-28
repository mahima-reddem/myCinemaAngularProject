import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public result : any;
  private isUserLogged : any

  constructor( private httpClient : HttpClient) {
    this.isUserLogged = false;
   }

   setUserLoggedIn():void{
    this.isUserLogged = true;
  }

  setUserLoggedOut():void{
    this.isUserLogged = false;
  }

  getUserLogged(): any{
    return this.isUserLogged;
  }

  registerCustomer(customer: any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerCustomer', customer);
  }

  registerTheatre(theatre: any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerTheatre', theatre);
  }

  registerMovie(movie: any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerMovie', movie);
  }

  registerTicket(ticket:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerTicket', ticket);
  }

  getAllTheatres(){
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllTheatres');
  }

  getAllMovies(){
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllMovies');
  }

  /*getMoviesByTheatreId(theatreId:any){
    this.result = theatreId;
    return this.httpClient.get('RESTAPI/webapi/myresource/getMoviesByTheatreId/' + this.result);
  }*/

  getAllCustomers(){
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllCustomers');
  }

  getAllTickets(){
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllTickets');
  }

  getTicketsByCustomerId(customerId : any){
    return this.httpClient.get('RESTAPI/webapi/myresource/getTicketsByCustomerId/' + customerId);
  }

  getCustomer(customerId : any){
    return this.httpClient.get('RESTAPI/webapi/myresource/getCustomer/' + customerId);
  }

  getTicket(ticketId : any){
    return this.httpClient.get('RESTAPI/webapi/myresource/getTicket/' + ticketId);
  }

  getMovie(movieId : any){
    return this.httpClient.get('RESTAPI/webapi/myresource/getMovie/' + movieId);
  }

  confirmPayment(ticketId : any){
    return this.httpClient.get('RESTAPI/webapi/myresource/confirmPayment/' + ticketId);
  }

  generateOTP(ticketId : any){
    return this.httpClient.get('RESTAPI/webapi/myresource/generateOTP/' + ticketId);
  }

  confirmCustomer(ticketId : any, otp : any){
    this.result = String(ticketId)+' '+String(otp);
    return this.httpClient.get('RESTAPI/webapi/myresource/confirmCustomer/' + this.result);
  }

  confirmBooking(ticketId:any){
    return this.httpClient.get('RESTAPI/webapi/myresource/confirmBooking/' + ticketId);
  }

  updateCustomer(customer : any){
    return this.httpClient.post('RESTAPI/webapi/myresource/updateCustomer', customer);
  }

  updateMovie(ticket : any){
    return this.httpClient.post('RESTAPI/webapi/myresource/updateMovie', ticket);
  }

  updateTicket(ticket : any){
    return this.httpClient.post('RESTAPI/webapi/myresource/updateTicket', ticket);
  }

  cancelTicketBooking(ticketId:any, customerId : any, cancelTicketCount:any){
    this.result = String(ticketId)+' '+String(customerId)+' '+String(cancelTicketCount);
    return this.httpClient.get('RESTAPI/webapi/myresource/cancelTicketBooking/' + this.result);
  }

}
