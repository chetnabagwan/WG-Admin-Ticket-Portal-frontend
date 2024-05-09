import { Injectable } from '@angular/core';
import { CategoryInterface } from "./categories.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  Categories: CategoryInterface[] = [
    {
      categoryName: "Food-And-Beverages",
      created_at: new Date().toISOString(),
      description: "Tickets related to food and beverges in office",
      stagesAllowed: ['inprogress'],
      fields: [{
          name: "detail",
          required: true,
          field_type: "text"
      }]
    },
    {
      categoryName: "Electrical",
      created_at: new Date().toISOString(),
      description: "Tickets related to electrical issues in office",
      stagesAllowed: ['inprogress','review'],
      fields: [{
          name: "devices",
          required: true,
          field_type: "number"
      }]
    }]

  constructor() { }
  myObs:Observable<CategoryInterface[]>;

  getAllCategories(){
    this.myObs = new Observable((observer)=>{
      observer.next(this.Categories);
    })
    return this.myObs;
  }
}
