import { Component } from '@angular/core';
import { LucideAngularModule, Search, Menu, User, Heart, Calendar } from 'lucide-angular';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, InputComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  readonly Search = Search;
  readonly Menu = Menu;
  readonly User = User;
  readonly Heart = Heart;
  readonly Calendar = Calendar;
}
