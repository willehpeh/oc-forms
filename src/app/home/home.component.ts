import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SkillAssessmentComponent } from './skill-assessment/skill-assessment.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CoursesComponent,
    NewsletterComponent,
    SkillAssessmentComponent
  ],
  template: `
    <app-hero id="hero"/>
    <app-newsletter/>
    <app-skill-assessment/>
    <app-courses id="courses"/>
  `,
  styles: ``
})
export class HomeComponent {

}
