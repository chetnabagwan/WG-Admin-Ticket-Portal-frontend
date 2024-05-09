import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @Input() ticketdialogvisible:boolean;
  @Output() closeEvent = new EventEmitter<null>();
  raiseTicketForm:FormGroup;

  ngOnInit() {
    this.raiseTicketForm = new FormGroup({
      priority: new FormControl(null),
      category: new FormControl(''),
      fields: new FormArray([])
    })}

  onClose() {
    this.closeEvent.emit();
  }
}
