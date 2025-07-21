import { Component, Input } from '@angular/core';
import { LucideAngularModule, Calendar } from 'lucide-angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' = 'default';
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() class = '';
}
