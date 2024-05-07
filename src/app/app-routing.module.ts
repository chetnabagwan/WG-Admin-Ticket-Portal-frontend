import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication-routing.module').then(
        (m) => m.AuthenticationRoutingModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'categories',
    loadChildren: ()=> import('./categories/categories.module').then(m=>m.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
