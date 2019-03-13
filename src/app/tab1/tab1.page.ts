import { Component, OnInit } from '@angular/core';
import { InstagramService, Feeds } from '../instagram.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public posts: Feeds[] = [];
  constructor(public instagramService: InstagramService) {}

  ngOnInit() {
    this.instagramService.all().then(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }
}