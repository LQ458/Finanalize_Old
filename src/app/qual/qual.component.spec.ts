import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualComponent } from './qual.component';

describe('QualComponent', () => {
  let component: QualComponent;
  let fixture: ComponentFixture<QualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
