import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'tickets',
    loadChildren: () => 
      import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: 'categories',
    loadChildren: ()=> import('./categories/categories.module').then(m=>m.CategoriesModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
