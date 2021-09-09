import { Component, OnInit } from '@angular/core';
import * as hello from 'karthikhellomodule';
import { CartService } from 'shared-mfe-lib';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  message: string = "";
  constructor(private svc: CartService) { }

  ngOnInit(): void {
    this.message = hello.SayHello();
    
  }

}
