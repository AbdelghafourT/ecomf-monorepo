import { ProductService } from './../../../../../../libs/shared/src/lib/services/product.service';
import { Product, ResProduct } from './../../../../../../libs/shared/src/lib/models/product';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productss: Product[] = [];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getAllProducts().subscribe((res:ResProduct)=> {
      this.productss = res.products
    })
  }
  // destroyCategory(id:string){
  //   this.productService.deleteProduct(id).subscribe((res)=> {
  //     this.productss = res.products
  //     this.getProducts()
  //   })
  // }
  destroyCategory(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe((res)=> {
          this.productss = res.products
          this.getProducts()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
