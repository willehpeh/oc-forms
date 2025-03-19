import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, filter, map, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
    message: ['']
  });
  selectedCourse$ = this.contactForm.valueChanges.pipe(
    map(form => form.course),
    filter(course => course !== ''),
    distinctUntilChanged(),
    map(course => this.coursesService.getCourseByType(course)),
  );
  constructor() {
    // this.contactForm.valueChanges.pipe(
    //   takeUntilDestroyed(),
    //   tap(console.log)
    // ).subscribe();
    // this.selectedCourse$.pipe(
    //   takeUntilDestroyed(),
    //   tap(console.log),
    // ).subscribe();
  }
}
