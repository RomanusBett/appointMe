import { Component, input } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-command-sec',
  imports: [InputComponent],
  templateUrl: './command-sec.component.html',
  styles: ``
})
export class CommandSecComponent {
  title = input<string>();
  content = input<string>();
}
