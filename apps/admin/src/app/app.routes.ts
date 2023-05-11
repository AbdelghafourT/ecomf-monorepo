import { NeworderComponent } from './pages/neworder/neworder.component';
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
import { PostuserComponent } from './pages/postuser/postuser.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from '@brightcoding/users';

export const appRoutes: Route[] = [
    {path:'register',component:PostuserComponent,canActivate:[AuthGuard]},
    // {path:'login', component:LoginComponent},
    {path:'admin', component:DashboardComponent,canActivate:[AuthGuard]},
    {
        path:'admin/category',
        component:ListcategoryComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/category/addCategory',
        component:AddcategoryComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/category/editCategory/:id',
        component:UpdatecategoryComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/product',
        component:ProductComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/product/addproduct',
        component:AddproductComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/product/editproduct/:id',
        component:EditproductComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/Orders',
        component:OrdersComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/newOrder',
        component:NeworderComponent,canActivate:[AuthGuard]
    },
    {
        path:'admin/users',
        component:UsersComponent,canActivate:[AuthGuard]
    }
];
