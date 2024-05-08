import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketsComponent } from "./tickets.component";

const ROUTES: Routes = [
    {
        path: '',
        component: TicketsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class TicketsRoutingModule { } 