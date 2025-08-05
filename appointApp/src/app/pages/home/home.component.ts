import { Component } from '@angular/core';
import { HeaderComponent } from '../../appUI/header/header.component';
import { MenubarComponent } from '../../appUI/menubar/menubar.component';
import { HomeSecComponent } from '../../appUI/home-sec/home-sec.component';
import { FooterComponent } from '../../appUI/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MenubarComponent, HomeSecComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
