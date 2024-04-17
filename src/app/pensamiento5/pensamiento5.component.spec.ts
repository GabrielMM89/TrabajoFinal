import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensamiento5Component } from './pensamiento5.component';

describe('Pensamiento5Component', () => {
  let component: Pensamiento5Component;
  let fixture: ComponentFixture<Pensamiento5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensamiento5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pensamiento5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
