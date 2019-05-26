import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public imgUrl: any;

  constructor(public navCtrl: NavController,
              public camera: Camera) {

  }

  doGetCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.imgUrl = 'data:image/jpeg;base64,' + imageData;
     alert(this.imgUrl);
    }, (err) => {
     // Handle error
     console.log(err);
     alert(JSON.stringify(err));
    });
  }

}
