import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListcategoryComponent } from './pages/listcategory/listcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecategoryComponent } from './pages/updatecategory/updatecategory.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { ProductComponent } from './pages/product/product.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';
import { PostuserComponent } from './pages/postuser/postuser.component';
import { LoginComponent } from './pages/login/login.component';
import { NeworderComponent } from './pages/neworder/neworder.component';



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ListcategoryComponent, AddcategoryComponent, UpdatecategoryComponent, SidebarComponent, AddproductComponent, ProductComponent, EditproductComponent, OrdersComponent, UsersComponent, PostuserComponent, LoginComponent, NeworderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
