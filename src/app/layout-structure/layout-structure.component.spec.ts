import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutStructureComponent } from './layout-structure.component';

describe('LayoutStructureComponent', () => {
  let component: LayoutStructureComponent;
  let fixture: ComponentFixture<LayoutStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
