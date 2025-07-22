import { LucideAngularModule, Heart, Phone, Mail, MapPin} from 'lucide-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  readonly Heart = Heart;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly MapPin = MapPin;

  email = 'support@medicare.com';
  currentYear: number = new Date().getFullYear();
}
