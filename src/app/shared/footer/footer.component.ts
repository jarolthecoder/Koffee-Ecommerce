import { Component, OnInit } from '@angular/core';
import { 
  faFacebookF, 
  faInstagram,
  faTiktok,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
