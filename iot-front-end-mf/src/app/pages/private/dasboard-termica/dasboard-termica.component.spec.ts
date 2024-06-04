import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardTermicaComponent } from './dasboard-termica.component';

describe('DasboardTermicaComponent', () => {
  let component: DasboardTermicaComponent;
  let fixture: ComponentFixture<DasboardTermicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardTermicaComponent]
    });
    fixture = TestBed.createComponent(DasboardTermicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
