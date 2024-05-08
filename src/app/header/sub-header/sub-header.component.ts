import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api/menuitem";


@Component({
    selector: 'app-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrl: './sub-header.component.css'
})
export class SubHeaderComponent implements OnInit{
    items: MenuItem[] | undefined;
    ngOnInit() {
        this.items = [
            {
              label: "Tickets",
              routerLink: "tickets"
            },
            {
              label: "Categories",
              routerLink: 'categories'
            }
        ];
    }
}