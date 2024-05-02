// product.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      { id: 1, name: 'Product 1', price: 10, imagePath: 'assets/product1.jpg',instock:10 },
      { id: 2, name: 'Product 2', price: 20, imagePath: 'assets/product2.jpg',instock:0 },
      { id: 3, name: 'Product 3', price: 30, imagePath: 'assets/product3.jpg',instock:3 },
      { id: 4, name: 'Product 4', price: 60, imagePath: 'assets/product4.jpg',instock:2 }
    ];
  }
}
