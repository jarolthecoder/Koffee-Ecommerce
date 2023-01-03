import { Component, OnInit } from '@angular/core';
import { DrinksItem } from '../../interfaces/Drinks';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.css']
})
export class MenuDrinksComponent implements OnInit {
  espresso: DrinksItem[] = [];
  tea: DrinksItem[] = [];
  iced: DrinksItem[] = [];
  frappe: DrinksItem[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.mainService.getDrinks()
      .subscribe(data => {
        const espresso = data.filter(item => item.category.espresso);
        const tea = data.filter(item => item.category.tea);
        const iced = data.filter(item => item.category.icedBlended);
        const frappe = data.filter(item => item.category.frappe);
        
        this.espresso = espresso;
        this.tea = tea;
        this.iced = iced;
        this.frappe = frappe;
      });
  }

}
