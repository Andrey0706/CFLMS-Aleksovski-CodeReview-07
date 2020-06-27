import { Component, OnInit } from '@angular/core';
import {offers} from '../offers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


offers =  offers;

  constructor() { }

  ngOnInit(): void {
  }

}
