import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesComponentComponent } from './jokes-component.component';

describe('JokesComponentComponent', () => {
  let component: JokesComponentComponent;
  let fixture: ComponentFixture<JokesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
