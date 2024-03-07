import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDescubraComponent } from './painel-descubra.component';

describe('PainelDescubraComponent', () => {
  let component: PainelDescubraComponent;
  let fixture: ComponentFixture<PainelDescubraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelDescubraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelDescubraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
