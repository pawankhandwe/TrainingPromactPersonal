// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  addToCart(product: any): void {

    console.log(product);
    
    // const existingItem = this.cartItems.find(item => item.product.id === product.id);
    // if (existingItem) {
    //   existingItem.quantity += 1;
    // } else {
      this.cartItems.push({ product, quantity: 1 });
      alert("product added to cart !")
    // }
  }

  removeFromCart(product: any): void {
    const index = this.cartItems.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  updateQuantity(item: any, newQuantity: number): void {
    const index = this.cartItems.findIndex(cartItem => cartItem === item);
    if (index !== -1) {
      this.cartItems[index].quantity = newQuantity;
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
  clearCart(): void {
    this.cartItems = [];
  }
  
}
