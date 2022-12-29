import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DrinksItem } from '../interfaces/Drinks';
import { Observable } from 'rxjs';
import { FoodItem } from '../interfaces/Food';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getDrinks(): Observable<DrinksItem[]> {
    return this.http.get<DrinksItem[]>('/assets/mock-data/drinks.json');
  }

  getFood(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>('/assets/mock-data/food.json');
  }
}
