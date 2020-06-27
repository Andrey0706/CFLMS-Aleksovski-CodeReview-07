import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 items = [];
 total=0;
 totalItems: number = 1;
 afterDiscount: number = 0;
 constructor() { }

 addToCart(product) {
 	for(let i=0; i<this.items.length;i++){
 		if (this.items[i].name == product.name){
 			
 			Swal.fire({
  				icon: 'error',
  				title: 'Oops...',
  				text: 'You can not add the same item twice!',
  				footer: '<a href>Those are the rules, sorry :(</a>'
			});

 			return;
 		}
 	}

   this.items.push(product);
   this.totalItems++;
    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Added item to cart',
  showConfirmButton: false,
  timer: 500
});
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }

 noOfItems(){
 	console.log("items.length" + this.items.length);
 	this.totalItems = this.items.length;
 	console.log("totalItems:" + this.totalItems);
 	return this.totalItems;
 	
 }

 deleteItem(index){
 	this.items.splice(index,1);
 }

 totalPrice(){
 	this.total=0;
 	for(let i=0;i<this.items.length;i++){
 		this.total += this.items[i].price;
 		
 	}
 	return this.total;
 }

 discount(){
 	if(this.items.length==0){
 		return;
 	}
 	if(this.total > 500){
 		this.afterDiscount =  Math.floor(this.total * 0.8);
 	} else if(this.total > 200) {
 		this.afterDiscount = Math.floor(this.total * 0.9);
 	}
 	return this.afterDiscount;
 }
}