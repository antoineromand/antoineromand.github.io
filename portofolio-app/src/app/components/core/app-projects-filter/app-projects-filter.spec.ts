import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppProjectsFilter} from './app-projects-filter';

describe('AppProjectsFilter', () => {
  let component: AppProjectsFilter;
  let fixture: ComponentFixture<AppProjectsFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProjectsFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(AppProjectsFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
