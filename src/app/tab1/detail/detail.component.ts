import { Component, OnInit } from '@angular/core';
import { InstagramService, Feeds, Notice } from 'src/app/instagram.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public post: Feeds;
  public notice: Notice = {
    message: '',
    author: ''
  };

  constructor(public instagramService: InstagramService, public route: ActivatedRoute, public toastController: ToastController) { }

  ngOnInit() {
    //this.loadFeed();
    const id = this.route.snapshot.params.id;
    this.instagramService.detail(id).then(response => {
      this.post = response;
    });
  }

  loadFeed() {
    if(this.instagramService) {
      this.instagramService.getById(this.route.snapshot.params.id).then(response => {
        this.post = response;
      });
    }
  }

  send() {
    this.notice.author = this.instagramService.getAuthor();
    if (!this.notice.author) {
      this.presentToast('Please set your nick name');
    } else {
      this.instagramService.addMessage(this.post.id, this.notice).then((res) => {
        console.log(res);
        this.post = res;
      this.notice.message = '';
      this.presentToast('Messaggio spedito.')
      });
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
