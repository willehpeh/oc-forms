import { Component } from '@angular/core';
import { Course } from '../../core/models/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-courses',
  imports: [
    CourseCardComponent
  ],
  template: `
		<section id="courses" class="courses">
			<h2>Master Your Skills</h2>
			<div class="course-grid">
				@for (course of courses; track course.title) {
					<app-course-card [course]="course"/>
				}
			</div>
		</section>
  `,
  styles: `
    .courses {
      padding: 8rem 7%;
      background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    }

    h2 {
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
  `
})
export class CoursesComponent {
  courses: Course[] = [
    {
      title: 'HTML & Web Foundations',
      description: 'Build the foundation of modern web applications with semantic HTML and best practices'
    },
    {
      title: 'Modern CSS & Design',
      description: 'Create stunning user interfaces with advanced CSS techniques and modern design principles'
    },
    {
      title: 'JavaScript Mastery',
      description: 'Develop interactive web applications with modern JavaScript and popular frameworks'
    },
  ];
}
