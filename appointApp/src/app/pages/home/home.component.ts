import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { HomeSecComponent } from '../../components/home-sec/home-sec.component';
import { FooterComponent } from '../../appUI/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MenubarComponent, HomeSecComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
