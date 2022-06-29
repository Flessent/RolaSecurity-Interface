import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduktComponent } from './list-produkt.component';

describe('ListProduktComponent', () => {
  let component: ListProduktComponent;
  let fixture: ComponentFixture<ListProduktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
