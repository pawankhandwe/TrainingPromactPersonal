import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin,of } from 'rxjs';
import { map,tap, } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private postsList: any[] = [];
  constructor(private http: HttpClient) { }



  getPostWithComments(postId: number): Observable<any> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    const post$ = this.http.get(postUrl);
    const comments$ = this.http.get(commentsUrl);

    return forkJoin([post$, comments$]).pipe(
      map(([post, comments]) => {
        return { post, comments };
      })
    );
  }
  getPostWithId(postId: number): Observable<any> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.http.get(postUrl).pipe(
      map(post => {
        return { post };
      })
    );
    
  }
  
  
  getPosts(): Observable<any[]> {
    if (this.postsList.length > 0) {
      return of(this.postsList);
    } else {
      return this.http.get<any[]>(`${this.baseUrl}/posts?_limit=10`).pipe(
        tap(posts => {
          this.postsList = posts;
        })
      );
    }
  }
  createPost(postData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/posts`, postData).pipe(
      tap(newPost => {
        // Add the new post to the posts list
        this.postsList.unshift(newPost);
      })
    );
  }
  
  updatePost(postId: number, postData: any): Observable<any> {


    return this.http.put<any>(`${this.baseUrl}/posts/${postId}`, postData).pipe(
      tap(newPost=>{
        const index = this.postsList.findIndex(post => post.id === postId);
        this.postsList[index] = newPost;
        console.log(this.postsList);
        console.log(newPost);
        // this.getPosts();

      })
    );;
  }
  

  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/posts/${postId}`);
  }
}
