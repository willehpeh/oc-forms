import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { CoursesService } from '../courses/courses.service';
import { AsyncPipe } from '@angular/common';
import { CourseCardComponent } from '../courses/course-card/course-card.component';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    CourseCardComponent
  ],
  styleUrls: ['contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);
  private coursesService = inject(CoursesService);
  contactForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    course: ['', [Validators.required]],
    message: ['']
  });
  selectedCourse$ = this.contactForm.valueChanges.pipe(
    map(form => form.course),
    filter(course => course !== ''),
    distinctUntilChanged(),
    map(course => this.coursesService.getCourseByType(course)),
  );


}
