import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { fourPageComponent } from './four-page.component';

describe('fourPageComponent', () => {
  let component: fourPageComponent;
  let fixture: ComponentFixture<fourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ fourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(fourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
