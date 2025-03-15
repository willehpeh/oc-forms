import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  imports: [],
  styleUrls: ['./newsletter.component.scss'],
  template: `
		<section class="newsletter">
			<div class="newsletter-container">
				<h2>Stay Updated</h2>
				<p>Get the latest web development tips and tutorials in your inbox</p>
				<form class="newsletter-form">
					<input type="email" placeholder="Enter your email" required>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</section>
  `,
})
export class NewsletterComponent {

}
