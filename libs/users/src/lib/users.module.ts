import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes), RouterModule],
  exports: [RouterModule],
  declarations: [
    AuthentificationComponent
  ],
})
export class UsersModule {}
