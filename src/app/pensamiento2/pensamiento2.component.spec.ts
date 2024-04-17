import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensamiento2Component } from './pensamiento2.component';

describe('Pensamiento2Component', () => {
  let component: Pensamiento2Component;
  let fixture: ComponentFixture<Pensamiento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensamiento2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pensamiento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
