import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { UsersComponent } from './users.component'
import { FormsModule} from '@angular/forms'
import { dataService } from '../data2.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent
        ,
      ],imports:[RouterTestingModule,HttpClientTestingModule,FormsModule]
    }).compileComponents();
  }));

  it('should create the userscomponent', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should check for the dataService', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    let userService = fixture.debugElement.injector.get(dataService)
    expect(userService).toBeTruthy();
  });

});

