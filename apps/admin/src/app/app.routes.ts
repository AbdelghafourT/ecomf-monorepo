import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListcategoryComponent } from './pages/listcategory/listcategory.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './pages/updatecategory/updatecategory.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { ProductComponent } from './pages/product/product.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';

export const appRoutes: Route[] = [
    {path:'admin', component:DashboardComponent},
    {
        path:'admin/category',
        component:ListcategoryComponent
    },
    {
        path:'admin/category/addCategory',
        component:AddcategoryComponent
    },
    {
        path:'admin/category/editCategory/:id',
        component:UpdatecategoryComponent
    },
    {
        path:'admin/product',
        component:ProductComponent
    },
    {
        path:'admin/product/addproduct',
        component:AddproductComponent
    },
    {
        path:'admin/product/editproduct/:id',
        component:EditproductComponent
    },
    {
        path:'admin/Orders',
        component:OrdersComponent
    },
    {
        path:'admin/users',
        component:UsersComponent
    },
];
