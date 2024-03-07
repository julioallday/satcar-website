import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelProcuradosComponent } from './painel-procurados.component';

describe('PainelProcuradosComponent', () => {
  let component: PainelProcuradosComponent;
  let fixture: ComponentFixture<PainelProcuradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelProcuradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelProcuradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
