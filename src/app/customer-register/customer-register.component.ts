import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
declare function validate():any;

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  public customer : any;
  public customer1 : any;
  public x : any;

  constructor(private service : AdminService, private activatedRouted : ActivatedRoute,  private toastr : ToastrService, private router : Router) { 
    this.customer = {customerId:'', custName:'', custEmail:'', custMobileno:'', otp:'', password:''}
  }

  ngOnInit(): void {
  }

  loginUser(){ }  
 

  async validateUser(registerForm : any){  

    this.x = validate();
    if(this.x){
      this.customer.otp = 0;

      await this.service.registerCustomer(this.customer).subscribe((result:any)=>{ this.customer1 = result;
      
      this.router.navigate(['app-customer-register/app-customer-login']);
    //,JSON.stringify(this.customer1.customerId)]);
       });
  //console.log(this.customer1);
    }
  
 
}


}
