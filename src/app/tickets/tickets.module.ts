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

@NgModule({
    declarations: [
        TicketsComponent,
        TicketDetailComponent
    ],
    imports: [
        TicketsRoutingModule,
        SharedModule,
        DialogModule,
        ButtonModule,
        SplitButtonModule,
        DividerModule,
        TimelineModule
    ]
})
export class TicketsModule { }