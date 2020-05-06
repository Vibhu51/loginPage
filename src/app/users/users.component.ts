import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { dataService } from '../data2.service'
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:string=''
  productName:string=''
  qty:number=0
  description:string=''
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  products:{}[]
  product:{}[]
  constructor(private route:ActivatedRoute, private servant:dataService, private http:HttpClient) {
    this.user = this.route.snapshot.params['name']
    console.log(this.products)
   }

  ngOnInit() {
    this.servant.fetchItems().subscribe((dd)=>{
      this.user = this.route.snapshot.params['name']
      this.products=dd
      console.log(this.products)
      this.product=dd.filter((d)=>{
        return d.username == this.user
      })
      console.log(this.product)
    })
    //console.log(this.products)
  }
  onAdd(){

    this.servant.addItems({username:this.user,product:this.productName,
      quantity:this.qty,id:this.servant.products.length+1,
       description:this.description})
    this.servant.fetchItems().subscribe((dd)=>{
      this.user = this.route.snapshot.params['name']
      this.productName=''
      this.qty=0
      this.products=dd
      console.log(this.products)
      this.product=dd.filter((d)=>{
        return d.username == this.user
      })
      console.log(this.product)
    })
  }


  onDelete = function(id,product) {
    let a = parseInt(id)+1
    if (confirm('Are you sure?')) {
      const url = `${'http://localhost:3000/lists'}/${a}`;
      return this.http.delete(url).subscribe(()=>{
        console.log('item deleted')
        this.servant.fetchItems().subscribe((dd)=>{
          this.user = this.route.snapshot.params['name']
          this.products=dd
          console.log(this.products)
          this.product=this.products.filter((d)=>{
            return d.username == this.user
          })
          console.log(this.product)
        })

      })
    }
  };

}
