import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  name=""
  searchData:any=[]
constructor(private api:ApiService){}

readValue=()=>
{
  let data:any={
    "name":this.name
  }
  console.log(data)
  this.api.searchProduct(data).subscribe(
    (response:any)=>
    {
      console.log(response)
    }
  )
}


}
