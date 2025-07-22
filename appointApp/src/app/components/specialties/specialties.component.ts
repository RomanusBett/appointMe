import { Component, input } from '@angular/core';
import { LucideAngularModule, Heart, Brain, Smile, Eye, Baby, Bone, Stethoscope, Sparkles, LucideIconData } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialties',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './specialties.component.html',
  styles: ``
})
export class SpecialtiesComponent {
  readonly Heart = Heart;
  readonly Brain = Brain;
  readonly Smile = Smile;
  readonly Eye = Eye;
  readonly Baby = Baby;
  readonly Bone = Bone;
  readonly Stethoscope = Stethoscope
  readonly Sparkles = Sparkles;

  icons: Record<string, LucideIconData> = {
    Heart,
    Brain,
    Smile,
    Eye,
    Baby,
    Bone,
    Stethoscope,
    Sparkles
  };

  name = input<any>();
  title = input<string>();
  content = input<string>();
  doctors = input<string>();
}
