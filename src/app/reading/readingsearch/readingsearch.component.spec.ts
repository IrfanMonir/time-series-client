import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsearchComponent } from './readingsearch.component';

describe('ReadingsearchComponent', () => {
  let component: ReadingsearchComponent;
  let fixture: ComponentFixture<ReadingsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
