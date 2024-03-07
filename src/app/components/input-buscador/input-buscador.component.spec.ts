import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuscadorComponent } from './input-buscador.component';

describe('InputBuscadorComponent', () => {
  let component: InputBuscadorComponent;
  let fixture: ComponentFixture<InputBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBuscadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
