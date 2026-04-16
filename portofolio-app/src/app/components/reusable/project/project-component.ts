import {Component, input} from '@angular/core';
import {Project as ProjectType} from '../../../services/project-service';
import {NgClass} from '@angular/common';
import {IdFormatterPipe} from '../../../pipes/id-formatter-pipe';

@Component({
  selector: 'app-project',
  imports: [NgClass, IdFormatterPipe],
  templateUrl: './project-component.html',
  styleUrl: './project-component.scss',
})
export class ProjectComponent {
  project = input.required<ProjectType>();
  defaultImgSrc =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_MQlv6kK2EWiD48KlM33C4I0Ftt9Ix88s8Mxsl3rCkQYKZST0JcQDHOxeRF6uUQnGYKd9ui5F9rhOiFeBlJsJXvjv_SYCAwKenlhQs-eKnw03_Z1nBL1zfiA85mtJ8RrsrsNpXZoRvWFhtRBS25Jc9TcxMiDo1hqqAlu_i4akSGRQnSHz8hI5AISrDVQ11v_sLvGw7vZPqAuYXkJAgG1g7-m1yX8UeFzuVQ0VIkH4HGRADxYZLOFn0BdsgvodurDz3TwMYU0MfA';

  status() {
    switch (this.project()?.status) {
      case 'completed':
        return 'Terminé';
      case 'ongoing':
        return 'En cours';
      default:
        return 'Pause/Annulé';
    }
  }

  isEven(id: number | undefined) {
    if (id && id % 2 === 0) return true;
    return false;
  }
}
