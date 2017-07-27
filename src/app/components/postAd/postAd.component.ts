import { Component } from '@angular/core';
import { AdvertisementService } from "../../services/advertisementServices/advertisement.service";
import { Router } from '@angular/router';
@Component({
  selector: 'postAd',
  //template: `<h1>Hello </h1>`,
  templateUrl: './postAd.html',
  styleUrls: ['./postAd.css']
})

  export class PostAdComponent {
    options: Array<any> = [];
    advertisements: Array<any> = [];
    constructor(private router: Router, private advertisementservice: AdvertisementService) {
        advertisementservice.getCategories().subscribe((data) => {
            this.options = data.data.itemList;
        });
        advertisementservice.getAllAdvertisements().subscribe((data) => {
            this.advertisements = data.data.mypostList
        })

    }
    onSubmit(object: Object) {
        this.advertisementservice.postAd(object).subscribe((data) => {
            console.log('Response: ', data)
        });
        this.advertisementservice.getAllAdvertisements().subscribe((data) => {
            this.advertisements = data.data.mypostList
            console.log('list', data);
        })
        //this.router.navigate(['']); 
    }
    
    editObject(index: any) {
        this.router.navigate(['/editad', index]);
    }

}

 }
