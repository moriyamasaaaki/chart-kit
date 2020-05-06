import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGraghComponent } from './line-gragh.component';

describe('LineGraghComponent', () => {
  let component: LineGraghComponent;
  let fixture: ComponentFixture<LineGraghComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGraghComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGraghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
