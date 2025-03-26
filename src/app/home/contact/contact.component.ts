import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
    name: [''],
    email: [''],
    course: [''],
    message: [''],
    avatarUrl: ['']
  });
  selectedCourse$ = this.contactForm.valueChanges.pipe(
    map(form => form.course),
    filter(course => course !== ''),
    distinctUntilChanged(),
    map(course => this.coursesService.getCourseByType(course)),
  );
  avatarUrl$ = this.contactForm.get('avatarUrl')!.valueChanges;

  onSubmitForm() {
    console.log(this.contactForm.value);
  }
}
