import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxFileSystemComponent } from './linux-file-system.component';

describe('LinuxFileSystemComponent', () => {
  let component: LinuxFileSystemComponent;
  let fixture: ComponentFixture<LinuxFileSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxFileSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxFileSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
