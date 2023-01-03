import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  @Input() headerDark!: boolean;
  
  constructor(public shared: SharedService) { }

  ngOnInit(): void {
  }

}
