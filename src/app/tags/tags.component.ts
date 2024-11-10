import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
     this.tags = this.foodService.getAllTags();
  }

}

