import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NoFoundpageComponent } from './no-Found-Page/no-found-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        NoFoundpageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        PagesModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
