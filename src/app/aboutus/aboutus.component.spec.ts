import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusComponent } from './aboutus.component';

describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create aboutus component', () => {
    expect(component).toBeTruthy();
  });

  it('should check for the heading', () => {
    const fixture = TestBed.createComponent(AboutusComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toEqual('About us!')
  });

});
