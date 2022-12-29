import { Component, OnInit, Input } from '@angular/core';
import { 
  faFacebookF, 
  faInstagram,
  faTiktok,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

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
  @Input() closeNav!: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
