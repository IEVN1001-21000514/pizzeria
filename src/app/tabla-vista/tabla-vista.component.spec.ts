import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVistaComponent } from './tabla-vista.component';

describe('TablaVistaComponent', () => {
  let component: TablaVistaComponent;
  let fixture: ComponentFixture<TablaVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
