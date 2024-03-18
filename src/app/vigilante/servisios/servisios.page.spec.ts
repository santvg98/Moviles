import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServisiosPage } from './servisios.page';

describe('ServisiosPage', () => {
  let component: ServisiosPage;
  let fixture: ComponentFixture<ServisiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServisiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
