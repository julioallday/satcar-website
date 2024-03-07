import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorVeiculosComponent } from './buscador-veiculos.component';

describe('BuscadorVeiculosComponent', () => {
  let component: BuscadorVeiculosComponent;
  let fixture: ComponentFixture<BuscadorVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorVeiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscadorVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
