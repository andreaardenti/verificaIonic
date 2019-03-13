import { Component } from '@angular/core';
import { InstagramService, Post } from '../instagram.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public post: Post = {
    author: '',
    message: '',
    image: '',
  };

constructor(public instagramService: InstagramService, public toastController: ToastController) {}

set() {
  this.instagramService.newPost(this.post).then(() => {
    this.presentToast('Post has been created');
  });
}

async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000
  });
  toast.present();
}

}
