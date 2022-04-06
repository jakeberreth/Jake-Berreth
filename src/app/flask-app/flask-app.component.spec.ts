import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskAppComponent } from './flask-app.component';

describe('FlaskAppComponent', () => {
  let component: FlaskAppComponent;
  let fixture: ComponentFixture<FlaskAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlaskAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaskAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
