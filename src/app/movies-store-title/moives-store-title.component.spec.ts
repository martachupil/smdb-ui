import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoivesStoreTitleComponent } from './moives-store-title.component';

describe('MoivesStoreTitleComponent', () => {
  let component: MoivesStoreTitleComponent;
  let fixture: ComponentFixture<MoivesStoreTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoivesStoreTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoivesStoreTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
