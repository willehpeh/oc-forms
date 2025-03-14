import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  template: `
		<section id="courses" class="courses">
			<h2>Master Your Skills</h2>
			<div class="course-grid">
				<div class="course-card">
					<h3>HTML & Web Foundations</h3>
					<p>Build the foundation of modern web applications with semantic HTML and best practices</p>
				</div>
				<div class="course-card">
					<h3>Modern CSS & Design</h3>
					<p>Create stunning user interfaces with advanced CSS techniques and modern design principles</p>
				</div>
				<div class="course-card">
					<h3>JavaScript Mastery</h3>
					<p>Develop interactive web applications with modern JavaScript and popular frameworks</p>
				</div>
			</div>
		</section>
  `,
  styles: `
    .courses {
      padding: 8rem 7%;
      background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    }

    .courses h2 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .course-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
    }

    .course-card {
      background: #1e293b;
      padding: 2.5rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      border: 1px solid rgba(148, 163, 184, 0.1);
    }

    .course-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);
    }

    .course-card h3 {
      color: #e2e8f0;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .course-card p {
      color: #94a3b8;
      font-size: 1.125rem;
    }
  `
})
export class CoursesComponent {

}
