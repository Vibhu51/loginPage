import { Component, OnInit } from '@angular/core';
import { dataService } from '../../data2.service'
import { ActivatedRoute,Router } from '@angular/router'
import { Binary } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginPage=false
  userlogin:string=''
  passlogin:string=''
  notlogged=false
  duplicate=false
  usercreated=false
  length=true
  registerusername:string=''
  registername:string=''
  registerpassword:string=''
  constructor(private servant:dataService, private router:Router) { }

  ngOnInit() {
  }
loggedIn(){
let i=0
let templist = this.servant.data
this.servant.fetchUserData2().subscribe((dd)=>{
  for(i=0;i<dd.length;i++){
  if(dd[i].username==this.userlogin && dd[i].password == this.passlogin){
    console.log('Yes it\'s a match')
    this.router.navigate(['users',this.userlogin])
    
    break
  }
  else{
    this.notlogged=true
  }
  }})

}

loginPageCheck(){
  if(this.loginPage===false){
    this.loginPage=true
  }
  else{
    this.loginPage=false
  }
  
}

onRegister(){
  // this.duplicate=false
  // this.length=true
console.log(this.registername,this.registerpassword,this.registerusername)
let i =0
this.servant.fetchUserData2().subscribe((dd)=>{
  for(i=0;i<dd.length;i++){

  if(dd[i].username==this.registerusername){
    this.duplicate=true
    break
  }
  if(this.registerpassword.length<8){
    this.length=false
    this.registerpassword=''
    break
  }

  if(this.duplicate==false && this.length==true){
    this.servant.addUsers({username:this.registerusername,password:this.registerpassword,name:this.registername})
    this.usercreated=true
    this.registerusername=''
    this.registername=''
    this.registerpassword=''
  }

}
})


}

}
