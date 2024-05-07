import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../static'; 
import { CategoriesBrief } from '../../models/categories.model';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categories: CategoriesBrief[];
  filteredCategories: CategoriesBrief[];
  search: string = "";
  newCategory = false;

  ngOnInit(): void {
    this.categories = CATEGORIES;
    this.filteredCategories = CATEGORIES;
  }

  filterCategories(){
    if(this.search === ""){
      this.filteredCategories = this.categories;
      return;
    }
    this.filteredCategories = this.categories.filter(
      category=>category.categoryName.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  clearSearch(){
    this.search = "";
    this.filterCategories();
  }
}
