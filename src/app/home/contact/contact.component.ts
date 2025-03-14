import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
		<section id="contact" class="contact">
			<h2>Start Your Journey</h2>
			<form id="contact-form">
				<div class="form-group">
					<label for="name">Full Name</label>
					<input type="text" id="name" name="name" required placeholder="Enter your name">
				</div>

				<div class="form-group">
					<label for="email">Email Address</label>
					<input type="email" id="email" name="email" required placeholder="you@example.com">
				</div>

				<div class="form-group">
					<label for="course">Preferred Course</label>
					<select id="course" name="course">
						<option value="html">HTML & Web Foundations</option>
						<option value="css">Modern CSS & Design</option>
						<option value="javascript">JavaScript Mastery</option>
					</select>
				</div>

				<div class="form-group">
					<label for="message">Your Goals</label>
					<textarea id="message" name="message" rows="4" required placeholder="Tell us what you want to achieve..."></textarea>
				</div>

				<button type="submit" class="submit-button">Begin Your Journey</button>
			</form>
		</section>
  `,
  styles: `
    .contact {
      padding: 8rem 7%;
      background: #0f172a;
    }

    .contact h2 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #contact-form {
      max-width: 600px;
      margin: 0 auto;
      background: #1e293b;
      padding: 3rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(148, 163, 184, 0.1);
    }

    .form-group {
      margin-bottom: 2rem;
    }

    label {
      display: block;
      margin-bottom: 0.75rem;
      font-weight: 600;
      color: #e2e8f0;
      font-size: 1.125rem;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #334155;
      border-radius: 1rem;
      font-size: 1rem;
      transition: all 0.3s ease;
      color: #e2e8f0;
      background: #0f172a;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: #818cf8;
      background: #1e293b;
      box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.1);
    }

    .submit-button {
      display: block;
      width: 100%;
      padding: 1.25rem;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      color: white;
      border: none;
      border-radius: 1rem;
      font-size: 1.125rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(129, 140, 248, 0.4);
    }

    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(129, 140, 248, 0.6);
    }
  `
})
export class ContactComponent {

}
