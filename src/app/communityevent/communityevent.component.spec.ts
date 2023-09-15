import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityeventComponent } from './communityevent.component';

describe('CommunityeventComponent', () => {
  let component: CommunityeventComponent;
  let fixture: ComponentFixture<CommunityeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityeventComponent]
    });
    fixture = TestBed.createComponent(CommunityeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
