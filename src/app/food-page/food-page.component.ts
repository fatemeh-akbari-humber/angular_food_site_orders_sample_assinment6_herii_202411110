
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';

import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/food';


@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
  
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
