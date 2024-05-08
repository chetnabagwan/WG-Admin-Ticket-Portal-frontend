import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


// const STAGES_AVAILABLE = ['raised', 'in_progress', 'review', 'closed']

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css'
})
export class NewCategoryComponent implements OnInit {

      @Input() visible: boolean;
      newCategory = false;
      newCategoryForm!: FormGroup;
      constructor(){
      }
      ngOnInit(){
        this.newCategoryForm = new FormGroup({
          name:new FormControl('', Validators.required),
          description : new FormControl('', Validators.required),
          stagesAllowed:new FormControl('',Validators.required),
          fields: new FormArray([])
        });
      }
      
        get dfields() {
          return this.newCategoryForm.get('fields') as FormArray;
        }
        addfieldControl() {
          (<FormArray>this.newCategoryForm.controls['fields']).push(new FormGroup({
            fieldName: new FormControl(''),
            checkbox: new FormControl(false),
            dropdown: new FormControl('')
          }));
          
        }
      onSubmit(){
        console.log(this.newCategoryForm);
        console.log(this.newCategoryForm.get('fields'));
      }
      onClose() {
        throw new Error('Method not implemented.');
        }
      
      removeField(i:number) {
        (<FormArray>this.newCategoryForm.controls['fields']).removeAt(i)
        }

}
