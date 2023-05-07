import { OrdersService } from './../../../../../../libs/shared/src/lib/services/orders.service';
import { Orders, ResOrders, ResOneOrders } from './../../../../../../libs/shared/src/lib/models/orders';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-ordres',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  constructor(private ordersService:OrdersService,private toastr: ToastrService){}
  ngOnInit(): void {
    this.getAllOrders();
  }
  Orders:Orders[] = [];
  getAllOrders(){
    this.ordersService.getOrders().subscribe(({success,orders}:ResOrders)=> {
      if(success){
        this.Orders = orders
      }
    })
  }
  // toggleStatus(order:Orders): void {
  //   switch (order.status) {
  //     case 'pending':
  //       order.status = 'Confirmed';
  //       break;
  //     case 'Confirmed':
  //       order.status = 'Cancel';
  //       break;
  //     case 'Cancel':
  //       order.status = 'pending';
  //       break;
  //     default:
  //       break;
  //   }
  //   let { _id,shippingAddress,invoiceAddress,city,country,phone,status,total,user,orderItems } = orders
  //   this.ordersService.patchOrdersStatus(_id,{shippingAddress,invoiceAddress,city,country,phone,status,total,user,orderItems}).subscribe((res)=>{})
  // }
  // getStatusClass(): string {
  //   switch (order.status) {
  //     case 'pending':
  //       return 'bg-warning';
  //     case 'Confirmed':
  //       return 'bg-success';
  //     case 'Cancel':
  //       return 'bg-primary';
  //     default:
  //       return '';
  //   }
  // }

  toggleStatus(order: Orders): void {
    switch (order.status) {
      case 'pending':
        order.status = 'shipped';
        break;
      case 'shipped':
        order.status = 'recieved';
        break;
      case 'recieved':
        order.status = 'Confirmed';
        break
      case 'Confirmed':
        order.status = 'pending'
        break;
      // case 'cancled':
      //   order.status = 'pending'
      //   break;
      default:
        break;
    }
    // enum:['shipped','recieved','cancled','pending'],
    let { _id, shippingAddress, invoiceAddress, city, country, phone, status, total, user, orderItems } = order;
    this.ordersService.patchOrders(_id, { shippingAddress, invoiceAddress, city, country, phone, status, total, user, orderItems }).subscribe((res) => { });
  }
  
  getStatusClass(order: Orders): string {
    switch (order.status) {
      case 'pending':
        return 'bg-warning';
      case 'shipped':
        return 'bg-info';
      case 'recieved':
        return 'bg-primary';
      case 'Confirmed':
        return 'bg-success';
        case 'cancled':
          return 'bg-danger';    
      default:
        return '';
    }
  }
  onRefundOrder(order:Orders) {
    // const updatedOrder: Orders = {
    //   status: 'cancled'
    // };
    // if(order.status === 'shipped' || order.status === 'recieved' || order.status ==='pending'){
    //   return 'cancled';
    // }
    switch (order.status) {
      case 'pending':
        order.status = 'cancled';
        break;
      case 'shipped':
        order.status = 'cancled';
        break;
      case 'recieved':
        order.status = 'cancled';
        break
      case 'Confirmed':
        order.status = 'cancled'
        break;
      default:
        break;
    }
    let { _id, shippingAddress, invoiceAddress, city, country, phone, status, total, user, orderItems } = order;
    this.ordersService.cancelOrders(_id, { shippingAddress, invoiceAddress, city, country, phone, status, total, user, orderItems }).subscribe(
      response => {
        this.toastr.success('Order refunded and deleted successfully', 'Success');
          // delete order
          this.ordersService.deleteOrder(order._id ?? '').subscribe((res)=>{
            this.Orders = res.orders;
            setTimeout(() => {
              this.getAllOrders();
            }, 1000);
          });
      },
      error => {
        console.error('Error refunding order:', error);
      }
    );
    console.log(order)
  }
  
}


