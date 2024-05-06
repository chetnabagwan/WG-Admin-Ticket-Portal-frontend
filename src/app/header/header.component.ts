import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api/menuitem";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
    dropdownOptions: MenuItem[] | undefined;
    role: string | undefined;
    name: string | undefined;
    
    ngOnInit() {

        this.dropdownOptions = [
            {
              label: "View Profile",
              icon: "pi pi-user",
              command: () => {
              }
            },
            {
              label: "Change Password",
              icon: "pi pi-key",
              command: () => {
              }
            },
            {
              label: "Logout",
              icon: "pi pi-sign-out",
              command: () => {
              }
            }
        ];
        this.role = "Admin";
        this.name = "Dharmendra Singh";
    }
}