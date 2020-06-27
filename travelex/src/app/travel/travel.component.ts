import { Component, OnInit } from '@angular/core';
import {offers} from '../offers';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass']
})
export class TravelComponent implements OnInit {


offers =  offers;

hovereffect(index){
 $(`#${index}`).addClass("hoverClass");
}

removeHover(index){
 $(`#${index}`).removeClass("hoverClass");
}

starsArray(index){
	let noOfStars=offers[index].stars;
	return [...Array(noOfStars).keys()];
}
  constructor(private cartService: CartService) { }
   addToCart(product) {
   this.cartService.addToCart(product);
   this.cartService. noOfItems();
   console.log(this.cartService.getItems());
  
 }

  ngOnInit(): void {
  }

}