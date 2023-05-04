import { OrderItems } from "./order-items";
import { Users } from "./users";

export interface Orders {
    _id?:string;
    shippingAddress?:string;
    invoiceAddress?:string;
    city?:string;
    country?:string;
    phone?:string;
    status?:string;
    total?:number;
    user?:Users[];
    orderItems?:OrderItems[];
}
export interface ResOrders{
    success?: boolean;
    orders: Orders[];
}
export interface ResOneOrders{
    success?: boolean;
    orders: Orders;
}

