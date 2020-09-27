import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private isUserLogged:any;
  public result : any;
  constructor(private httpClient : HttpClient) {
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

  getAllMovies(){
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllMovies');
  }

  getCustomerByMobileNo(custMobileno : any, password : any){
    this.result = custMobileno + ' ' + password;
    console.log(this.result);
    return this.httpClient.get('RESTAPI/webapi/myresource/getCustomerByMobileNo/' + this.result);
  }

  bookTicket(did: any, tid : any){
    this.result = did + ' ' + tid;
    return this.httpClient.get('RESTAPI/webapi/myresource/bookTicket/' + this.result);
  }

  /*registerTicket(ticket:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerTicket', ticket);
  }*/

  
}
