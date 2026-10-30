import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuevaComponent } from './cueva';

describe('Cueva', () => {
  let component: CuevaComponent;
  let fixture: ComponentFixture<CuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuevaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuevaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
