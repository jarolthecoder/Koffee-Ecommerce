import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/shop/interfaces/Products';
import { ShopService } from 'src/app/shop/services/shop.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  products: Product[] = [];

  constructor(private shop: ShopService) {

   }

  ngOnInit(): void {
    this.shop.getAllProducts()
      .subscribe(data => {
        const coffe = data.filter(item => item.type === 'Espresso' || item.type === 'Filter');
        this.products = coffe;
        this.products.splice(0, 3);
      })
  }

  slideLeft() {
    const slidesContainer = document.getElementById("slides-container") as HTMLElement;
    const slide = document.querySelector(".slide") as HTMLElement;
    const prevButton = document.getElementById("slide-arrow-prev") as HTMLButtonElement;
    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });
  }

  slideRight() {
    const slidesContainer = document.getElementById("slides-container") as HTMLElement;
    const slide = document.querySelector(".slide") as HTMLElement;
    const nextButton = document.getElementById("slide-arrow-next") as HTMLButtonElement;

    nextButton.addEventListener("click", (event) => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });
  }

}
