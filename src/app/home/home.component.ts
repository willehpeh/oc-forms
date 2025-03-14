import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CoursesComponent,
    NewsletterComponent
  ],
  template: `
    <app-hero/>
    <app-newsletter/>
    <app-courses/>
  `,
  styles: ``
})
export class HomeComponent {

}
