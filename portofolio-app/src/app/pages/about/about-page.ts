import {Component} from '@angular/core';
import * as data from '../../../about.json'
import {NgClass, UpperCasePipe} from '@angular/common';

export interface Information {
  readonly quote: readonly string[];
  readonly description: string;
  readonly skills: readonly string[];
  readonly experiences: readonly Experience[];
}

export interface Experience {
  readonly company: string;
  readonly contract: string;
  readonly date: string;
  readonly location: string;
  readonly stack: readonly string[];
  readonly tasks: readonly string[];
  readonly position: string;
}

@Component({
  selector: 'app-about-page',
  imports: [
    UpperCasePipe,
    NgClass
  ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  info: Information = data;
}
