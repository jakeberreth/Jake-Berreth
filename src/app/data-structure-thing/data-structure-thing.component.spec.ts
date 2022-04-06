import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructureThingComponent } from './data-structure-thing.component';

describe('DataStructureThingComponent', () => {
  let component: DataStructureThingComponent;
  let fixture: ComponentFixture<DataStructureThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStructureThingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStructureThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
