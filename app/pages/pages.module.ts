import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        DashboardComponent,
        ProductComponent,
        CategoryComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProductComponent,
        CategoryComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class PagesModule { }
