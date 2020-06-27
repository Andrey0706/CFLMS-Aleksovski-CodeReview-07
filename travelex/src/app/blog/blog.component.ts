import { Component, OnInit } from '@angular/core';
import {blog} from '../blog'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

	blog = blog;
	

  constructor() { }

  ngOnInit(): void {
  }

}
