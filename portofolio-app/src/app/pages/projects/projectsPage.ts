import {Component, computed, inject, signal} from '@angular/core';
import {ProjectService} from '../../services/project-service';
import {ProjectComponent} from '../../components/reusable/project/project';
import {AppProjectsFilter} from '../../components/core/app-projects-filter/app-projects-filter';
import {AppProjectsPagination} from '../../components/core/app-projects-pagination/app-projects-pagination';

@Component({
  selector: 'projects-page',
  imports: [ProjectComponent, AppProjectsFilter, AppProjectsPagination],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsPage {
  service = inject(ProjectService);

  offset = signal(0);
  limit = 2;

  filters = signal({query: "", orderById: "ASC"});

  pagination = computed(() => {
    const start = this.offset();
    const end = start + this.limit;
    return {start, end};
  });

  filteredProjects = computed(() =>
    this.service.getFilteredProjects(this.filters())
  );

  total = computed(() => this.filteredProjects().length);

  projects = computed(() =>
    this.service.getProjects(this.filters(), this.pagination())
  );

  getFilters(filters: { query: string; orderById: string }) {
    this.filters.set(filters);
    this.offset.set(0);
  }

  getPagination(offset: number) {
    this.offset.set(offset);
  }
}
