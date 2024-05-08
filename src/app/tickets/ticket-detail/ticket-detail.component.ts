import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from "@angular/core";
import { HistoryInterface, TicketInterface } from "../tickets.interface";
import { MenuItem } from "primeng/api/menuitem";
import { EmployeeInterface } from "../../employee/employee.interface";

@Component({
    selector: 'app-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrl: './ticket-detail.component.css'
})
export class TicketDetailComponent {
    
    @Input() visible: boolean;
    @Input() ticket: TicketInterface;
    @Input() resolvers: EmployeeInterface[];
    @Output() closeEvent = new EventEmitter<null>();
    items: MenuItem[];
    resolversList: MenuItem[] = [];
    editMode: boolean = false;
    onMouseReporter: boolean = false;
    onMouseAssignee: boolean = false;
    events: HistoryInterface[] = [];

    ngOnInit() {
        console.log(this.ticket);
        console.log(this.resolvers);
        this.items = [
            {
                label: 'Critical',
                command: () => this.ticket.priority = 'critical'
            },
            {
                label: 'Important',
                command: () => this.ticket.priority = 'important'
            },
            {
                label: 'Routine',
                command: () => this.ticket.priority = 'routine'
            }
        ]

        
        for (let item of this.resolvers) {
            this.resolversList.push({
                label : item.full_name,
                command: () => this.ticket.related_people.assignee = item
            })
        }
    }

    changeStage(event) {
        this.ticket.stage = event.target.innerHTML;
    }

    onEdit() {
        this.editMode = true;
    }

    onClose() {
        this.closeEvent.emit();
        this.editMode = false;
    }

}