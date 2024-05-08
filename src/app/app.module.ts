import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';

import { MenubarModule } from "primeng/menubar";
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    MenubarModule,
    TieredMenuModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
