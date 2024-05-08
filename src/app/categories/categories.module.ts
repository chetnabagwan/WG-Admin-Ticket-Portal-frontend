import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NewCategoryComponent } from './new-category/new-category.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    NewCategoryComponent,
  
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule
  ]
})
export class CategoriesModule { }
