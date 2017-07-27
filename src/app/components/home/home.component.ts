import { Component } from '@angular/core';
import { AdvertisementService } from "../../services/advertisementServices/advertisement.service";
@Component({
  selector: 'home',
  //template: `<h1>Hello </h1>`,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
   providers: [AdvertisementService]
})
export class HomeComponent  { 

     categories: Array<any>=[]; 
      constructor(advertisementService: AdvertisementService) {
      advertisementService.getCategories().subscribe((data)=>this.categories=data.data.itemList);
 }
}