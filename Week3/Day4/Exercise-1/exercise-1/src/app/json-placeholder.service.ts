import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    // return this.http.get<any[]>(`${this.baseUrl}/posts`);
    return this.http.get<any[]>(`${this.baseUrl}/posts?_limit=10`);
  }

  

  updatePost(postId: number, postData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/posts/${postId}`, postData);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/posts/${postId}`);
  }
}
