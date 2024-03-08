import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelMarcasComponent } from './painel-marcas.component';

describe('PainelMarcasComponent', () => {
  let component: PainelMarcasComponent;
  let fixture: ComponentFixture<PainelMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelMarcasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
