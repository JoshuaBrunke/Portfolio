import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1Component } from './item1.component';

describe('Item1Component', () => {
  let component: Item1Component;
  let fixture: ComponentFixture<Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Item1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
