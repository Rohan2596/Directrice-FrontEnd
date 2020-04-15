import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCDetailComponent } from './kycdetail.component';

describe('KYCDetailComponent', () => {
  let component: KYCDetailComponent;
  let fixture: ComponentFixture<KYCDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KYCDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
