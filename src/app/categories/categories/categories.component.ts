import { Component, OnInit, inject} from '@angular/core';
import { CategoryInterface } from '../categories.interface';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categorySubscription:Subscription;
  categories: CategoryInterface[];
  filteredCategories: CategoryInterface[];
  categoryService = inject(CategoriesService);
  search: string = "";
  visible:boolean=false;
  editMode:boolean = false;
  
 CATEGORIES: CategoryInterface[] = [
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
    }
  ]
  ngOnInit(): void {
    this.categories = this.CATEGORIES;
    this.filteredCategories = this.CATEGORIES;
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

  onNewCategoryClicked(){
    this.visible = true;
  }
  editCategory(catName:string) {
    this.editMode=true;
    console.log("Helelo")
    // // call to db to get cat detail
    // const fbcategory={
    //   category_name= 'Food and Beverages',
    //   description= 'Food and Beverages',
    //   created_at= Date,
    //   stagesAllowed:['inProgress','Review'],
    //   fields:[{name=}]
    // }
  }

  closeDialog(){
    this.visible=false;
  }

  ngOnDestroy(){
    if(this.categorySubscription)this.categorySubscription.unsubscribe();
  }
}
