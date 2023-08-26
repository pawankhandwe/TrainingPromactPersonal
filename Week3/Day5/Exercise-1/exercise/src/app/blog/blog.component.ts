import { Component,OnInit ,Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { JsonPlaceholderService } from '../json-placeholder.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public postsList: any[] = [];
  fetchedPosts: any[] = [];
  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.jsonPlaceholderService.getPosts().subscribe(posts => {
      this.fetchedPosts = posts;
      this.postsList = [...this.fetchedPosts];
    });
  
 
  }

  navigateToCreatePost()
  {
    this.router.navigate(['/create-post']);

  }
  onPostCreated(newPost: any) {
    // Push the new post into the postsList
    this.postsList.push(newPost);
  }
  navigateToPostDetails(postId: number) {
    // Navigate to the Post Details page with the post ID as a parameter
    this.router.navigate(['/post-details', postId]);
  }
  navigateToEditPost(postId: number) {
    // Navigate to the Post Details page with the post ID as a parameter
    this.router.navigate(['/edit-post', postId]);
  }
 
}
