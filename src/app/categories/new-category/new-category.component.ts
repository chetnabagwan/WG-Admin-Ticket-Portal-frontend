import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


// const STAGES_AVAILABLE = ['raised', 'in_progress', 'review', 'closed']

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css'
})
export class NewCategoryComponent implements OnInit {

  @Input() visible: boolean;
  @Input() editMode: boolean;
  @Output() closeEvent = new EventEmitter<null>();
  @Input() categories: [];
  newCategoryForm!: FormGroup;

  constructor() {
  }
  stages:string[]=['InProgress','Raised','Closed','Review'];

  ngOnInit() {
    this.newCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      stages_allowed: new FormArray([new FormControl(false),new FormControl(false)]),
      fields: new FormArray([])
    });
  }

  get dfields() {
    return this.newCategoryForm.get('fields') as FormArray;
  }

  get stagesAllowed(): FormArray {
    return this.newCategoryForm.get('stages_allowed') as FormArray;
  }



  addfieldControl() {
    (<FormArray>this.newCategoryForm.get('fields')).push(new FormGroup({
      name: new FormControl(null),
      required: new FormControl(),
      field_type: new FormControl()
    }));

  }
  onSubmit() {
    console.log(this.newCategoryForm);
    
    this.onClose();

  }

  removeField(i: number) {
    (<FormArray>this.newCategoryForm.controls['fields']).removeAt(i)
  }
  onClose() {
    this.closeEvent.emit();
    this.editMode = false;

  }

}
