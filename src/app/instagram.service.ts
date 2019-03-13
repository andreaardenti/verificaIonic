import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private author = '';
  public apiUrl = 'https://fake-tweets-api.herokuapp.com/posts';

  constructor(public httpClient: HttpClient) { }

  public all(): Promise<Feeds[]> {
    return this.httpClient.get<Feeds[]>(this.apiUrl).toPromise();
  }

   public detail(id: number): Promise<Feeds> {
    return this.httpClient.get<Feeds>(`${this.apiUrl}/${id}`).toPromise();
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(author: string) {
      this.author = author;
  }

  public newPost(post: Post): Promise<Post> {
    return this.httpClient.post<Post>(this.apiUrl, post).toPromise();
  }

  public addMessage(id: number, message: Post): Promise<Notice> {
    return this.httpClient.post<Post>(`${this.apiUrl}/${id}/comments`, message).toPromise();
  }

  public getById(id: number): Promise<Feeds> {
    return this.httpClient.get<Feeds>(`${this.apiUrl}/${id}`).toPromise();
  }
}

export interface Feeds {
  id: number;
  author: string;
  message: string;
  image: string;
  likes: [string];
  comments: Comments;
}

export interface Post {
  author: string;
  message: string;
  image: string;
}

export interface Comments {
  author: string;
  message: string;
}

export interface Notice {
  message: string;
  author: string;
}