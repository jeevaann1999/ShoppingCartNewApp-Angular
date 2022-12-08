import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product2',
  templateUrl: './search-product2.component.html',
  styleUrls: ['./search-product2.component.css']
})
export class SearchProduct2Component {
  name = ""
  searchData: any = []
  constructor(private api: ApiService) { }

  readValue = () => {
    let data: any = {
      "name": this.name
    }
    console.log(data)
    this.api.searchData(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.length == 0) {
          alert("Invalid product name")
        } else {
          this.searchData = response;
        }
      }
    )
  }
}
