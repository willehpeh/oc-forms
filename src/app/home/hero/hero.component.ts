import { Component } from '@angular/core';
import { CtaButtonComponent } from './cta-button/cta-button.component';

@Component({
  selector: 'app-hero',
  imports: [
    CtaButtonComponent
  ],
  styleUrls: ['./hero.component.scss'],
  template: `
		<section id="home" class="hero">
			<h1>Level Up Your<br>Web Development Skills</h1>
			<p>Master modern web technologies through hands-on projects and expert-led courses</p>
      <app-cta-button>Start Learning Today</app-cta-button>
		</section>
  `,
})
export class HeroComponent {

}
