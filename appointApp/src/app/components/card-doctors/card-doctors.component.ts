import { LucideAngularModule, Star, Clock, MapPin, Heart, Calendar } from 'lucide-angular';
import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-card-doctors',
  imports: [LucideAngularModule, ButtonComponent, DatePipe],
  templateUrl: './card-doctors.component.html',
  styles: ``
})
export class CardDoctorsComponent {
  readonly Star = Star;
  readonly Clock = Clock;
  readonly MapPin = MapPin;
  readonly Heart = Heart;
  readonly Calendar = Calendar;

  id=input<string>();
  name=input<string>();
  specialty=input<string>();
  rating=input<number>();
  reviewcount=input<number>();
  location=input<string>();
  consultationFee=input<number>();
  nextAvailable=input<string>();
  image=input<string>();
  languages=input<string[]>();
  approved=input<boolean>();
}
