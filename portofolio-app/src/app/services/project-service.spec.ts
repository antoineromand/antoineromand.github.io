import {TestBed} from '@angular/core/testing';

import {Project, ProjectService} from './project-service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter projects on query correctly', () => {
    const projects: Project[] = service.getFilteredProjects({query: "DD", orderById: "ASC"});
    expect(projects.length).toBe(1);
    expect(projects[0].id).toBe(3);
    expect(projects[0].tags.length).toBe(5);
    expect(projects[1]).toBeUndefined();
  });

  it('should sort projects correctly', () => {
    const projects: Project[] = service.getFilteredProjects({query: "", orderById: "DESC"});
    expect(projects.length).toBe(3);
    expect(projects[0].id).toBe(3);
    expect(projects[1].id).toBe(2);
  });

  it('should filter and paginate projects on query correctly', () => {
    const projects: Project[] = service.getProjects({query: "SPRI", orderById: "DESC"}, {start: 0, end: 1});
    expect(projects.length).toBe(1);
    expect(projects[0].id).toBe(3);
  })
});
