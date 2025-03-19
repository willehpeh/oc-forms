import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CoursesComponent,
    NewsletterComponent,
    ContactComponent
  ],
  template: `
    <app-hero/>
    <app-newsletter/>
    <app-courses/>
    <app-contact/>
  `,
  styles: ``
})
export class HomeComponent {

}
