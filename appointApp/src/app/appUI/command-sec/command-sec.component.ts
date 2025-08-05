import { Component, input } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { SpecialtiesComponent } from '../../components/specialties/specialties.component';
import { ourSpecialties } from '../../assets/specialties.data';
import { CardDoctorsComponent } from '../../components/card-doctors/card-doctors.component';
import { docInfo } from '../../assets/docInfo.data';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-command-sec',
  imports: [InputComponent, SpecialtiesComponent, CardDoctorsComponent, ButtonComponent],
  templateUrl: './command-sec.component.html',
  styles: ``
})
export class CommandSecComponent {
  title = input<string>();
  content = input<string>();

  specialties = ourSpecialties
  doctors = docInfo
}
