import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { RegTheatreComponent } from './reg-theatre/reg-theatre.component';
import { RegMovieComponent } from './reg-movie/reg-movie.component';
import { ShowAllTheatresComponent } from './show-all-theatres/show-all-theatres.component';
import { ShowAllMoviesComponent } from './show-all-movies/show-all-movies.component';
import { LogoutComponent } from './logout/logout.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmPaymentPipe } from './confirm-payment.pipe';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminService } from './admin.service';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { OtpConfirmationComponent } from './otp-confirmation/otp-confirmation.component';
import { ShowAllTicketsComponent } from './show-all-tickets/show-all-tickets.component';
import { BookingsComponent } from './bookings/bookings.component';


const appRoot: Routes = [  {path:'', component : HomePageComponent},
                           {path:'app-homepage', component : HomePageComponent},
                           {path:'app-admin-login', component : AdminLoginComponent},
                           {path:'app-admin-login/app-admin-homepage', component:AdminHomepageComponent},
                           {path:'app-admin-login/app-admin-homepage/app-reg-theatre', component:RegTheatreComponent},
                           {path:'app-admin-login/app-admin-homepage/app-reg-movie', component:RegMovieComponent},
                           {path:'app-admin-login/app-admin-homepage/app-show-all-theatres', component:ShowAllTheatresComponent},
                           {path:'app-admin-login/app-admin-homepage/app-show-all-tickets', component:ShowAllTicketsComponent},
                           //{path:'app-admin-login/app-admin-homepage/app-show-all-theatres/app-admin-homepage', component:AdminHomepageComponent},
                           {path:'app-admin-login/app-admin-homepage/app-show-all-movies', component:ShowAllMoviesComponent},
                           //{path:'app-admin-login/app-admin-homepage/app-show-all-movies/app-admin-homepage', component:AdminHomepageComponent},
                           {path:'logout', component:HomePageComponent},
                           {path:'', component : HomePageComponent},
                           {path:'app-homepage', component : HomePageComponent},
                           {path:'app-customer-register', component : CustomerRegisterComponent}, 
                           {path:'app-customer-register/app-customer-login', component : CustomerLoginComponent},
                           {path:'app-customer-login', component : CustomerLoginComponent},
                           {path:'app-customer-login/app-book-ticket/:custId', component : BookTicketComponent},
                           {path:'app-customer-login/app-book-ticket/app-bookings/:customerId', component : BookingsComponent},
                           {path:'app-customer-login/app-book-ticket/app-payment/:ticketId', component : PaymentComponent},
                           {path:'app-customer-login/app-book-ticket/app-payment/app-otp-confirmation/:ticketId', component : OtpConfirmationComponent},
                           {path:'app-customer-login/app-book-ticket/app-payment/app-otp-confirmation/app-confirm-booking/:ticketId', component : ConfirmBookingComponent},
                          
                           
                           
                           {path:'logout', component:HomePageComponent}
                           

];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    AdminHomepageComponent,
    CustomerRegisterComponent,
    RegTheatreComponent,
    RegMovieComponent,
    ShowAllTheatresComponent,
    ShowAllMoviesComponent,
    LogoutComponent,
    BookTicketComponent,
    PaymentComponent,
    CustomerLoginComponent,
    ConfirmBookingComponent,
    OtpConfirmationComponent,
    ShowAllTicketsComponent,
    BookingsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoot),
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
