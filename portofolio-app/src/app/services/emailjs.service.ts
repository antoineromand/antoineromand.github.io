import {Injectable} from '@angular/core';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';

import {environment} from '../../environments/environment';

export interface ContactEmailPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailJsService {
  sendContactMessage(payload: ContactEmailPayload): Promise<EmailJSResponseStatus> {
    const {serviceId, templateId, publicKey} = environment.emailjs;

    if (!serviceId || !templateId || !publicKey) {
      return Promise.reject(
        new Error('EmailJS is not configured. Check environment.emailjs values.'),
      );
    }

    return emailjs.send(
      serviceId,
      templateId,
      {
        name: payload.name,
        email: payload.email,
        message: payload.message,
        reply_to: payload.email,
      },
      {
        publicKey,
      },
    );
  }
}
