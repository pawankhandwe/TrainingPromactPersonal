import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JsonPlaceholderService } from '../json-placeholder.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  postsList$: Observable<any[]> = of([]);

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit() {
    this.postsList$ = this.jsonPlaceholderService.getPosts();
  }

  createdPost: any = null;
  selectedPostForUpdate: any = null;
  updatePostData: any = {};
  @ViewChild('newPostTitle') newPostTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('newPostBody') newPostBody!: ElementRef<HTMLInputElement>;
  @ViewChild('newPostUserId') newPostUserId!: ElementRef<HTMLInputElement>;
  @ViewChild('updatePostTitle') updatePostTitle!: ElementRef<HTMLInputElement>;
  showPostsList: boolean = false;

  createNewPost(title: string, body: string, userId: number) {
    const postData = {
      title: title,
      body: body,
      userId: userId,
    };

    this.jsonPlaceholderService.createPost(postData).subscribe(newPost => {
      this.createdPost = newPost;
      alert('Post created successfully!');
      this.postsList$.subscribe(posts => {
        this.postsList$ = of([...posts, newPost]);
      });
      this.clearInputFields();
    });
  }

  updatePost(postId: number, updatedTitle: string) {
    console.log('Updating post:', postId, updatedTitle);
  
    this.selectedPostForUpdate.title = updatedTitle;
  
    // No need to update postsList$ here
  
    this.updatePostData = {};
    this.selectedPostForUpdate = null;
  
    console.log('Updated selectedPostForUpdate:', this.selectedPostForUpdate);
  }
  
  confirmUpdatePost() {
    if (this.selectedPostForUpdate) {
      const postId = this.selectedPostForUpdate.id;
      const updatedTitle = this.updatePostTitle.nativeElement.value;

      this.updatePost(postId, updatedTitle);
      alert('Post Updated Successfully!');
    }
  }

  clearInputFields() {
    this.newPostTitle.nativeElement.value = '';
    this.newPostBody.nativeElement.value = '';
    this.newPostUserId.nativeElement.value = '';
  }

  deletePost(postId: number) {
    this.postsList$.subscribe(posts => {
      this.postsList$ = of(posts.filter(post => post.id !== postId));
    });
    alert('Post Deleted successfully!');
  }

  togglePostsList() {
    this.showPostsList = !this.showPostsList;
  }

  selectPostForUpdate(post: any) {
    this.selectedPostForUpdate = post;
    // No need to set selectedPostForUpdate.nativeElement.value as it's not an input element
    this.updatePostTitle.nativeElement.value = post.title;
  }
  
}
