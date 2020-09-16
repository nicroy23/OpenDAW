import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignStructureComponent } from './design-structure.component';

describe('DesignStructureComponent', () => {
  let component: DesignStructureComponent;
  let fixture: ComponentFixture<DesignStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
