import { Component } from '@angular/core';
import { AdvertisementService } from "../../services/advertisementServices/advertisement.service";

@Component({
  selector: 'advertisement',
  //template: `<h1>Hello </h1>`,
  templateUrl: './advertisement.html',
  styleUrls: ['./advertisement.css'],
  providers: [AdvertisementService]
})

export class AdvertisementComponent  {
  advertisementService: any;

  categories: Array<any> = [];
      advertisements: Array<any> = []; 
      constructor(advertisementService: AdvertisementService) {
      advertisementService.getCategories().subscribe((data)=>this.categories=data.data.itemList);
    }

    /*onPost(object: Object) {
        this.advertisementService.postAd(object).subscribe((data:any) => {console.log('Response: ', data)});
        this.advertisementService.getAllAdvertisements().subscribe((data:any) => {
            this.advertisements = data.data.mypostList
            console.log('list', data);
        })
        //this.router.navigate(['']); 
    }*/
 }
