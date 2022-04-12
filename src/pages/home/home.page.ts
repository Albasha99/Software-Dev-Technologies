import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductCategory, ProductCategoryType } from 'src/models/product.model';
import { User } from 'src/models/user.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
    /**
     * The currently logged-in user.
     */
    public user?: User;

    public products: Product[] = [];

    /**
     * Get an initial array of categories from the server.
     */
    public categories: ProductCategory[] = [];

    /**
     * Selected category type. If undefined, the category selector must be displayed.
     */
    public selectedCategory?: ProductCategoryType;

    constructor(
        private router: Router,
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.categories = this.productService.getCategories();
    }

    public onCategoryClick(catType: ProductCategoryType) {
        this.selectedCategory = catType;

        this.products = this.productService.getProducts(catType);
    }

    public onBackToCategories(): void {
        this.selectedCategory = undefined;
        this.products = [];
    }

    public onProductClick(prod: Product) {
        this.router.navigate(['/products']);
    }

    public onLogin(user: User) {
        this.user = user;
    }
}
