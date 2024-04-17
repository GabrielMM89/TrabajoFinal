import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensamiento3Component } from './pensamiento3.component';

describe('Pensamiento3Component', () => {
  let component: Pensamiento3Component;
  let fixture: ComponentFixture<Pensamiento3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensamiento3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pensamiento3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
