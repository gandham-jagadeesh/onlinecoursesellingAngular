import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildaComponent } from './childa.component';

describe('ChildaComponent', () => {
  let component: ChildaComponent;
  let fixture: ComponentFixture<ChildaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
