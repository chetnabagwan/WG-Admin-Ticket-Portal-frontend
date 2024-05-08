import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./authentication/authentication-routing.module').then(
  //       (m) => m.AuthenticationRoutingModule
  //     ),
  // },
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
