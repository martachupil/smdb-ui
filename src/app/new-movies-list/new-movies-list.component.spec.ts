import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoviesListComponent } from './new-movies-list.component';

describe('NewMoviesListComponent', () => {
  let component: NewMoviesListComponent;
  let fixture: ComponentFixture<NewMoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMoviesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
