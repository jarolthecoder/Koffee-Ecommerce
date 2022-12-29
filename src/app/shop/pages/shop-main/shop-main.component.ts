import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
