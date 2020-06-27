import { Component, OnInit } from '@angular/core';
import {offers} from '../offers';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

offers: Array<any> = [];


starsArray(index){
	let noOfStars=offers[index].stars;
	return [...Array(noOfStars).keys()];
}


  constructor(private cartService: CartService) { }

   discount(){
     $("#total").addClass("linethrough");
     return this.cartService.discount();
   }

  deleteItem(index){
    this.cartService.deleteItem(index);
  }

 totalPrice(){
	return this.cartService.totalPrice();
}

  ngOnInit(): void {

  	this.offers = this.cartService.getItems();
console.log(offers);
  }

}
