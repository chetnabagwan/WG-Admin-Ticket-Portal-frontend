import { NgModule } from "@angular/core";
import { TicketsComponent } from "./tickets.component";
import { TicketsRoutingModule } from "./tickets-routing.module";
import { TicketDetailComponent } from "./ticket-detail/ticket-detail.component";
import { SharedModule } from "../shared/shared.module";

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@NgModule({
    declarations: [
        TicketsComponent,
        TicketDetailComponent,
        NewTicketComponent
    ],
    imports: [
        TicketsRoutingModule,
        SharedModule,
        DialogModule,
        ButtonModule,
        SplitButtonModule,
        DividerModule,
        TimelineModule,
        TableModule,
        ButtonModule,
        ChartModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TicketsModule { }