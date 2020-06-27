import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

 items;
 contactForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {

this.contactForm = this.formBuilder.group({
     firstname: '',
     lastname: '',
     email: '',
     phone: '',
     address: '',
     note: ''

   });
   }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
  $('#thankYou').html(`We have received your form data ${customerData.firstname}, we will contact you ASAP`);
  $('#redirect').html(`You will be redirected to the home page in a few seconds`);

  setTimeout(function(){
  	window.location.href = "/";
  },5000);
   

   //alert(`We have received your form data ${customerData.firstname}, we will contact you ASAP`);

   this.items = this.cartService.clearCart();
   this.contactForm.reset();
 }

}
