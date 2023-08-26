import { Component ,ViewChild,ElementRef,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPlaceholderService } from '../json-placeholder.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
 
  @Output() postCreated = new EventEmitter<any>();
  createdPost: any = null;
  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private router: Router
  ) {}
  @ViewChild('newPostTitle') newPostTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('newPostBody') newPostBody!: ElementRef<HTMLInputElement>;
  @ViewChild('newPostUserId') newPostUserId!: ElementRef<HTMLInputElement>;

 
    createPost(title: string, body: string, userId: number) {
      const postData = {
        title: title,
        body: body,
        userId: userId,
      };
  
      this.jsonPlaceholderService.createPost(postData).subscribe(() => {
        // After creating the post, refresh the posts list
        this.jsonPlaceholderService.getPosts().subscribe();
        alert('Post created successfully!');
        
      this.router.navigate(['/blog']);
      });
    }
    
  }

 

