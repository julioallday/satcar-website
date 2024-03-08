import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPrecosComponent } from './busca-precos.component';

describe('BuscaPrecosComponent', () => {
  let component: BuscaPrecosComponent;
  let fixture: ComponentFixture<BuscaPrecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaPrecosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscaPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
