import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  standalone: true,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder:string = '';
  @Input() name:string = 'docSearchInput';
  ariaInvalid: boolean = false;
  isDisabled: boolean = false;
  customClass: string = '';
}
