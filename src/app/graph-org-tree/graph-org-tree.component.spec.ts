import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphOrgTreeComponent } from './graph-org-tree.component';

describe('GraphOrgTreeComponent', () => {
  let component: GraphOrgTreeComponent;
  let fixture: ComponentFixture<GraphOrgTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphOrgTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphOrgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
