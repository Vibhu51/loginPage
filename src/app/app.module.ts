import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UsersComponent } from "./users/users.component";
import { from } from 'rxjs';




const appRoutes :Routes = [{path:'',component:HomeComponent},
{path:'users/:name', component:UsersComponent, children:[]}
,{path:'aboutus',component:AboutusComponent }]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
