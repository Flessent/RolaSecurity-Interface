import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProduktComponent } from './item-produkt.component';

describe('ItemProduktComponent', () => {
  let component: ItemProduktComponent;
  let fixture: ComponentFixture<ItemProduktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemProduktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
