import {Component, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

import {EmailJsService} from '../../services/emailjs.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  fb = inject(FormBuilder);
  emailJsService = inject(EmailJsService);
  isSending = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  async onSubmit() {
    if (this.form.invalid || this.isSending()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSending.set(true);
    this.submitStatus.set('idle');

    try {
      await this.emailJsService.sendContactMessage(this.form.getRawValue());
      this.submitStatus.set('success');
      this.form.reset();
    } catch {
      this.submitStatus.set('error');
    } finally {
      this.isSending.set(false);
    }
  }
}
