import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  public customer1 : any;
  public customerId : any;
  public mobileno : any;
  public password : any;

  constructor(private router: Router, private service : CustomerService, private toastr: ToastrService, private activatedRoute : ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  loginUser(){  }

  async validateUser(loginForm : any) {
    this.mobileno = loginForm.custMobileno;
    this.password = loginForm.password;
    await this.service.getCustomerByMobileNo(this.mobileno, this.password).subscribe((result:any) => {this.customer1 = result;
      if(this.customer1 != null){
        this.service.setUserLoggedIn();
        this.toastr.success("Login successful!", "Success");
        localStorage.setItem('customer1',JSON.stringify(this.customer1));
        //this.router.navigate(['app-customer-login/app-bookings',JSON.stringify(this.customer1.customerId)]);
        this.router.navigate(['app-customer-login/app-book-ticket',JSON.stringify(this.customer1.customerId)]);
      }
      else{
        alert('Invalid Credentials');
      }
    });

    
  }

}
