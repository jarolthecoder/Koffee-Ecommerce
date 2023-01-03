import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../interfaces/Food';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-menu-food',
  templateUrl: './menu-food.component.html',
  styleUrls: ['./menu-food.component.css']
})
export class MenuFoodComponent implements OnInit {
  bagel: FoodItem[] = [];
  pastry:FoodItem[] = [];
  sandwich:FoodItem[] = [];
  other:FoodItem[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.mainService.getFood()
      .subscribe(data => {
        const bagel = data.filter(item => item.category.bagel);
        const pastry = data.filter(item => item.category.pastry);
        const sandwich = data.filter(item => item.category.sandwich);
        const other = data.filter(item => item.category.other);

        this.bagel = bagel;
        this.pastry = pastry;
        this.sandwich = sandwich;
        this.other = other;
      });
  }

}
