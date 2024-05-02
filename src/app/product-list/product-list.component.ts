// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]=[{ id: 1, name: 'Product 1', price: 10, imagePath: 'assets/product1.jpg',instock:10 },
  { id: 2, name: 'Product 2', price: 20, imagePath: 'assets/product2.jpg',instock:0 },
  { id: 3, name: 'Product 3', price: 30, imagePath: 'assets/product3.jpg',instock:3 },
  { id: 4, name: 'Product 4', price: 60, imagePath: 'assets/product4.jpg',instock:2 }];
 searchByCategory:string="Search By Product";
  ecartvalue:number=0;
  name:string='';
  itemselected:string='';
  itemcount:number=15;
  image:string='/assets/product5.jpg';
  /*
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  
  */
 constructor(){}
ngOnInit(): void { }

getProducts()
{
  return this.products;

}

decrementEcart():void{
  if(this.ecartvalue>0){
  this.ecartvalue--;}
}
incrementEcart():void{
for(let product of this.products)
  if(this.ecartvalue<product.instock)
this.ecartvalue++;
}

onNameChange(event:any){
  this.name=event.target.value;
}

onItemSelected(event:any)
{
  this.itemselected=event.target.value;
  for(let product of this.products)
    if(product.name===this.itemselected)
      console.log(this.itemselected);

}  

}
