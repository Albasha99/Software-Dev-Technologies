import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from 'src/components/navigation/navigation.component';
import { ContactPage } from 'src/pages/contact/contact.page';
import { FaqPage } from 'src/pages/faq/faq.page';
import { HomePage } from 'src/pages/home/home.page';
import { LoginPage } from 'src/pages/login/login.page';
import { ProductsPage } from 'src/pages/products/products.page';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProductsPage,
    FaqPage,
    ContactPage,
    NavigationComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
