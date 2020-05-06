import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class dataService{
    constructor(private http:HttpClient){
      this.fetchUserData()
      this.fetchItems()
    }
    data:{}[]

    products:{}[]
    
    fetchUserData(){
        this.http.get('http://localhost:3000/users').pipe(map(responseData=>{
          const arr =[]
          for(const element in responseData){
            arr.push({...responseData[element],id:element})
          }
          return arr
        })).subscribe((dd)=>{
          this.data = dd
          //console.log(this.data) 
          //for security purpose it's hidden uncomment this to view data in the console window
        })
    }
    fetchItems(){
      return this.http.get('http://localhost:3000/lists').pipe(map(responseData=>{
        const arr =[]
        for(const element in responseData){
          arr.push({...responseData[element],id:element})
        }
        this.products = arr
        return arr
      }))
  }


  addItems(obj:{}){
    this.http.post('http://localhost:3000/lists',obj).subscribe(responseData=>{
      console.log(responseData)
      //this.fetchItems()
  })
  }

  addUsers(obj:{}){
    this.http.post('http://localhost:3000/users',obj).subscribe(responseData=>{
      console.log(responseData)
      //this.fetchItems()
      this.fetchUserData()
  })
  }

  fetchUserData2(){
    return this.http.get('http://localhost:3000/users').pipe(map(responseData=>{
      const arr =[]
      for(const element in responseData){
        arr.push({...responseData[element],id:element})
      }
      return arr
    }))
}

}