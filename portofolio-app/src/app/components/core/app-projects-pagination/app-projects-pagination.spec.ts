import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppProjectsPagination} from './app-projects-pagination';

describe('AppProjectsPagination', () => {
  let component: AppProjectsPagination;
  let fixture: ComponentFixture<AppProjectsPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProjectsPagination]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppProjectsPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
