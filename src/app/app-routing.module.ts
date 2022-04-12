import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPage } from 'src/pages/contact/contact.page';
import { FaqPage } from 'src/pages/faq/faq.page';
import { HomePage } from 'src/pages/home/home.page';
import { ProductsPage } from 'src/pages/products/products.page';

const routes: Routes = [
    { path: 'home', component: HomePage },
    { path: '', component: HomePage },
    { path: 'products', component: ProductsPage },
    { path: 'faq', component: FaqPage },
    { path: 'contact', component: ContactPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
