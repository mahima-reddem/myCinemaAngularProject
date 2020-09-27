import { Component, OnInit } from '@angular/core';
import {AdminService } from '../admin.service';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-tickets',
  templateUrl: './show-all-tickets.component.html',
  styleUrls: ['./show-all-tickets.component.css']
})
export class ShowAllTicketsComponent implements OnInit {
  public ticket : any;

  constructor(private router : Router, private service : AdminService, private activatedRoute: ActivatedRoute) {
    this.ticket = {ticketId:''}
   }

  ngOnInit(): void {
    this.service.getAllTickets().subscribe((result:any) => {this.ticket = result;console.log(result)})
  }

}
