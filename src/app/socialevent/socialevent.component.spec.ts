import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialeventComponent } from './socialevent.component';

describe('SocialeventComponent', () => {
  let component: SocialeventComponent;
  let fixture: ComponentFixture<SocialeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialeventComponent]
    });
    fixture = TestBed.createComponent(SocialeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
