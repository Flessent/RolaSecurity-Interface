import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduktComponent } from './components/produkt/list-produkt/list-produkt.component';
import { NewProduktComponent } from './components/produkt/new-produkt/new-produkt.component';
import { UpdateProduktComponent } from './components/produkt/update-produkt/update-produkt.component';
import { ItemProduktComponent } from './components/produkt/list-produkt/item-produkt/item-produkt.component';
import { ProduktService } from './services/produkt.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HttpInterceptorService } from './services/login/http-interceptor.service';
import { MenuComponent } from './components/produkt/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduktComponent,
    NewProduktComponent,
    UpdateProduktComponent,
    ItemProduktComponent,
    LoginComponent,
    MenuComponent
         ],
  imports: [
  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ ProduktService,HttpInterceptorService,{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
