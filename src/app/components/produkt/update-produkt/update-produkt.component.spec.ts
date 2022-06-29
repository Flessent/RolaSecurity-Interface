import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduktComponent } from './update-produkt.component';

describe('UpdateProduktComponent', () => {
  let component: UpdateProduktComponent;
  let fixture: ComponentFixture<UpdateProduktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProduktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
