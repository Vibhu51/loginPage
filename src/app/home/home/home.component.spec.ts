import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HomeComponent } from './home.component'
import { FormsModule} from '@angular/forms'
import { dataService } from '../../data2.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent
        ,
      ],imports:[RouterTestingModule,HttpClientTestingModule,FormsModule]
    }).compileComponents();
  }));

  it('should create the HomeComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should check for the dataService', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(dataService)
    expect(userService).toBeTruthy();
  });

  it('should check for the login', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.login').textContent).toEqual('Already a user, Login!')
  });

  it('should check for the register', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.register').textContent).toEqual('Join us, if you haven\'t yet')
  });

});

