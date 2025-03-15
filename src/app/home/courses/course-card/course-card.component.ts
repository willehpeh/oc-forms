import { Component, computed, input } from '@angular/core';
import { Course } from '../../../core/models/course';

@Component({
  selector: 'app-course-card',
  imports: [],
  styleUrls: ['./course-card.component.scss'],
  template: `
		<div class="course-card">
			<h3>{{ title() }}</h3>
			<p>{{ description() }}</p>
		</div>
  `,
})
export class CourseCardComponent {
  course = input.required<Course>();
  title = computed(() => this.course().title);
  description = computed(() => this.course().description);
}
