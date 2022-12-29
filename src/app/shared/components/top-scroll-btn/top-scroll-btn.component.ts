import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-scroll-btn',
  templateUrl: './top-scroll-btn.component.html',
  styleUrls: ['./top-scroll-btn.component.css']
})
export class TopScrollBtnComponent implements OnInit {
  faArrowUp = faArrowUp;
  windowScrolled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset > 1000;
    });
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

}
