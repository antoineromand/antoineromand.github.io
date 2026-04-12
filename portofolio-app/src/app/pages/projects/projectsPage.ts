import {Component, computed, inject, signal} from '@angular/core';
import {ProjectService} from '../../services/project-service';
import {ProjectComponent} from '../../components/reusable/project/project';
import {AppProjectsFilter} from '../../components/core/app-projects-filter/app-projects-filter';

@Component({
  selector: 'projects-page',
  imports: [ProjectComponent, AppProjectsFilter],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsPage {
  service = inject(ProjectService);
  projects = computed(() =>
    this.service.getProjects(this.filters())
  );
  filters = signal({query: "", orderById: "ASC"});

  getFilters(filters: { query: string, orderById: string }) {
    this.filters.set(filters);
  }
}
