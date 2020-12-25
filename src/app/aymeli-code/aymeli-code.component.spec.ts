import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AymeliCodeComponent } from './aymeli-code.component';

describe('AymeliCodeComponent', () => {
  let component: AymeliCodeComponent;
  let fixture: ComponentFixture<AymeliCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AymeliCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AymeliCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
