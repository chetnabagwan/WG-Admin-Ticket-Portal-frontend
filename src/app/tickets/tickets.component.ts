import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TicketsService } from "./tickets.service";
import { TicketInterface } from "./tickets.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { EmployeeService } from "../employee/employee.service";
import { EmployeeInterface } from "../employee/employee.interface";


@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit, OnDestroy{

    ticketSubscription: Subscription;
    employeeSubscription: Subscription;
    visible = false;
    ticket: TicketInterface;
    resolvers: EmployeeInterface[];
    ticketService = inject(TicketsService);
    employeeService = inject(EmployeeService);
    
    ngOnInit() {
        this.getAllResolvers();
    }

    showTicketDetail() {
        this.visible = true;
        this.getTicket();
    }

    getAllResolvers() {
        this.employeeSubscription=
            this.employeeService.getAllResolvers().subscribe({
                next: (data: EmployeeInterface[]) => {
                    this.resolvers = data;
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                }
            });
    }

    getTicket() {
        this.ticketSubscription=
            this.ticketService.getTicketDetail().subscribe({
                next: (data: TicketInterface) => {
                    this.ticket = data
                },
                error: (error: HttpErrorResponse) => {
                    //code to call message service
                    console.log(error);
                }
            });
    }

    closeDialog() {
        this.visible = false;
    }

    ngOnDestroy() {
        if(this.ticketSubscription)   this.ticketSubscription.unsubscribe();
        if(this.employeeSubscription)   this.employeeSubscription.unsubscribe();
    }
}