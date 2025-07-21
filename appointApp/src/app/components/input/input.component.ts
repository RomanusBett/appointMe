import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search} from 'lucide-angular';

@Component({
  selector: 'app-input',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './input.component.html',
  styles: ``,
  standalone: true,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder:string = '';
  @Input() name:string = 'docSearchInput';
  ariaInvalid: boolean = false;
  isDisabled: boolean = false;
  customClass: string = '';

  readonly Search = Search;
}
