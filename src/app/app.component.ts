import { Component } from '@angular/core';
import { dataService } from './data2.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private data:dataService){
    this.data.fetchUserData()
  }
  title = 'final';
  
}
