import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  imports: [],
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
  styles: `
    .newsletter {
      padding: 4rem 7%;
      background: #1e293b;
      border-top: 1px solid rgba(148, 163, 184, 0.1);
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .newsletter-container {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    .newsletter h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .newsletter p {
      color: #94a3b8;
      margin-bottom: 2rem;
      font-size: 1.125rem;
    }

    .newsletter-form {
      display: flex;
      gap: 1rem;
      max-width: 500px;
      margin: 0 auto;
    }

    .newsletter-form input {
      flex: 1;
      padding: 1rem 1.5rem;
      border: 2px solid #334155;
      border-radius: 0.75rem;
      background: #0f172a;
      color: #e2e8f0;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .newsletter-form input:focus {
      outline: none;
      border-color: #818cf8;
      box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.1);
    }

    .newsletter-form button {
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      color: white;
      border: none;
      border-radius: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .newsletter-form button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(129, 140, 248, 0.4);
    }
  `
})
export class NewsletterComponent {

}
