import { Component, computed, input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-card',
  imports: [],
  template: `
		<div class="course-card">
			<h3>{{ title() }}</h3>
			<p>{{ description() }}</p>
		</div>
  `,
  styles: `
    .course-card {
      background: #1e293b;
      height: 100%;
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

    h3 {
      color: #e2e8f0;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      color: #94a3b8;
      font-size: 1.125rem;
    }`
})
export class CourseCardComponent {
  course = input.required<Course>();
  title = computed(() => this.course().title);
  description = computed(() => this.course().description);
}
