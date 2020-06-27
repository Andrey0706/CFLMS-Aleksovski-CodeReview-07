import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
items;
  constructor(private cartService: CartService) { }
 

  noOfItems(){
  	return this.cartService.noOfItems();
  }

  ngOnInit(): void {
 	
  }

}