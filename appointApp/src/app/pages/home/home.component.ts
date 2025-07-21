import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { HomeSecComponent } from '../../components/home-sec/home-sec.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MenubarComponent, HomeSecComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
