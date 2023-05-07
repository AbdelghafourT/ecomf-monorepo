import { Router } from '@angular/router';
import { Product, ResProduct } from 'libs/shared/src/lib/models/product';
import { UsersService } from './../../../../../../libs/shared/src/lib/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ResUsers, Users } from 'libs/shared/src/lib/models/users';
import { OrdersService } from 'libs/shared/src/lib/services/orders.service';
import { ProductService } from 'libs/shared/src/lib/services/product.service';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Orders } from 'libs/shared/src/lib/models/orders';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {
  productss: Product[] = [];
  selectedProducts: string[] = [];
  userss:Users[]=[];
  newOrder:Orders[]=[]
  countStock1='';
  constructor(
    private productService: ProductService,
    private orderService:OrdersService,
    private usersService:UsersService,
    private router:Router,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.getUsers();
    this.productService.getAllProducts().subscribe((res:ResProduct)=> {
      this.productss = res.products
      console.log(res)
    })
  }
  
  OrderForm  = new FormGroup({
    shippingAddress: new UntypedFormControl('',Validators.required),
    invoiceAddress: new  UntypedFormControl('',Validators.required),
    city: new  UntypedFormControl('',Validators.required),
    country:new UntypedFormControl('',Validators.required),
    phone: new  UntypedFormControl('',Validators.required),
    items: new UntypedFormControl('',Validators.required),
    user: new UntypedFormControl('',Validators.required),
  })


  onDeleteOrder(product: any) {
    // TODO: implement logic to delete the product
  }

  
  getUsers(){
    this.usersService.getAllUsers().subscribe(({success,user}:ResUsers)=> {
      if(success){
        this.userss = user
      }
    })
  }
  onSelectProduct(product: Product): void {
    const index = this.selectedProducts.indexOf(product._id ?? '');
    if (index === -1) {
      this.selectedProducts.push(product._id ?? '');
    } else {
      this.selectedProducts.splice(index, 1);
    }
    // this.selectedProducts.map(id => ({ product: id   })),
    // console.log(this.selectedProducts)
  }
  onAddOrder() {
    const newOrder = {
      ...this.OrderForm.value,
      // product: this.selectedProducts.map(id => ({ product: id   })),
      items: this.selectedProducts.map(productId => {
        return {
          product: productId,
          quantity: this.OrderForm.value.items 
        };
      })  
    };
    console.log(this.selectedProducts)
    this.orderService.addOrder(newOrder).subscribe(() => {
      //console.log('Order created successfully');
      this.toastr.success('Order created successfully', 'Success');
      this.router.navigate(['/admin/Orders'])

    }, error => {
      console.error('Error creating order:', error);
    });
  }
}
