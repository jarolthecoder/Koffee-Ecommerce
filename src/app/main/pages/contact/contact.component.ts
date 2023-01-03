import { Component, OnInit } from '@angular/core';
import { faChevronRight, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faChevronRight = faChevronRight;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faTwitter = faTwitter;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
