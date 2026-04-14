import {Component, input} from '@angular/core';
import {Experience} from '../../../pages/about/about-page';
import {NgClass, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [
    UpperCasePipe,
    NgClass
  ],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent {
  experience = input.required<Experience>();
  last = input.required<boolean>();
}
