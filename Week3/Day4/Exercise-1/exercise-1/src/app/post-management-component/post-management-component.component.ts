import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { JsonPlaceholderService } from '../json-placeholder.service';


@Component({
  selector: 'app-post-management-component',
  templateUrl: './post-management-component.component.html',
  styleUrls: ['./post-management-component.component.css']
})
export class PostManagementComponentComponent implements OnInit {
 
  postsList: any[] = [];
  fetchedPosts: any[] = [];
  createdPost: any = null;
  updatedPost: any = null;
  deletedPostId: number | null = null;
  updatePostData: any = {};
  @ViewChild('newPostTitle') newPostTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('newPostBody') newPostBody!: ElementRef<HTMLInputElement>;
  @ViewChild('newPostUserId') newPostUserId!: ElementRef<HTMLInputElement>;
  @ViewChild('updatePostTitle') updatePostTitle!: ElementRef<HTMLInputElement>;
  showPostsList: boolean = false;
  selectedPostForUpdate: any = null;

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private renderer: Renderer2
  ) {}

  createNewPost(title: string, body: string, userId: number) {
    const postData = {
      title: title,
      body: body,
      userId: userId,
    };
    // this.jsonPlaceholderService.createPost(postData).subscribe(newPost => {
      this.createdPost = postData;
      alert('Post created successfully!');
      this.postsList.push(postData);
      this.clearInputFields();
    // });
  }

  updatePost(postId: number, updatedTitle: string) {
    console.log('Updating post:', postId, updatedTitle);
    
    this.updatePostData.title = updatedTitle;
    
      const updatedIndex = this.postsList.findIndex(post => post.id === postId);
      if (updatedIndex !== -1) {
        this.postsList[updatedIndex].title = updatedTitle;
      }
      
      this.updatePostData = {};
      this.selectedPostForUpdate = null;

      console.log('Updated postsList:', this.postsList);
 
  }

  confirmUpdatePost() {
    if (this.selectedPostForUpdate) {
      const postId = this.selectedPostForUpdate.id;
      const updatedTitle = this.updatePostTitle.nativeElement.value;

      this.updatePost(postId, updatedTitle);
      alert('Post Updated Sucessfully!');
    }
  }

  clearInputFields() {
    this.newPostTitle.nativeElement.value = '';
    this.newPostBody.nativeElement.value = '';
    this.newPostUserId.nativeElement.value = '';
  }

  ngOnInit() {
    this.jsonPlaceholderService.getPosts().subscribe(posts => {
      this.fetchedPosts = posts;
      this.postsList = [...this.fetchedPosts];
    });
  }

  deletePost(postId: number) {
    this.postsList = this.postsList.filter(post => post.id !== postId);
    alert('Post Deleted successfully!');
  }

  togglePostsList() {
    this.showPostsList = !this.showPostsList;
  }

  selectPostForUpdate(post: any) {
    this.selectedPostForUpdate = post;
    this.selectedPostForUpdate.nativeElement.value=post.id;
    this.updatePostTitle.nativeElement.value = post.title;
    
    console.log(post);
    console.log(this.updatePostTitle);
    
    
  }

}
