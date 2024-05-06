import { NgModule, OnInit } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from "primeng/button";
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule,
        TableModule,
        ButtonModule,
        ChartModule,
        DropdownModule,
        FormsModule
    ],
})
export class DashboardModule { }