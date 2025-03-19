import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [
    FormsModule
  ],
  styleUrls: ['./newsletter.component.scss'],
  template: `
		<section class="newsletter">
			<div class="newsletter-container">
				<h2>Stay Updated</h2>
				<p>Get the latest web development tips and tutorials in your inbox</p>
				<form #newsletterForm="ngForm"
              (ngSubmit)="onSubmit(newsletterForm)"
              class="newsletter-form">
					<input type="email"
                 name="userEmail"
                 [(ngModel)]="userEmail" 
                 placeholder="Enter your email" 
                 required>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</section>
  `,
})
export class NewsletterComponent {
  userEmail: string = 'me@my-house.com';

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
