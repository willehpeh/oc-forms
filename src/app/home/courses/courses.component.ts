import { Component } from '@angular/core';
import { Course } from '../../core/models/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-courses',
  imports: [
    CourseCardComponent
  ],
  styleUrls: ['./courses.component.scss'],
  template: `
		<section id="courses" class="courses">
			<h2>Master Your Skills</h2>
			<div class="course-grid">
				@for (course of courses; track course.title) {
					<app-course-card [course]="course"/>
				}
			</div>
		</section>
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
