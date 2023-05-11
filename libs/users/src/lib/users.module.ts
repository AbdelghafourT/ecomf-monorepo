import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SinginComponent } from './components/singin/singin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes),ReactiveFormsModule,HttpClientModule],
  // exports: [RouterModule],
  declarations: [
    AuthentificationComponent,
    SinginComponent
  ],
})
export class UsersModule {}
