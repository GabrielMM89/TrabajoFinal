import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensamiento1Component } from './pensamiento1.component';

describe('Pensamiento1Component', () => {
  let component: Pensamiento1Component;
  let fixture: ComponentFixture<Pensamiento1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensamiento1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pensamiento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
