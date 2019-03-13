import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public author: string;

  constructor(public instagramService: InstagramService, public toastController: ToastController) {}

  ngOnInit() {
    this.author= this.instagramService.getAuthor();
  }

  set() {
    this.instagramService.setAuthor(this.author);
    console.log(this.author);
    this.presentToast('Thank You for set your nickname')
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}

