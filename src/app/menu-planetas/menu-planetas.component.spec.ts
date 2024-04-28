import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlanetasComponent } from './menu-planetas.component';

describe('MenuPlanetasComponent', () => {
  let component: MenuPlanetasComponent;
  let fixture: ComponentFixture<MenuPlanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPlanetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
