// product-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Update the path
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';

  constructor(private productService: ProductService, private cartService: CartService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onSearch(): void {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToCart(product: any): void {

    console.log(product.title);
    this.cartService.addToCart(product);
  }

  navigateToProductDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
