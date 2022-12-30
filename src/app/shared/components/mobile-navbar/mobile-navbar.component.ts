import { Component, OnInit } from '@angular/core';
import { 
  faFacebookF, 
  faInstagram,
  faTiktok,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faTwitter = faTwitter;


  constructor(private shared: SharedService) { }

  ngOnInit(): void {
  }

  closeNav() {
    this.shared.toggleNav();
  }

}
