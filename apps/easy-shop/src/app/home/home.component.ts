import { ProductService } from './../../../../../libs/shared/src/lib/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product, ResProduct } from 'libs/shared/src/lib/models/product';


@Component({
  selector: 'brightcoding-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private productService:ProductService){}
  productss :Product[]=[];
  ngOnInit(): void {
    this.getProducts();
     console.log('ccczecez')
  }
  getProducts(){
    this.productService.getAllProducts().subscribe((res:ResProduct)=> {
      this.productss = res.products
      //console.log(res,'fzfz');
      
    })
  }
}
