import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import routes from './cartmodule.routes';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    routes
  ]
})
export class CartModule { }
