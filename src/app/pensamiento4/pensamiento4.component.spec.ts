import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensamiento4Component } from './pensamiento4.component';

describe('Pensamiento4Component', () => {
  let component: Pensamiento4Component;
  let fixture: ComponentFixture<Pensamiento4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensamiento4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pensamiento4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
