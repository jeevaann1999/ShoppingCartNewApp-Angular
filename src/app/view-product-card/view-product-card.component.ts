import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product-card',
  templateUrl: './view-product-card.component.html',
  styleUrls: ['./view-product-card.component.css']
})
export class ViewProductCardComponent {
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response)=>
      {
        this.view=response;
      }
    )
  }
  view:any=[]
}
