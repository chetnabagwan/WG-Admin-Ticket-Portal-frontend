import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';


// const STAGES_AVAILABLE = ['raised', 'in_progress', 'review', 'closed']

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css'
})
export class NewCategoryComponent implements OnInit {
  newCategoryForm: NgForm;
  STAGES_AVAILABLE = ['raised', 'in_progress', 'review', 'closed']

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.newCategoryForm = this.fb.group({
      name: this.fb.control(""),
      description: this.fb.control(""),
      stagesAllowed: this.fb.array([
        this.fb.control(true),
        this.fb.control(false),
        this.fb.control(false),
        this.fb.control(true),
      ])

    })
  }

}
