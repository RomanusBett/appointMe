import { Component, input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SpecialtiesComponent } from '../specialties/specialties.component';
import { ourSpecialties } from '../../assets/specialties.data';

@Component({
  selector: 'app-command-sec',
  imports: [InputComponent, SpecialtiesComponent],
  templateUrl: './command-sec.component.html',
  styles: ``
})
export class CommandSecComponent {
  title = input<string>();
  content = input<string>();

  specialties = ourSpecialties
}
