import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NoFoundpageComponent } from '../no-Found-Page/no-found-page.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

const routes:Routes = [
  //rutas protegidas
  {path:'dashboard', component: PagesComponent,
  children: [
  {path:'', component: DashboardComponent},
  {path:'product', component: ProductComponent},
  {path:'category', component: CategoryComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  ]},

  {path:'**', component: NoFoundpageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
